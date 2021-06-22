import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Tree from "../components/Tree/tree";
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default class TagTemplate extends React.Component {
  refresh(){
    if(typeof this.refreshBindBack === 'function') this.refreshBindBack()
  }

  dispatch(action,...params){
    // console.log(arguments)
    if(typeof this.callBacks[action] == 'function') this.callBacks[action](...params)
  }

  refreshBinder(binder){
    this.callBacks = {...this.callBacks,...binder}
  }

  render() {
    const { tag } = this.props.pageContext;
    
    //ignore drafts
    const postEdges = this.props.data.allMdx.edges.filter(edge=> !edge.node.frontmatter.draft)

    //console.log(postEdges)
    return (
      <DndProvider backend={HTML5Backend}>
      <Layout>
        <div className="tag-container">
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <Tree refreshBinder={this.refreshBinder.bind(this)} dispatch={this.dispatch.bind(this)}/>
          <PostListing refreshBinder= {this.refreshBinder.bind(this)} dispatch={this.dispatch.bind(this)} refresh={this.refresh.bind(this)} postEdges={postEdges} />
        </div>
      </Layout>
      </DndProvider>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          body
          frontmatter {
            abstract
            draft
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
