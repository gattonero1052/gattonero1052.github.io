---
title: "Java Generics Tricky Code"
cover: ""
category: "java"
date: "2019/10/25"
abstract: "收集整理一些比较难以理解的Java泛型问题，以及详细解释其中的原理"
tags:
    - 中文
    - java
    - generics
---
### Purpose
收集整理一些比较难以理解的Java泛型问题，以及详细解释其中的原理

---
### List Wildcards
PECS (Producer extend, Consumer super)
#### Class and Interface
```java
interface Grandpa {}
interface Grandma {}
interface Father extends Grandpa,Grandma {}
interface Son extends Father {}
interface Daughter extends Father {}

class CGrandpa implements Grandpa {}
class CGrandma implements Grandma {}
...
```
#### Producer
```java
List<? extends Father> producer = new ArrayList();
```

其中`? extends Father`表示的是Father的subtype，包括Father
```java
List<? extends Father> son_producer = new ArrayList<Son>();
List<? extends Father> daughter_producer = new ArrayList<Daughter>();
List<? extends Father> father_producer = new ArrayList<Father>();
//all above are valid, below are invalid
List<? extends Father> producer = new ArrayList<Grandpa>();
List<? extends Father> producer = new ArrayList<Grandma>();
```
对于函数参数为该泛型的方法，例如`boolean add(E e)`
```java
son_producer.add(new CSon()); // invalid
son_producer.add(new CFather()); // invalid
son_producer.add(new CGrandpa()); // invalid
son_producer.add(null); //valid
```
不能使用任何非空元素作为参数的原因是：
- add的函数声明`boolean add(E e)`中，函数参数为 `E`，和List中的泛型相同
- `? extends Father`代表任何Father或Father的subtype，所以该泛型的subtype是不确定的，但是supertype确定

- 从而除了null以外，任何参数的类型都无法保证可以作为该泛型的子类从而进行upcasting，所以只能使用null作为函数的参数

对于返回类型为该泛型的方法，例如`E get(int index)`
```java
List<Son> sonList = new ArrayList<>();
sonList.add( new CSon() );
sonList.add( new CSon() );
sonList.add( new CSon() );
son_producer = sonList;

Father father = son_producer.get(0);//valid
Grandpa grandpa = son_producer.get(0);//valid
```
因为返回值是Father的subtype，所以可以进行upcasting，获取所需的supertype对象
#### Consumer
```java
List<? super Father> consumer = new ArrayList();
```
其中`<? super Father>`表示Father的supertype，包括Father
```java
List<? super Father> grandpa_consumer = new ArrayList<Grandpa>();
List<? super Father> grandma_consumer = new ArrayList<Grandma>();
List<? super Father> father_consumer = new ArrayList<Father>();
//all above are valid, below are invalid
List<? super Father> son_consumer = new ArrayList<Son>();
List<? super Father> daughter_consumer = new ArrayList<Daughter>();
```
对于函数参数为该泛型的方法，例如`boolean add(E e)`
```java
father_consumer.add(new CFather());//valid
father_consumer.add(new CSon());//valid
father_consumer.add(null);//valid
father_consumer.add(new CGrandpa());//invalid
```
可以使用任何Father以及其subtype的原因是：
- add的函数声明`boolean add(E e)`中，函数参数为 `E`，和List中的泛型相同
- `? super Father`代表Father或Father的supertype，所以该泛型的subtype确定，而supertype可以看成统一为Object
- 从而任何Father的subtype都可以作为参数，upcasting为该泛型，当然null也可以
对于返回类型为该泛型的方法，例如`E get(int index)`
```java
Father father = father_consumer.get(0);//invalid
Object object = father_consumer.get(0);//valid
```
这里要把泛型的supertype不确定，所以在没有强制转换的情况下，只能返回对象只能是Object类型的

#### Tips
- `<? extends XXX>`和`<? super XXX>`这两个通配符的行为并不对称，原因在于子类的upcasting可以是隐式的，而父类的downcasting并不是
- 假设类泛型为E，当E作为方法参数时，我们需要把某个类upcasting成E，而E作为方法返回值时，我们需要把E upcasting成某个类
- 因为通过接口实现的多态也符合泛型的规则，所以这里不使用子类(subclass)和父类(superclass)的称呼，而使用subtype和supertype
- Object是任何类的supertype，没有哪个类是任何类的subtype
- null是任何类的对象

--- 
### Wildcard Capture
通配符捕获
### Code

```java
void foo(List<?> i) {
    i.set(0, i.get(0));//invalid
}

void foo(List i) {
    i.set(0, i.get(0));//valid
}

<T> void foo(List<T> i) {
    i.set(0, i.get(0));//valid
}
```

