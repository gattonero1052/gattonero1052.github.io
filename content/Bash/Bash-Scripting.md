---
title: "Bash Scripting Examples"
cover: ""
category: "bash"
date: "2020/3/17"
abstract: "Problem oriented bash code examples"
tags:
    - bash
---
### Bash scripting

This is a problem oriented bash scripting post. For understanding what's going on and how the code works, it's of great help to discover and type in these code by yourself.

Though the .sh file runs in Linux for most of the time, you can try all of these using git bash or WSL if you are using windows.

### Remember
- Do not use bash for OOP
- Bash variables are UNTYPED and does not support float point calculation itself
- Variable declaration is not necessary


### A+B Problem
- Include shebang on top of your script file (For other problems, this is same)
```bash
#!/bin/bash
```
- read from stdin (or you can reference the parameter variables as $1 $2)

```bash
read -p "A and B: " a b
```

- calculation or assignment, either of these works

```bash
# Using let
let "c=a+b" # let "c = a+b" is right, space does not matter as long as it is wrapped by quotes
let c=a+b # let c = a+b is wrong, DO NOT add spaces around =
```

```bash
# Using $(()) POSIX arithmethic expression

a=$((a+b))
```

```bash
# Just an example of using +=
let c=0
((c+=a+b)) # this is often used as ((a++)) in loops
```

```bash
# Using expr or other preset bash scripts
# DO ADD spaces between operators
c=$(expr a + b)
```

- output

```bash
echo $c
```

### Sum problem

- read from stdin

```bash
read -p "Sum from 1 to n" n
```
- init variable

```bash
let a=1
let sum=0
```

- loop

```bash
# DO include $ before variables with in conditional statements
# DO ADD spaces in conditional statements like [SPACE expression SPACE]
# DO ADD ; before do, or you can use
#     while...
#     do
#     ...
#     done
while [ $a -le $n ];do

# (()) is for arithmetic expression
# DO NOT use $ for variable reference in (())
sum=$((sum+a))

a=$((a+1)) # see the alternatives below

# ALT ((a++))
# ALT let a="a+1"
# ALT let a=$a+1

done
```

- output

```bash
echo $sum
```

### Read text file
Assuming the text file is like (yeah, that's part of services file)
```text
echo                7/tcp
echo                7/udp
discard             9/tcp    sink null
discard             9/udp    sink null
systat             11/tcp    users                  #Active users
systat             11/udp    users                  #Active users
```
The goal is to get only the ```<PORT>/<PROTOCOL>``` part
```bash
input="myfile"

while read -r line
do
	echo $line | grep -E -o "[0-9]+/(tcp|udp)"
done < "$input"
```

Of course a single command could have it done, but you can have more control if you use a while loop to read (for example output only the lines with odd line number)
```bash
grep -E -o "[0-9]+/(tcp|udp)" myfile
```

### Refs
https://ryanstutorials.net/bash-scripting-tutorial/

https://unix.stackexchange.com/questions/40786/how-to-do-integer-float-calculations-in-bash-or-other-languages-frameworks