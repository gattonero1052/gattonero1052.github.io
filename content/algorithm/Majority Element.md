---
title: "Majority Element"
cover: ""
category: ""
date: "2019/3/8"
abstract: "给定一个n元素数组，求出现次数最大的元素（即Majority Element）"
tags:
    - 中文
    - algorithm
    - array
    - linear time
---
### 问题：
给定一个n元素数组，求出现次数最大的元素（即Majority Element），并且数组保证该元素出现的次数一定大于⌊ n/2 ⌋

### 思路：
空间复杂度大于O(1)或者时间复杂度大于O(n)的就不给了，介绍一个空间O(1)时间O(n)的算法

对于数组an，注意到Majority Element的数量一定大于⌊ n/2 ⌋，那么任意选取一个位置ai，如果[a0...ai]内不存在这样的元素，(ai...an]内一定存在这样的元素，显然这个元素也一定是Majority Element

证明：反证法，假设数字n的频数是P(n)，如果前后都不存在这样的元素，那么Pmax(a1-ai)<=⌊ (i+1)/2 ⌋，Pmax(ai-an)<=⌊ (n-i)/2 ⌋，即使两个数字都是n，我们也有 Pn=Pmax(a1-ai)+Pmax(ai-an)<=⌊ n/2 ⌋，与Majority Element的频数大于⌊ n/2 ⌋矛盾，两个数字都不同的情况显然也是矛盾的

接下来就是dp的思路，首先[a0]内的Majority Element就是a0
对于位置i，通过判断ai是否是当前Majority Element来修改其频数P，那么这样会有三种情况：
1) ai=Majority Element
2) ai≠Majority Element，且P仍然>⌊ i/2 ⌋
3) ai≠Majority Element，且使得P<=⌊ i/2 ⌋

对于1和2，Majority Element不变，对于3，[a0,ai]内Majority Element就不存在了，只有到i+1时，Majority Element才会等于a(i+1)，不过根据题意，这个元素一定存在，也就是说，第三种情况其实就相当于Majority Element=a(i+1)

综上所述，各种情况下都能获得该位置所对应的Majority Element，该dp算法是正确的

### 解决：
```java
public class Solution {
    public int majorityElement(int[] num) {

        int major=num[0], count = 1;
        for(int i=1; i<num.length;i++){
            if(count==0){
                count++;
                major=num[i];
            }else if(major==num[i]){
                count++;
            }else count--;
            
        }
        return major;
    }
}
```
### Tips
- 这个算法是 Boyer–Moore 投票算法，能独立想出来很厉害了
- 这个元素出现的次数大于一半这个条件要注意，面试的时候没有这个条件不要装逼说这个算法
>https://leetcode.com/problems/majority-element/
>https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

