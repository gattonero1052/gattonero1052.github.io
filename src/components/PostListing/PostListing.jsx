import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import {getBlogSetting, setBlogSetting} from '../Data/localstorage'
import './list.css'
import _ from 'lodash'

const PostListing = ({postEdges,dispatch,refreshBinder}) => {
  console.log(postEdges);
  let postList = [];
  postEdges.forEach(postEdge => {
    if (!postEdge.node.body) return

    // here markdown is replaced by mdx, so this part of code won't work anymore
    // let paras = postEdge.node.rawMarkdownBody.match(/(#{1,5} .*[\n\r])/g) || []
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags || [],
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      abstract: postEdge.node.frontmatter.abstract,
      // abstract: postEdge.node.frontmatter.abstract || paras.map(p => p.replace(/^#+/, '').trim()).join('  ')
    });
  });


  const [filteringTags, updateFilter] = useState(getBlogSetting('filteringTags'))

  const addTagFilter = (tag) => {
      let index = _.indexOf(filteringTags, tag)
      if (index == -1) {
        filteringTags.push(tag)
      }

      refreshArticleList({filteringTags})

      //refreshTags in tree
      dispatch('refreshTagList',{filteringTags})
    }

  const refreshArticleList = ({filteringTags})=>{
    setBlogSetting({filteringTags})
    updateFilter([...filteringTags])
  }

  //bind when component did mount
  useEffect(()=>{
    if(refreshBinder) refreshBinder({refreshArticleList})
  },[])

  postList = postList.filter(post => _.intersection(post.tags, filteringTags).length==filteringTags.length)
  return (
    <div>
      {
        postList.map(post => (
          <div className='post-list' key={post.path}>
            <div className='post-left'>
              <div className='post-title'>
                <Link to={post.path} key={post.title}>
                  {post.title}
                </Link>
              </div>
              <div className='post-tags'></div>
              <div className='post-abstract'>{post.abstract}</div>
            </div>
            <div className='post-right'>
              <div className='post-tags'>
                {/* <PostListTags draggable={true} refresh={dispatch.bind(this,'refreshTree')} tags={post.tags} clickCb={addTagFilter}/> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PostListing;
