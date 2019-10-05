import _ from 'lodash'
import {getRoot,generate,firsrOrderTraverseConsumer} from '../Tree/treehelper'
const NAME = `MSKf's Tree Blog V1.0`

const isBrowser = ()=>{
  let hasWindow = 1
  try{
    window
  }catch (e) {
    hasWindow = 0
  }
  return !!hasWindow
}

const getTree = ()=>{
  if(!isBrowser()) return

  let str = window.localStorage.getItem(NAME)
  let root = null

  if(!str){
    root = generate()

    setTree(root)
  }else{
    root = JSON.parse(str)

    //add circle reference
    firsrOrderTraverseConsumer(root,(node,prev)=>{

      node.parent = prev

    }
    )
  }

  return root
}

const setTree = node=>{
  if(!isBrowser()) return

  let root = _.cloneDeep(getRoot(node))

  //remove circle reference and temp properties
  firsrOrderTraverseConsumer(root,node=>{
    for (let key in node){
      if (key[0]=='_'){
        delete node[key]
      }
    }

    //remove fake nodes
    node.children = node.children.filter(n=>!n.isFake)

    node.parent = null
  })

  let str = JSON.stringify(root)
  window.localStorage.setItem(NAME,str)
}

export {getTree,setTree}