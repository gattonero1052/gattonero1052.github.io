---
title: "Java Multi Thread Synchronize"
cover: ""
category: "Java"
date: "2019/10/4"
abstract: ""
tags:
    - 中文
    - Java
    - multi thread
    - synchronize
---

### 线程安全相关问题

- 如何定义一个对象是否是线程安全的
> 当多个线程访问同一个对象时，如果不用考虑这些线程在运行时环境下的调度和交替运行，也不需要进行额外的同步，或者在调用方进行任何其他的协调操作，调用这个对象的行为都可以获取正确的结果，那这个对象是线程安全的

- 线程安全问题的主要原因是
>主内存和工作内存数据不一致，重排序（为了性能优化，一般包括编译器指令重排序和处理器指令重排序）导致竞态条件下的程序执行不确定性

### synchronized
- synchronized的应用方式主要有修饰实例方法，修饰静态方法，修饰代码块
- 修饰实例方法

>对实例方法的修饰，同步锁加在当前实例对象上，当一个线程访问改实例的synchronized方法时，其他线程不能访问该方法

>同步锁和实例对象一一对应，如果是一个线程 A 需要访问实例对象 obj1 的 synchronized 方法 f1(当前对象锁是obj1)，另一个线程 B 需要访问实例对象 obj2 的 synchronized 方法 f2(当前对象锁是obj2)，是可以同时访问同一个方法的，因为两个实例对象锁并不同相同

- 修饰静态方法
>对静态方法的修饰，同步锁加在当前类的class对象上（并非实例对象），所以不同的线程可以同时访问同一实例的同步静态方法和同步实例方法

- 修饰代码块
>实例对象锁：synchronized(this){...}
>class对象锁：synchronized(XXX.class){...}

- synchronized的可重入性
在一个线程调用synchronized方法的同时在其方法体内部调用该对象另一个synchronized方法，也就是说一个线程得到一个对象锁后再次请求该对象锁，是允许的，这就是synchronized的可重入性

- synchronized与等待唤醒机制（wait, notify）
>调用等待唤醒机制相关方法时，必须获得当前对象的monitor对象，而只有synchronized关键字才能获取到monitor对象，所以只有在同步方法块中才能调用wait, notify方法
```java
synchronized (obj) {
       obj.wait();
       obj.notify();
       obj.notifyAll();         
 }
```
>wait和sleep的对比：sleep方法并不会让当前线程释放锁，但是wait会命令当前线程在执行完同步代码段后释放持有的锁

- Java对象在内存中的布局

名称 | 内容
---|---
对象头 | 具体如下
实例变量 | 实例所属类的属性，数组长度等信息
填充数据 | 保持字节对齐而填充的数据（因对象的起始地址必须是8字节整数倍）

- Java对象头
> JVM使用2个字节来存储该信息，如果是数组对象，会有1个额外的字节存储数组长度

名称 | 内容
---|---
Mark Word | 存储对象的hashCode、锁信息或分代年龄或GC标志等信息
Class Metadata Address | 类型指针指向对象的类元数据，JVM通过这个指针确定该对象是哪个类的实例

### Tips
- 线程随机竞争同一资源时，如果对访问顺序敏感，那么此时存在静态条件
- 
### ref
https://www.jianshu.com/p/d52fea0d6ba5
