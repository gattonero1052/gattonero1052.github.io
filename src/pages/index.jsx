import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Tree from "../components/Tree/tree";
import config from "../../data/SiteConfig";
import './index.css'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Index extends React.Component {
  refresh(){
    if(typeof this.refreshBindBack === 'function') this.refreshBindBack()
  }

  refreshBinder(fn){
    this.refreshBindBack = fn
  }

  render() {
    //ignore drafts
    const postEdges = this.props.data.allMarkdownRemark.edges.filter(edge=> !edge.node.frontmatter.draft)
    return (
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <div className="index-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <Tree refreshBinder={this.refreshBinder.bind(this)}/>
            <PostListing refresh={this.refresh.bind(this)} postEdges={postEdges} />
          </div>
        </Layout>
      </DndProvider>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          rawMarkdownBody
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