错误原因
- ? 作为通配符，表示任意一个类（? 可以理解为 ? extends Object），通常被编译器用作类型推断使用，但是当编译器无法做出类型推断，从而无法保证类型安全时，就会抛出包含"capture of"的错误
- `i.get(0)`没有问题，可以获取其中的元素`Object o = i.get( 0 );//valid`
- set方法的声明是`E set(int index, E element)`，也就是说，List的泛型必须和入参保持一致
- ? 代表了任意类，而显然Object类型无法进行upcasting

而对于其余两种方法，编译器可以确定`i.get(0)`的类型是i.set所需的类型（保证可以upcasting），换句话说，下面代码断的报错方式，和第一个是同一个原理
```java
<T> void foo(List<T> i) {
    i.set(0, (Object)i.get(0));//invalid
}
```
---
### Erasure and override
类型擦除与方法覆写
#### Code
```java
public class Node<T> {

    public T data;

    public Node(T data) { this.data = data; }

    public void setData(T data) {
        System.out.println("Node.setData");
        this.data = data;
    }
}

public class MyNode extends Node<Integer> {
    public MyNode(Integer data) { super(data); }

    public void setData(Integer data) {
        System.out.println("MyNode.setData");
        super.setData(data);
    }
}
```
问题是，下列代码是怎么输出的：
```java
MyNode mn = new MyNode(5);
Node n = mn;
n.setData("Hello");     
Integer x = mn.data;
```
我们假设类型擦除能够正常运作，那么Node类中的函数签名中的泛型，都会被改成Object类型，也就是类似Node(Object data)

那么MyNode中的setData，就不会override Node中的setData，因为签名不同，所以`n.setData("Hello")`会正常执行，错误会在`Integer x = mn.data`这里

但实际情况并不是这样，ClassCastException会在`n.setData("Hello")`被执行时抛出，而不是下一句

原因在于，这里起到作用的是Bridge Method。

对于多态（polymorphism）的实现来说，子类如果继承泛型类的方法，那么也应该override其方法，而不应该因为类型擦除而保留一个并未定义过的签名中包含Object的原始方法

这里的setData(Object data)应该被setData(Integer data) override，这样才符合多态。为了满足这点，编译器就会针对泛型类的子类生成Bridge Method

```java
// Bridge method generated by the compiler
//
public void setData(Object data) {
    setData((Integer) data);
}
```

试想如果有了这个自动生成的方法，是不是就可以解释为什么ClassCastException会在`n.setData("Hello");`中被抛出，而String类作为`n.setData`的参数，并不会产生错误

总结一下，继承泛型类之后，**不用考虑类型擦除后生成的新方法会不会被override这样的问题**，因为有Bridge method，类型擦除后，生成的参数类型为Object的方法实际上会被override并转到新方法中

#### Tips
- Bridge Method可以被反射获取到，也可以通过反射调用，通过`method.isBridge()`可以获取一个方法是否是Bridge Mehtod
- 方法泛型的目的是为了保证编译期的类型安全，并不会给运行时添加负担，也就是说，加不加泛型对于运行时影响不大（加了泛型后可能少了类型强转的字节码，其他字节码不会发生变化）
- 两个字节码完全一致但使用方式不同的函数：

```java
<T> T foo(List<T> i) {
    i.set(0, i.get(0));
    return i.get( 0 );
}

Object foo2(List i) {
    i.set(0, i.get(0));
    return i.get( 0 );
}
```

基于Java的类型擦除机制，这两个函数在运行期的字节码是完全相同的，但是
```java
Object o = foo(new ArrayList<String>(Arrays.asList("1","2")));//valid
String s = foo(new ArrayList<String>(Arrays.asList("1","2")));//valid

Object o2 = foo2(new ArrayList<String>(Arrays.asList("1","2")));//valid
String s2 = foo2(new ArrayList<String>(Arrays.asList("1","2")));//invalid
```
最后一行会出现编译期错误，因为不符合类型安全的要求
- 上面例子中`Arrays.asList("1","2")`的返回值是`java.util.Arrays.ArrayList`，不是`java.util.ArrayList`，要加一层构造方法包装

---
### Recursive Generics
递归泛型
#### Code
```java
public abstract class Node <N extends Node<N>>  {
    public final List<N> children = new ArrayList<N>();
    public final N parent;

    protected Node(N parent) {
        this.parent = parent;
        parent.children.add(this);  // error: incompatible types
    }

    public N getParent() {
        return parent;
    }
    public List<N> getChildren() {
        return children;
    }
}

public class SpecialNode extends Node<SpecialNode> {
    public SpecialNode(SpecialNode parent) {
        super(parent);
    }
}
```
我们的问题是，为什么会出现error

