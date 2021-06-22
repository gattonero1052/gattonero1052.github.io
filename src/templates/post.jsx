import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import {PostListTags} from "../components/Tags/Tags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./post.css";
// import "./themes/prism-okaidia.css"
// import "./themes/prism.css"
import "./themes/prism-twilight.css"
import Valine from 'valine';
const APP_ID = 'agYKv9ldJMM4QKMoA5cKc9df-MdYXbMMI'
const APP_KEY = '0D9g85YcAg15lEiS8yme5JfL'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getBlogSetting } from "../components/Data/localstorage";

export default class PostTemplate extends React.Component {
  constructor(...args){
    super(...args)
    this.state = {}
  }

  componentDidMount() {
      new Valine({
        el: '#post_comments',
        appId: APP_ID,
        appKey: APP_KEY,
        recordIP:true,
        placeholder:'Comment me, my friend!'
      })

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
        <script src='//unpkg.com/valine/dist/Valine.min.js'></script>
        <div className='post-all'>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className={`${this.state.codeStyle || ''}`}>
            <h1>{post.title}
              <div className="post-tags">
                <PostListTags draggable={false} tags={post.tags} hasLink={true} tagItemClass={{
                  opacity:1
                }} />
              </div>
            </h1>
            <MDXRenderer>{postNode.body}</MDXRenderer>
            <div className="post-meta">
              <div id="post_comments"></div>
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />



            {/*<Disqus postNode={postNode} />*/}
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
