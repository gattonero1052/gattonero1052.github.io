---
title: "Champagne Tower"
cover: ""
category: "algorithm"
date: "2019/6/10"
abstract: "从一个香槟塔的顶端注入香槟，给出注入香槟的数量，求具体位置上的杯子中香槟的量"
tags:
    - 中文
    - algorithm
    - simulate
---

[Champagne Tower](https://leetcode.com/articles/champagne-tower/)
### 问题
从一个香槟塔的顶端注入香槟，给出注入香槟的数量，求具体位置上的杯子中香槟的量
### 解决
- 模拟注入过程，这里其实如果忽略题中给出的众多条件和状态，反而更容易求解
- query_row 和 query_glass 的范围并不大，如果用二维数组模拟，可以做到O1的空间复杂度
- 其实整个过程中，已注满香槟的杯子不会对之后的杯子产生影响，这里可以想到直接在题设的条件内层级遍历
### Tips
- 这里二维数组的长度其实可以是100，并不是102