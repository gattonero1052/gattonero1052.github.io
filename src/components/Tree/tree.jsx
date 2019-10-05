import React, {useState, useCallback} from 'react'
import './tree.css'
import {getColor,TAGS_OUTSIDE} from "../Tags/Tags";
import {useDrag, useDrop} from 'react-dnd'
import {addChild,firsrOrderTraverseFind, getTreeArray, getLines, generate} from './treehelper'
import _ from 'lodash'
import {getTree,setTree} from "../Data/localstorage";

const MAX_DEPTH = 4


const TreeLevels = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
}

const TreeLevelsArray = [TreeLevels.ONE, TreeLevels.TWO, TreeLevels.THREE, TreeLevels.FOUR]


const TreeLevel = ({level, accept, lastDroppedItem, onDrop, nodes, refresh}) => {
  const [{isOver, canDrop}, drop] = useDrop({
    accept,
    drop: () => ({
      level
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver

  return (
    <div className={`nodes-horizontal ${isActive?'blink':''}`}
         ref={drop}>
      {nodes.map(node => (
        <TreeNode refresh={refresh} node={node} key={node.id}/>
      ))}
    </div>
  )
}

const TreeNode = ({node, refresh}) => {
  let inputRef = React.createRef()
  const onKeyPressTemp = e => {
    if (e.key == 'Enter') {
      node.value = inputRef.value || '-'
      node.isTemp = 0
      refresh()
    }
  }

  const onDoubleClickNode = e=>{
    node.isTemp = 1
    refresh()
  }

  const [{isOver, canDrop}, drop] = useDrop({
    accept:node.level===MAX_DEPTH-1?[]:[TAGS_OUTSIDE],
    drop: () => ({
      node
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const [{isDragging}, drag] = useDrag({
    item: {name: node.value, type: TreeLevelsArray[node.level]},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        if(dropResult.level>node.level){
          let child = addChild(node,'')
          child.isTemp = 1
          refresh()
        }else if (dropResult.level<node.level){
          let i = 0
          for (; i < node.parent.children.length; i++) {
            if (node === node.parent.children[i]) break;
          }

          node.parent.children.splice(i,1)
          refresh()
        }
        // alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const isActive = canDrop && isOver

  const opacity = isDragging ? 0.4 : (isActive?.2:1)

  const color = getColor(node.value)


  return (
    <div ref={ref=>node._domObject = ref} className='nodes-node' style={{flex: node._spaceCount || 1}}>
      {node.isFake?'':
        <div ref={drag} className='tag-item' style={{opacity, color}}>
          <div ref={drop}>
          {node.isTemp ?
            <div className='tree-node-input'>
              <input type="text" defaultValue={node.value} ref={input => inputRef = input} autoFocus="true" onKeyPress={onKeyPressTemp}/>
            </div>
            :
            <div onDoubleClick={onDoubleClickNode}>{node.value}</div>
          }
          </div>
        </div>
      }
    </div>
  )
}


class Tree extends React.Component {
  state = {
    displayPanel: false,
    nodes: []
  }

  constructor(...args) {
    super(...args)
    let root = getTree()

    this.state = {
      forceRefresh:false,
      nodes:[],
      lines: [],
      root,
      rootId: 'root'
    }

  }

  componentDidMount() {
    this.refreshTree({tree: this.state.root, id: 'root'})

    //bind refresh back
    this.props.refreshBinder(this.refresh.bind(this))
  }

  refresh(){
    this.refreshTree({tree: this.state.root, id: this.state.rootId})
  }

  refreshTree({tree, id}) {
    this.setState({
      forceRefresh:!this.state.forceRefresh,
      nodes: this.getTreeNodes({
        tree, id
      })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.displayPanel != this.state.displayPanel || prevState.forceRefresh!=this.state.forceRefresh) {
      setTree(this.state.root)

      let lines = getLines(this.state.nodes[0][0])

      this.setState({lines})
    }
  }

  getTreeNodes(data) {
    let node = firsrOrderTraverseFind(data.tree, data.id)
    if (!node) return
    let nodes = getTreeArray(node, MAX_DEPTH)
    return nodes
  }


  toggleTree() {
    this.setState({
      displayPanel: !this.state.displayPanel
    })
  }

  render() {
    let nodes2d = this.state.nodes || []

    return (
      <div className=''>
        <svg className='tree-svg' style={{
          display: this.state.displayPanel ? 'inherit' : 'none'
        }}>
          {this.state.lines.map(line => (
            <line strokeWidth='10' x1={line.start.x} y1={line.start.y} x2={line.end.x} y2={line.end.y} stroke={line.color}/>
          ))}
        </svg>
        <div className='tree-wrapper'>
          <div className='tree' onClick={this.toggleTree.bind(this)}>
            <h1>Tree</h1>
          </div>
        </div>

        <div className='tree-panel' style={{
          display: this.state.displayPanel ? 'flex' : 'none'
        }}>
          <div className='tree-body'>
            <div className='tree-content'>
              {nodes2d.map((nodes1d, i) => (
                <TreeLevel level={i} refresh={this.refresh.bind(this)}
                           key={i} nodes={nodes1d} accept={
                  [].concat(i > 0 ? TreeLevelsArray[i - 1] : [])
                  .concat(i <TreeLevelsArray.length-1 ? TreeLevelsArray[i + 1] : [])}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tree





