---
title: "Longest Palindrome Substring"
cover: ""
category: "algorithm"
date: "2019/3/4"
abstract: "求最长回文子串"
tags:
    - 中文
    - algorithm
    - string
---
### 问题
求最长回文子串

### 思路
如果考虑O(n)的动态规划，比如用f(i)来代表以当前位置为结尾的回文子串的最大长度，会遇到一个问题，就是说f(i)不仅仅取决于f(i-1)，有可能取决于i-1位置上回文子串的次最大长度等等。比如这个字符串 bananas，下标i从0开始的话，f(3)=3，但是因为f(3)是在1("a")和3("ana")中取的最大长度，舍弃了1("a")，所以只是通过f(3)=3来判断的话，会发现f(4)无法延续这一回文串，从而得出f(4)=1的错误结果。其实f(4)延长了f(3)的次长回文子串，故f(4)=1+2=3

- 思路1：
那么先不考虑O(n)的动态规划，我们考虑O(n^2)的动态规划，自顶向下分析，f(i,j)表示s(i,j)子串是否是回文，那么显然有
f(i,j) = true (i>=j)
f(i,j) = true (f(i+1,j-1) and s(i)==s(j))
此时自底向上遍历即可

- 思路2
再考虑记忆化搜索，f(i,j)定义为s(i,j)内最大回文子串长度，有递推式
f(i,j)就是当前位置的子串长度
f(i,j) = j-i+1 if (i >= j-1 and s(i)==s(j)) 
f(i,j) = j-i+1 if (s(i)==s(j) &&f(i+1,j-1)==s(i+1,j-1))
记忆化搜索
f(i,j) = max(f(i+1)(j-1),f(i)(j-1),f(i+1)(j))
这里注意两点，首先如果把f(i,j)直接定义成子串，思路和时间复杂度都是正确的，但是会TLE。。。其次只有f(i,j)是当前位置子串时才会更新结果，所以其实最长回文子串长度的代码和最长回文子串的代码只相差几行~

### 代码
- dp
```
    public String longestPalindrome(String s) {
        if(s==null || s.length()==0) return "";
        int dp[][] = new int[s.length()][s.length()];

        for (int i = 0; i < s.length(); i++) {
            for (int j = 0; j+i < s.length(); j++) {
                dp[j][j+i] = dp[j][j+i]!=0?dp[j][j+i]:(isPalindrome(s,j,j+i,dp)?2:1);
            }
        }

        int max = 0;
        String res = "";

        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                if(dp[i][j]==2 && j-i+1>max){
                    max = j-i;
                    res = s.substring(i,j+1);
                }
            }
        }

        return res;
    }

    public boolean isPalindrome(String s, int start, int end, int dp[][]){
        if (dp[start][end]>0) return dp[start][end]==2;
        if(end-start<=1) return s.charAt(start)==s.charAt(end);
        return isPalindrome(s,start+1,end-1,dp) && s.charAt(start)==s.charAt(end);
    }
```
- 记忆化搜索
```java
    public String longestPalindrome(String s){
        if(s==null || s.length()==0) return "";

        int dp[][] = new int[s.length()][s.length()];
        String res="";
        int max = 0;

        for (int i = s.length()-1; i>=0;i--) {
            for (int j = i; j < s.length(); j++) {
                if(s.charAt(i)==s.charAt(j)){
                    if(j-i>1 && dp[i+1][j-1]==j-i-1) {
                        dp[i][j] = 2 + dp[i + 1][j - 1];
                        if(dp[i][j]>max){max=dp[i][j];res = s.substring(i,j+1);}
                    }
                    else if(j-i<=1){
                        dp[i][j] = j-i+1;
                        if(dp[i][j]>max){max=dp[i][j];res = s.substring(i,j+1);}
                    }
                }

                if(j>0 && i<s.length()-1)
                    dp[i][j] = max(dp[i][j],dp[i][j-1],dp[i+1][j],dp[i+1][j-1]);
            }
        }

        return res;
    }
```
### Ref
[https://leetcode.com/problems/longest-palindromic-substring/](https://leetcode.com/problems/longest-palindromic-substring/)
[https://tarokuriyama.com/projects/palindrome2.php](https://tarokuriyama.com/projects/palindrome2.php)

