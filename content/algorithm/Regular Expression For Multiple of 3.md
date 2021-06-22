---
title: "Regular Expression For Multiple of 3"
cover: ""
category: ""
date: "2019/10/22"
abstract: "使用正则判断n能否被3整除"
tags:
    - 中文
    - algorithm
    - regular-expression
    - DFA
---

### 问题
使用正则判断n能否被3整除
### 思路
根据整除性构建DFA（确定有限自动状态机），再根据DFA构建正则（[Kleen算法](https://en.wikipedia.org/wiki/Kleene%27s_algorithm)）
### 解决
我们从高位读取字符串，并将余数作为状态，有如下状态转移表：
X |'0''1'
0 | 0  1
1 | 2  0
2 | 1  2
（X表示 状态\当前字符）
比如说状态是2，说明当前数字除3余2，那么当前字符是'0'时，余数自然是1，应该转移到1状态

DFA如下：
![DFA](https://upload-images.jianshu.io/upload_images/4655525-0c49a4eac221f80f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

初始状态是0，我们只要判断终结状态是否为0即可
观察图中的一个自环和一个0-1-2-1-0的大环，我们可以写出两种正则
`0*`
`1(01*0)*1`
故得到  `(0 | 1(01*0)*1)*`

### 代码
```javascript
for(var i=1;i<100;i++)
 if(!/^(0|1(01*0)*1)*$/.test(Number(3*i).toString(2))) console.log(i)//undefined
```

### Tips
- 符合要求的正则不止一个，但是上述正则应该是最简单的之一
- 按照相应算法，可以获得任意数字的整除性判断正则

### Ref
>https://en.wikipedia.org/wiki/Kleene%27s_algorithm
>https://zhidao.baidu.com/question/1383837207982172220.html
>Algorithm 4th P518