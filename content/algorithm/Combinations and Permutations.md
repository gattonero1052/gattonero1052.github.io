---
title: "Combinations and Permutations"
cover: ""
category: "algorithm"
date: "2019/10/20"
abstract: "排列和组合"
tags:
    - 中文
    - algorithm
    - combination
    - permutation
    - bitwise
---
### 问题
排列（Permutation）：求1,2,3...n的不同排列方式（n!）
### 思路
普通的排列问题，在python库中甚至有现成的库可以用来解决，我们这里考虑两种方案，首先是回溯的思路（递归）：
基于交换元素的回溯实现较为简单，每一次交换循环位置的元素和首元素，直到循环位置抵达末尾，交换完毕后回溯

可能为什么要用交换来求排列看上去比较难理解，那么考虑用最原始的方式，即选择任意元素作为第一个元素，再选择除第一个元素以外的任意一个作为第二个元素。。。

如果我们要记录所选元素是否被选择过，需要使用一个布尔数组，但其实我们可以直接把选择过的元素放在当前位置上，然后只记录起始位置

选择其他元素之前，把这个元素放回来就行了（如果使用布尔数组记录，其实也需要这个回溯过程）

其次是非递归的实现，首先给出一个基于递归栈的实现

思路是通过用栈模拟交换，记录需要交换的元素位置，并把下一轮需要交换的元素以及数组的拷贝放进栈中

另一种非递归实现的思路是基于n!的计算，时间复杂度为O(n!)，不过比上面的非递归要快一点

既然一共有n!个排列，那么n的排列相当于n-1的所有排列*n，得到n-1的所有排列后，其实只需在每种排列上加上1-n就行了


### 解决
```python
# 递归
def rec(a, l, r):
    if l==r:
        print(*a)
        return
    for i in range(l, r+1):#注意这里下限是l，虽然把自己跟自己交换是一种重复，但这也是需要计算在内的
        a[i], a[l] = a[l], a[i]
        rec(a,l+1,r)
        a[i], a[l] = a[l], a[i]
rec([i+1 for i in range(n)], 0, n-1)
```

```python
# 非递归  - 1
def non_rec(a):
    n = len(a)
    result, r = [], [[a,-1,-1]]
    while len(r)>0:
        ra, ri, rt = r.pop()
        ra[ri], ra[rt] = ra[rt], ra[ri]
        if ri==n-1:
            result.append(ra)
        for nrt in range(ri+1,n):
            r.append([ra[:],ri+1,nrt])
    return result
```

```python
# 非递归 - 2
def non_rec(a):
    n = len(a)
    result, t, steps = [], 1, [[a[0]]]
    while t < n:
        cur = []
        for step in steps:
            for i in range(t+1):
                newStep = step[:]
                newStep.insert(i,a[t])
                cur.append(newStep)
        steps = cur
        t+=1
        if t==n:
            result = steps
    return result
```

### 问题
组合（Combination）：求1-n中取出x个数字的方式（C(n,x)）
### 思路
同样考虑两种方式，首先是递归，记录当前位置和递归深度即可，递归深度为x即取数完毕

第二是非递归，这里运用了一点bit magic，大概意思是根据x二进制中最大递增后缀序列求出下一个排列，具体可以参见[这篇文章](http://blog.gaurav.im/2016/12/18/next-binary-permutation-bitwise-hackery/)

### 解决
```python
# 递归
def comb(n,x,cur,start,depth,arr):
    if depth==x:
        arr.append(cur)
        return
    for next in range(start,n-x+depth+1):
        comb(n,x,cur+str(next),next+1,depth+1,arr)
comb(n,x,'',0,0,arr) # 01 02 03 04 12 13 14 23 24 34，这里下标是0开始的，不影响效果
```
```python
# 非递归
n, x = 5, 3
start, end = (1 << c)-1, (1 << n) - (1 << (n-x)) # 这里start和end就是二进制中x个1在最开始和最末尾的数
v = start
while v <= end:
    # 这里结果所对应的二进制位为1的下标就是具体的组合
    print(bin(v)[2:].rjust(n, '0'))
    # 下面两行是求next permutation的位运算方法，具体解释可以参考引用的两篇资料
    t = (v | (v - 1)) + 1 
    w = t | ((int((t & -t) / (v & -v)) >> 1) - 1)
    v = w
```

### Ref
https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
http://blog.gaurav.im/2016/12/18/next-binary-permutation-bitwise-hackery/
https://graphics.stanford.edu/~seander/bithacks.html#NextBitPermutation

### Tips
- x & -x是求x的二进制中最右边的1所对应位置的二进制数，比如x=01100100，x&-x=00000100，x为奇数这个值就一定是1
- x | x-1是将x的二进制中所有后继0置1，比如x=01100100，x&-x=01100111，同样x为奇数这个值就是本身