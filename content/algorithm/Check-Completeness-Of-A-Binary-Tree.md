---
title: "Check Completeness Of A Binary Tree"
cover: ""
category: "algorithm"
date: "2019/3/10"
abstract: "判断一棵树是否是完全二叉树"
tags:
    - 中文
    - algorithm
    - tree
---
### 问题
判断一棵树是否是完全二叉树
### 思路
观察测试数据
[1,2,3,4,5,6]

[1,2,3,4,5,null,7]

[1,2,3,4,5,null]
从给的测试数据可以看出，只要是连续的数字中间没有空，或者只在最后有空，那么就是完全二叉树。所以可以给节点编号，再看看编号有没有按序排列

### 解决
```
    public boolean isCompleteTree(TreeNode root) {
        Map<Integer,TreeNode> map = new HashMap<>();
        codeTree(root,map,1);
        List<Integer> list = map.keySet().stream().sorted().collect(Collectors.toList());
        for (int i = 1; i < list.size(); i++) {
            if(list.get(i)-1!=list.get(i-1))
                return false;
        }
        return true;
    }

    public void codeTree(TreeNode root,Map<Integer,TreeNode> map,Integer code){
         map.put(code,root);
         if(root.left!=null){
             codeTree(root.left,map,code*2);
         }

        if(root.left!=null){
            codeTree(root.right,map,code*2+1);
        }
    }
```

### 思路
继续看所给的测试数据，考虑到这种形式是对完全二叉树进行层次遍历得来的，所以按照层次遍历后，只要空节点是连续的，那就是完全二叉树

### 解决
```
    public boolean isCompleteTree(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList();
        queue.offer(root);
        while(queue.peek()!=null){
            TreeNode node = queue.poll();
            queue.offer(node.left);
            queue.offer(node.right);
        }

        while(!queue.isEmpty()){
            if(queue.poll()!=null)
                return false;
        }
        return true;
    }
```