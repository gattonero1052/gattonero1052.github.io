import React,{useState} from 'react'
import {Link} from "gatsby";
import './tags.css'
import {useDrag} from "react-dnd";
import {addChild} from "../Tree/treehelper";
import _ from "lodash";
import { navigate } from '@reach/router';

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

const PostListTag = ({draggable,tag,hasLink,refresh,clickCb,removeTagCb,tagItemClass})=>{
  const click = ()=> {
    if (clickCb) clickCb(tag)
    if(hasLink){
      navigate(`/tags/${_.kebabCase(tag)}`);
    }
  }

  const remover = <div className='tag-remove-wrapper' onClick={()=>removeTagCb(tag)}>
    <div className='tag-remove'></div>
  </div>

  const color = getColor(tag)

  if(!draggable){
    return (
      <div className='tag-item-wrapper'>
        <div key={tag} onClick={click} className='tag-item'  style={{
          color,...tagItemClass
        }}>

          {tag}
        </div>
        {removeTagCb?remover:''}
      </div>
    )
  }

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

  const opacity = isDragging ? 0.4 : 1

  return (
    <div className='tag-item-wrapper'>
      <div ref={drag} key={tag} onClick={click} className='tag-item'  style={{
        opacity, color
      }}>
        {tag}
      </div>
      {removeTagCb?remover:''}
    </div>
  )
}

const PostListTags =({draggable,hasLink,tags=[],refresh,clickCb,removeTagCb,tagItemClass})=>{
  const props = {draggable,hasLink,tags,refresh,clickCb,removeTagCb,tagItemClass}
  return (<div className='tag-list'>
      {tags.map(tag=>{
        return (
        <PostListTag  key={tag} tag={tag} {...props} />
        )})}
    </div>)
}

export {getColor}

export {PostListTags,PostListTag,TAGS_OUTSIDE}