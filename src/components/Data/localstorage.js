import _ from 'lodash'
import {getRoot,generate,firsrOrderTraverseConsumer} from '../Tree/treehelper'
import {settings as DEFAULT_SETTING} from './constants'

const TREE_NAME = `MSKf's Tree Blog V1.0 TREE`
const BLOG_NAME = `MSKf's Tree Blog V1.0 BLOG`

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

  let str = window.localStorage.getItem(TREE_NAME)
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
  window.localStorage.setItem(TREE_NAME,str)
}


const getBlogSetting = (name)=>{
  if(!isBrowser()) return []

  let str = window.localStorage.getItem(BLOG_NAME)
  let settings = {}
  if(!str){
    settings = setBlogSetting()
  }else{
    settings = JSON.parse(str)
  }
  return settings[name]
}

//default settings
const setBlogSetting = (settings = DEFAULT_SETTING)=>{
  if(!isBrowser()) return

  let str = JSON.stringify(settings)
  window.localStorage.setItem(BLOG_NAME,str)
  return settings
}

export {getTree,setTree,getBlogSetting,setBlogSetting}