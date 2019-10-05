import {getColor} from "../Tags/Tags";

/**
 * No node can have two child nodes sharing the same name
 *
 * Every node has a unique path from root, so to say, a unique full name
 *
 * Maximum height of the tree shown in the screen  is constant
 *
 * Maximum children of a node is constant
 *
 * Can only add tree nodes within such height
 *
 * Take the leaf node as a new root, so to add new node in the next level
 *
 * Search the full name of node to get it  as the root
 */
class Node {
  constructor(value){
    this.id = Math.random().toString().substr(2)
    this.children = []
    this.value = value
    this.parent = null
    this.isTemp = 0
    this.isFake = 0
  }
}

const addChild = (node,value)=>{
  let child = new Node(value)
  child.parent = node
  child.level = (node.level|0)+1
  node.children.push(child)
  return child
}

const getRoot =  node =>{
  if (node.parent==null) return node
  return findRoot(node.parent)
}

const firsrOrderTraverseConsumer = (node, consumer,prev) => {
  if (!node) return

  consumer(node,prev)

  for (let i = 0; i < node.children.length; i++) {
    firsrOrderTraverseConsumer(node.children[i], consumer,node)
  }
}

const firsrOrderTraverseFind = (node, id) => {
  if (!node) return null
  else if (node.id == id) return node

  let res = null

  for (let i = 0; !res && i < node.children.length; i++) {
    res = firsrOrderTraverseFind(node.children[i], id)
  }

  return res
}

const getFakeNode = ()=>{
  const fakeNode = new Node('')
  fakeNode.isFake = 1
  return fakeNode
}

const getTreeArray = (node, maxDepth) => {
  //remove space count
  firsrOrderTraverseConsumer(node,n=>n._spaceCount = 0)

  const recursiveAddCount = (node, root) => {
    while (node != root) {
      node = node.parent
      node._spaceCount = (node._spaceCount || 1) + 1
    }
  }

  const S = 'SPLITTER'

  let tmp = [node, S], depth = 0, nodes = [], childCount = 0, root = node
  do {
    while (tmp[0] != S) {
      let cur = tmp.splice(0, 1)[0]
      if (cur.children.length == 0) childCount++
      if(cur._needToAdd)
        recursiveAddCount(cur, root)
      for (let i = 0; i < cur.children.length; i++) {
        if (i>0) cur.children[i]._needToAdd = true
        tmp.push(cur.children[i])
      }
    }
    tmp.push(tmp.splice(0, 1)[0])
    depth++
  } while (depth < maxDepth && tmp.length > 1)

  let finalDepth = depth

  depth = 0

  //把所有不是底层的叶子节点往下复制
  tmp = [node, S]
  do {
    nodes[depth] = []
    while (tmp[0] != S) {
      let cur = tmp.splice(0, 1)[0]
      if ((cur.isFake || cur.children.length == 0) && depth < finalDepth - 1) {
        tmp.push(getFakeNode())
      }

      nodes[depth].push(cur)

      cur.level = depth
      if(cur.isFake) continue

      for (let i = 0; i < cur.children.length; i++) {
        tmp.push(cur.children[i])
      }
    }
    tmp.push(tmp.splice(0, 1)[0])
    depth++
  } while (depth < maxDepth && tmp.length > 1)

  for (let i = 0; i <= maxDepth - nodes.length; i++) {
    nodes.push([])
  }

  return nodes
}

const getLines = (node)=>{
  if (!node || !node._domObject) return []

  let start = node._domObject.getClientRects()[0], res = []

  if (!start || !start.x) return []

  for (let i = 0; i < node.children.length; i++) {
    if(!node.children[i]._domObject) continue
    let end =  node.children[i]._domObject.getClientRects()[0]
    res.push({
      color:getColor(node.value),
      start:{
        x:start.left+start.width/2,
        y:start.top+start.height/2,
      },
      end:{
        x:end.left+end.width/2,
        y:end.top+end.height/2,
      }
    })

    res=res.concat(getLines(node.children[i]))
    console.log(res)
  }

  return res
}

const generate = ()=>{
  let root = new Node('ROOT')
  root.id='root'
  root.level = 0
  return root
}

const generateTest = ()=>{
  // let root = new Node(1)
  // let f11 = new Node(2),
  //   f12 = new Node(3),
  //   f21 = new Node(4),
  //   f22 = new Node(5),
  //   f23 = new Node(6),
  //   f24 = new Node(7)
  // root.children.push(f11)
  // root.children.push(f12)
  // f11.parent = root
  // f12.parent = root
  //
  // f11.children.push(f21)
  // f11.children.push(f22)
  // f21.parent = f11
  // f22.parent = f11
  //
  // f12.children.push(f23)
  // f12.children.push(f24)
  // f23.parent = f12
  // f24.parent = f12

  let root = new Node(1)
  root.id='root'
  let f11 = new Node(2),
    f12 = new Node(3),
    f13 = new Node(4),
    f21 = new Node(5),
    f22 = new Node(6),
    f23 = new Node(7),
    f24 = new Node(8)
  root.children.push(f11)
  root.children.push(f12)
  root.children.push(f13)
  f11.parent = root
  f12.parent = root
  f13.parent = root

  f11.children.push(f21)
  f12.children.push(f22)
  f21.parent = f11
  f22.parent = f12

  f13.children.push(f23)
  f13.children.push(f24)
  f23.parent = f13
  f24.parent = f13
  return root
}

export {addChild,getRoot,firsrOrderTraverseConsumer,firsrOrderTraverseFind,getTreeArray,generate,getLines}