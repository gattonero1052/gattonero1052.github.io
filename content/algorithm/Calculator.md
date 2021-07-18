---
title: "Calculator"
cover: ""
category: "algorithm"
date: "2021/6/22"
abstract: "Simple implementation of basic calculator"
tags:
    - calculator
    - algorithm
    - leetcode
    - python
---
>https://leetcode.com/problems/basic-calculator-iii/

### Problem
Implement a basic calculator supporting
- \+ - * /
- Parentheses ()

And do not need to support
- Expression with unary operator such as '-1'
- NaN results or invalid expressions

### Idea
Couple of years ago when I was seeking for my first job, I saw this problem and at that time, it's difficult for me. I didn't come up with a solution within an hour.

Over these years, now I can come up with quite a lot different ways and select the most efficient one. But I'm still seeking a job, it's so sad.

OK. So first let's break down the problem into parts. If there are no parentheses, the answer will be much simpler. Here comes the first question:
#### Do we have to loop over this string twice?
The answer is no, it is possible to solve this question inside one loop using only one stack. The reason behind this is we can maintain the elements in the stack like this:
```
[Number OPERATOR1 Number OPERATOR2 Number]
```
While OPERATOR2 has higher priority than OPERATOR1. Apparently, even though we have only 4 operators, the priority levels can be defined as
```
Priority of * = Priority of / > Priority of + = Priority of -
``` 
Every time we want to put an operator into this stack, we check if the previous operator has higher or equal priority. And calculate the results until the stack is empty of we have a lower priority operator ahead. The reason behind this is:
```
For all the operation with the same priority, they can be calculated from left to right, which means, they can be calculated immediately.
```
#### Do we have to solve this problem recursively?
We can do it recursively, but it is possible do without recursive steps if we put the parenthesis and numbers in same the stack in weak typing languages.

If we have parentheses in the stack, there are two things to consider:
- The ending of a number could be parentheses in addition to other operators.
- The structure of the stack could be like this
```
[... ( Number]
```
Which means the previous operator could not be the second last element.

But that does not matter, the previous rules still hold, all we need to do is to add additional conditions to prevent the code from throwing exceptions.

So if we have a right parenthesis, we calculate the results until the second to last element in the stack is a left parenthesis. Then, we remove that left parenthesis, all done.

### Code
```python
class Solution:
    def calculate(self, s: str) -> int:
        def calc(n1,op,n2):
            if op == '+':
                return n1 + n2
            if op == '-':
                return n1 - n2
            if op == '*':
                return n1 * n2
            if op == '/':
                return int(n1 / n2)
            return 0
        
        if s.isdigit():
            return int(s)
        s += ' '
        numStr = ''
        LEVEL = {
            '(':0,
            ')':0,
            ' ':-1,
            '+':1,
            '-':1,
            '*':2,
            '/':2,
        }

        OPERATORS = ' +-*/()'
        DIGITS = '1234567890'
        stack = []

        for c in s:
            if c in OPERATORS:
                if numStr:
                    stack += [int(numStr)]
                    numStr = ''

                if c == '(':
                    stack += [c]
                else:# another operator or ), means the end of previous expression
                    while len(stack)>2 and stack[-2]!='(' and LEVEL[stack[-2]] >= LEVEL[c]:
                        res = calc(stack[-3], stack[-2], stack[-1])
                        stack = stack[0:-3] + [res]

                    if c == ')': # here the stack must be like [..., '(', number]
                        stack.pop(-2)
                    else:
                        stack += [c]

            elif c in DIGITS:
                numStr += c

        return stack[0]

        
```

### Tips
- ```int(float_number)``` in Python is to parse result towards zero, not ceilling or flooring.
- The additional space added in the end of the string is for completing the last computation.
- Good luck coding guys!