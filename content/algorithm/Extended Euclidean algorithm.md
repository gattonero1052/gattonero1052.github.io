---
title: "Find integer x,y for ax + by = c"
cover: ""
category: "algorithm"
date: "2019/10/22"
abstract: "求线性同余方程ax+by=c的整数解"
tags:
    - 中文
    - algorithm
    - math
---
### 问题
- 求线性同余方程ax+by=c的整数解

### 思路
首先介绍下欧几里得算法的原理，众所周知，欧几里得算法是辗转相除法，这里给出证明：

假设a>b，证明 gcd(a,b) = gcd(a mod b,b)
设a=bk+c，c=a mod b
如果D=gcd(b,c)>gcd(a,b)，则等式 a=bk+c 右边除以D是整数，但左边除以D不是整数
如果gcd(b,c)<gcd(a,b)=D，则等式 c=a-bk 右边除以D是整数，但左边除以D不是整数
可见均矛盾，故gcd(b,c)=gcd(a,b)

拓展欧几里得算法也是基于这个递推式，根据[裴蜀定理](https://zh.wikipedia.org/wiki/%E8%B2%9D%E7%A5%96%E7%AD%89%E5%BC%8F)，线性同余方程ax+by=c有整数解的充要条件是c|gcd(a,b)，那么我们设a>=b，有
- ax1+bx2=1
- 根据 gcd(a,b)=gcd(b,a mod b)=1，我们有
- bx2 + (a mod b)y2=1
- 若t = a/b，有
- bx2 + (a mod b + bt -bt)y2 = 1
化简得 ay2 + b(x2-ty2) = 1
因为a mod b<b，故问题的规模可以逐步化简直至b=1，此时取一个解：xn=0, yn=1（这里也可以看出，方程有无穷多解），逐步递归即可得到答案

### 解决
```java
    public int[] extended(int a, int b, int c){//ax+by=c
        if (a<b){a^=b;b^=a;a^=b;}
        return extended(a/c,b/c);
    }

    public int[] extended(int a, int b){
        if(b==1) return new int[]{0,1};//写成b==0 return 1,0一个道理，但为什么要多一步呢？
        int[] next = extended(b,a%b);
        return new int[]{next[1],next[0]-a/b*next[1]};
    }
```



### Tips
- 注意裴蜀定理中c|gcd(a,b)是充要条件，也就是说如果不符合则无解，这里为了方便不考虑这种情况，另外也不考虑a=b=c=0这种特殊情况
- gcd(a,b) * lcm(a,b) = a*b的证明：https://oi-wiki.org/math/gcd/#_5
- ax+by=1和ax≡1(mod b)完全等价，故可以用拓展欧几里得算法来求逆元，当然求逆元也有其他方式，比如线性时间复杂度中求a以内所有数的逆元，这里不展开了
- 如果不想让x或者y出现负数，可以使 x = (x+b)%b 或者 y=(y+a)%a