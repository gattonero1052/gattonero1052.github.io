import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./post.css";
import Header from '../components/Header'
// import "./themes/prism-okaidia.css"
// import "./themes/prism.css"
import "./themes/prism-twilight.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getBlogSetting } from "../components/Data/localstorage";

export default class PostTemplate extends React.Component {
  constructor(...args){
    super(...args)
    this.state = {}
  }

  componentDidMount() {

      //read default code style
      let codeStyle = getBlogSetting('codeStyle')
      console.log(codeStyle);
      this.setState({
        codeStyle
      })
  }

  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.mdx;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <Header/>
        <div className='post-all'>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <div className={`${this.state.codeStyle || ''}`}>
            <h1>{post.title}
              <div className="post-tags">
              </div>
            </h1>
            <MDXRenderer>{postNode.body}</MDXRenderer>
            <div className="post-meta">
              <div id="post_comments"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
