---
title: "Largest Component Size By Common Factor"
cover: ""
category: "algorithm"
date: "2019/6/15"
abstract: "无向图中，顶点是数字，两个数字的最大公因子大于1时有边，求连通分量"
tags:
    - 中文
    - algorithm
    - graph
---
### 问题
无向图中，顶点是数字，两个数字的最大公因子大于1时有边，求连通分量


### 思路
不能直接dfs，考虑接近dfs的另一种算法，并查集
当然，如果直接把数据放在并查集里，并不会降低时间复杂度（实质上依然是两两比较，O(log2(n)*n^2)）
对于降低时间复杂度的办法，我们从题目的特性出发，如果两数之间有大于1的公因数，那么他们在同一个连通子图内

也就是说，只要这个数有2这个因子，就直接往2的连通子图的union find根节点权值上加1就行了，完全不需要把这个数和其余的所有偶数一一比较，他们肯定在同一个连同子图下面

换句话说，为了求连通分量的最大值，我们不需要画出整个图，只需要画出关键部位就行
![需要这样吗](https://upload-images.jianshu.io/upload_images/4655525-6372a4641804b41c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![不需要](https://upload-images.jianshu.io/upload_images/4655525-bb2f27424448da68.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
并查集的写法也注意一下，加权并查集在时间效率上会高很多

```java
import java.util.*;
import java.util.stream.*;
import java.math.*;

public class Solution {

    //并查集
    int MAX=100000;

    //用不加权并查集的话，把count去掉就行，代码简单一点
    int[] count=new int[MAX],find = new int[MAX];

    //这个是加权并查集的方法
    public int count(int a){
        return count[find(a)];
    }

    public int find(int a){
        while(find[a]!=a)a=find[a];
        return a;
    }

    public void union(int a,int b){
        a=find(a);
        b=find(b);

        if(a==b)return;

        if(count[a]>count[b]){
            count[a]+=count[b];
            find[b] = a;
        }else{
            count[b]+=count[a];
            find[a] = b;
        }
    }

    public int largestComponentSize(int[] A) {
        //初始化并查集
        for (int i = 0; i < MAX; i++) {
            find[i] = i;
            count[i] = 1;
        }

        Map<Integer,Integer> factorMap = new HashMap<>();

        for (int i = 0; i < A.length; i++) {
            double sqrt=Math.sqrt(A[i]);
            for (int j = 2; j <=sqrt; j++) {
                if(A[i] % j==0){
                    unionMap(factorMap,j,i);
                    unionMap(factorMap,A[i]/j,i);
                }
            }

            unionMap(factorMap,A[i],i);
        }

        int max = 1;

        for (int i = 0; i < A.length; i++) {
            max = Math.max(max,count(i));
        }

        return max;
    }

    public void unionMap(Map<Integer,Integer> factorMap,int factor,int cur){
        if(factorMap.containsKey(factor)){
            union(factorMap.get(factor),cur);
        }else{
            factorMap.put(factor,cur);
        }
    }
}
```

### Tips
- 这是Contest 113里的最后一题
- 加权并查集在很多情况下其实本来就比并查集效率要高，这题不管从什么方面考虑，都应该使用加权并查集
- 循环因数的时候可以顺便判断一下这个数是不是质数，不过没必要（if (isPrime) unionMap(factorMap,A[i],i);）