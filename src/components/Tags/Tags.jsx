import React from 'react'
import {Link} from "gatsby";
import './tags.css'
import {useDrag} from "react-dnd";
import {addChild} from "../Tree/treehelper";

const TAGS_OUTSIDE = '-1'

const COLORS = [
  '#478BA2',
  '#DE585D',
  '#E97658',
  '#E2A490',
  '#89D4DB',
]

const getColor = (str)=>{
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum+=str.charCodeAt(i)
  }

  return COLORS[sum%COLORS.length]
}

const PostListTag = ({tag,refresh})=>{
  const [{isDragging}, drag] = useDrag({
    item: {name: tag, type: TAGS_OUTSIDE},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        let child = addChild(dropResult.node,tag)
        refresh()
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const color = getColor(tag)

  const opacity = isDragging ? 0.4 : 1

  return (
    <div ref={drag} key={tag} className='tag-item'  style={{
      opacity, color
    }}>
      {tag}
    </div>
  )
}
const PostListTags =({tags,refresh})=>{

  return (<div className='tag-list'>
      {tags.map(tag=>{
        return (
        <PostListTag key={tag} tag={tag} refresh={refresh}/>
        )})}
    </div>)
}



export {getColor}

export {PostListTags,TAGS_OUTSIDE}