首先，定义这个两个class的目的在于：定义一种类的抽象行为，即在初始化的时候把一个自身成员加进一个ArrayList的实例变量中

其中，通过泛型确保加进的对象一定是子类（N extends Node```<N>```），这里看上去像是一种递归形式的定义从而无法处理，其实只需要考虑N extends Node就可以了，因为这是一种特殊的写法，举个例子

```java
public static abstract class Node <N extends Node<N>>  {...}
```
是可行的，但是
```java
public static abstract class Node <N extends Node<N extends<Node<N>>>>  {...}
```
是不可行的，尽管语义相同

所以说这样递归定义的泛型，是一种特殊的表示，表示子类声明的泛型必须是子类自身

如果这样还是难以理解，下面这个例子说明了`Node <N extends Node<N>>` 和 `Node <N extends Node>` 的区别

对于递归泛型`<N extends Node<N>>`
```java
abstract class Node <N extends Node<N>>  {
    ...
}
    
//invalid
class SpecialNode extends Node<Node> {
    ...
}

//valid
class SpecialNode extends Node<SpecialNode> {
    ...
}
```
而对于非递归泛型`<N extends Node>`
```java
abstract class Node <N extends Node>  {
    ...
}
    
//valid
class SpecialNode extends Node<Node> {
    ...
}

//valid
class SpecialNode extends Node<SpecialNode> {
    ...
}
```

回到之前的问题
```java
parent.children.add(this);  // error: incompatible types
```
这里，ArrayList里存储的对象应该是N，而this所获取的并不是N，而是N的supertype，所以不能进行upcasting

解决方法：
- 进行类型强转`add((N)this)`
- 改变ArrayList的泛型`public final List<? super Node> children = new ArrayList<>();`，并修改getChildren的返回值·`public List getChildren() {...`
- 通过方法直接获取N的实例，即在抽象类中定义方法，在子类中实现

```java

//abstract class
abstract N getThis();

//subclass
SpecialNode getThis(){ return this; }
```

---
### Embedded Generic Infer
泛型方法嵌套中的类型推断
#### Code
```java
static <T> T[] topFn(T t1, T t2){
    return subFn( t1, t2 );
}

static <T> T[] subFn(T...ts){
    return ts;
}

public static void main( String[] args ) {
    subFn("Hello","World"); //valid
    topFn( "Hello","World" ); //valid

    String[] results = subFn("Hello","World"); //valid
    results = topFn( "Hello","World" ); //invalid
}
```
首先我们观察`subFn("Hello","World")`，通过类型推断，编译器把subFn中的参数替换为了String，从而返回`String[]`，这点没有问题

再观察`topFn( "Hello","World" );`，在编译器，同样地通过类型推断，我们知道该函数返回的也是`String[]`，但是对于函数内部的调用，我们无法通过类型推断去替换subFn的泛型T，从而subFn返回的是`Object[]`

所以方法可以调用，但是返回值不是本来期望的，将`Object[]`强转成`String[]`会发生错误

解决方法：把遍历`Object[]`强转所有元素到`String[]`即可，但这比较复杂，所以尽量避免泛型方法的嵌套
#### Tips
- 函数的类型推断仅仅作用在编译期，也就是说，如果一段代码必须通过执行能确定其类型，那么类型推断是无法作用的

---
### Java Version Matters

#### Method
```java
static void handleList(List<String> list){}
```
#### Code
```java
List<String> stringList = Collections.emptyList();//valid
handleList(Collections.<String>emptyList())//valid
handleList(Collections.emptyList());//depend on Java version
```
在Java SE 7和Java SE 7之前，是无法从函数的参数类型进行类型推断的，必须显式指定，但Java SE8之后可以


### Refs
>https://stackoverflow.com/questions/1910892/what-is-the-difference-between-super-and-extends-in-java-generics

>https://stackoverflow.com/questions/4343202/difference-between-super-t-and-extends-t-in-java

>https://www.cnblogs.com/hongdada/p/10683795.html

>https://stackoverflow.com/questions/5836662/extending-from-two-classes

>https://docs.oracle.com/javase/tutorial/java/generics/

>http://www.angelikalanger.com/GenericsFAQ/FAQSections/ProgrammingIdioms.html#FAQ205

>https://jrebel.com/rebellabs/java-generics-cheat-sheet/