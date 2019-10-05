import React from "react";
import { Link } from "gatsby";
import {PostListTags} from '../Tags/Tags'
import './list.css'

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      if(!postEdge.node.rawMarkdownBody) return
      let paras = postEdge.node.rawMarkdownBody.match(/(#{1,5} .*[\n\r])/g) || []
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags||[],
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        abstract:postEdge.node.frontmatter.abstract || paras.map(p=>p.replace(/^#+/,'').trim()).join('  ')
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
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
                <PostListTags refresh={this.props.refresh} tags ={post.tags}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
