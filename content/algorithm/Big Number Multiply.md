---
title: "Big Number Multiply"
cover: ""
category: "algorithm"
date: "2019/10/22"
abstract: "大数乘法"
tags:
    - 中文
    - algorithm
    - math
    - string
---
### 问题
适用于1000位以内数的乘法
### 思路
注意两点：
- 数字是通过字符串传过来的，字符串的低位反而是数字的高位，所以我们要从数字的低位开始计算的话，必须反转字符串（当然结果也要反转）
- 原理就是小学乘法，竖式计算，但不需要每次都计算进位，可以统一计算
### 解决
```java
    public String multi(String a, String b){
        ////反转字符串
        char[] ar = reverse(a).toCharArray(), br = reverse(b).toCharArray();

        int res[] = new int[1000];
        int max = ar.length + br.length-1;//m位数乘n位数，结果至少是m+n-1位

        for (int i = 0; i <max; i++) {
            for (int j = 0;  i < ar.length && j < br.length; j++) {
                res[i + j] += (ar[i] - 48)*(br[j] - 48);
            }

            if (res[i] >= 10) {
                res[i+1] += res[i]/10;
                res[i] %= 10;
                max= Math.max(max, i+2);//结果最多是m+n位，+2是因为i是从0开始的下标，m是从1开始的位数
            }
        }

        
        StringBuilder ans = new StringBuilder();
        for (int i = 0;i<max; i++) {
            ans.append((char)(res[i]+48));
        }

        //反转结果
        return ans.reverse().toString();
    }

    public String reverse(String s){
        return new StringBuilder(s).reverse().toString();
    }
```
### Tips
- 如果追求算法简单易懂，这样是可行的，但是追求速度的话，可以使用[karatsuba](https://en.wikipedia.org/wiki/Karatsuba_algorithm)乘法，
时间复杂度在n^log3级别，原理是分治，时间复杂度可以用[Master Theorem](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)证明
- karatsuba算法并不是最快的，但是是时间复杂度小于平方复杂度中的算法里相对简单的一种

### Ref
https://oi-wiki.org/math/bignum/