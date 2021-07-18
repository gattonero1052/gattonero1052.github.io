---
title: "Reaching Points"
cover: ""
category: "algorithm"
date: "2019/10/20"
abstract: "如果给出一个点 (x,y)，可以选择下一个点的坐标 (x+y,y)，或者(x,x+y)，那么，给出一个起点 (sx,sy)，和终点(tx,ty)，能否通过这样的变化，从起点到达终点"
tags:
    - 中文
    - algorithm
    - dynamic-programming
---

[Reaching Points](https://leetcode.com/articles/reaching-points/)

### 问题
如果给出一个点 (x,y)，可以选择下一个点的坐标 (x+y,y)，或者(x,x+y)，那么，给出一个起点 (sx,sy)，和终点(tx,ty)，能否通过这样的变化，从起点到达终点

### 解决方案
- 选择最快的解决方案：这里看上去是个正向dp问题，其实不然，因为每一步的结果都要依赖于上一步的结果，所以dp问题会归结到时间复杂度O(tx*ty)的递归，显然是不可取的
- 这里我们采取倒推的方式，因为显然，如果当前步骤的结果是(x,y)(x>y)，那么上一步的结果一定是(x-y,y)，这样的话，我们可以进一步简化，即(x%y+ny,y)都是倒推获得的范围，这样的话时间复杂度就被降低到了对数级别，问题也就迎刃而解了
- 总结一下，这其实是一种逆向dp的思路