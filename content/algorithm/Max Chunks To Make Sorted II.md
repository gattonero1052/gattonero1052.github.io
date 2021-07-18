---
title: "Max Chunks To Make Sorted II"
cover: ""
category: "algorithm"
date: "2019/10/5"
abstract: "给定一个允许出现重复元素的数组，判断最多可以分成多少段，使得段与段之间都是有序的"
tags:
    - 中文
    - algorithm
    - array
    
---

[Max Chunks To Make Sorted II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/description/)
### 问题
给定一个允许出现重复元素的数组，判断最多可以分成多少段，使得段与段之间都是有序的

### 解决
- 思路 1：多次遍历
- 考虑到给出的数据的范围，这里时间复杂度应该控制在O(N)内，想到第二段（如果有的话），一定是在第一段的基础上进行判断的，这里可以构造一个排序数组
- 例如 [1,1,0,0,1]，我们可以构造为[2,3,0,1,4]，也就是用0 - length-1 的序号来表示这个数组，相同的元素按前后位置分配序号，这样问题就可以简化为一次遍历，对比下标
- 其实这里可以简化一点空间复杂度（也在O(N)范围内），我这里只是为了方便书写
```
class Solution {
    public int maxChunksToSorted(int[] arr) {
        if(arr.length<2)return arr.length;
        
        int max = Integer.MIN_VALUE,count = 0;
        
        //get index array like [1,2,3] or [5,2,2,3,1]
        int[] sorted = arr.clone();
        
        int[] newArr = new int[arr.length];
        
        Arrays.sort(sorted);
        
        int pre = -1;
        for(int i=0;i<sorted.length;i++){
            for(int j=0;j<arr.length;j++)
                if(arr[j]==sorted[i] && (i==0 || sorted[i]!=sorted[i-1] || pre<j)){
                    newArr[j] = i;
                    pre = j;
                    break;
                }
        }
        
        for(int i=0;i<arr.length;i++){
            max = Math.max(max,newArr[i]);
            if(max==i){
                count++;
            }
        }
        
        return count;
    }
}
```

- 思路 2：[栈](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/discuss/398135/Precise-Python-Stack-7-lines-solution-with-explanation)
简单来说，就是贪心记录每一个chunk，最后返回这个chunk数组的长度
```python
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        stack = [] # store a list of biggest element of each chunk
        for n in arr:
            m = n # the biggest element from beginning to n
            while len(stack)>0 and stack[-1]>n:
                m = max(m, stack.pop())
            stack.append(m)  # all element bigger than n was poped out of stack, so this is the biggest element
        return len(stack) # length of the chunks array
```
