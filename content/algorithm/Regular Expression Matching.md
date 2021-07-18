---
title: "Regular Expression Matching"
cover: ""
category: "algorithm"
date: "2019/10/5"
abstract: "Regular Expression Matching using * or ."
tags:
    - 中文
    - algorithm
    - string
---

[Regular Expression Matching](https://leetcode.com/articles/regular-expression-matching/)

### 问题
用包含*和.这两个正则符号的正则表达式来匹配字符串

### 解决
- 思路：贪心匹配+回溯，这里如果不采用贪心的方法也是可以AC掉的，只是考虑到大部分情况下栈深的问题

这里就是非贪心的匹配方式，代码量很少，每次只匹配开头的字符，剩余结果由回溯过程得到
```
class Solution {
    public boolean isMatch(String text, String pattern) {
        if (pattern.isEmpty()) return text.isEmpty();
        boolean first_match = (!text.isEmpty() && 
                               (pattern.charAt(0) == text.charAt(0) || pattern.charAt(0) == '.'));
        
        if (pattern.length() >= 2 && pattern.charAt(1) == '*'){
            return (isMatch(text, pattern.substring(2)) ||  //这里的 || 代表回溯过程
                    (first_match && isMatch(text.substring(1), pattern)));
        } else {
            return first_match && isMatch(text.substring(1), pattern.substring(1));
        }
    }
}

```

- 思路：反向dp，这里我们如果用dp的思想，那么dp[i][j]表示的是text[i:]和pattern[j:]是否匹配，求的其实是dp[0][0]，所以是一种反向的dp，题目中无论是自底向上的方法还是从顶往下的方法，其计算顺序其实都是反向的（最后得到的结果都是dp[0][0]），这里自底向上的方法中，Result枚举的意义其实只是封装了一个布尔值，相当于一个布尔封装类型的数组

### Tips
- str.substring(n) 可以理解成去掉字符串前 n 个字母
- wildcard 是通配符的意思，不止在正则表达式中有通配符，很多地方比如地址匹配，java中泛型中都有通配符