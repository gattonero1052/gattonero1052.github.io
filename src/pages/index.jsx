import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import './index.css'
import './global.css'
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from '../components/Header'

const Tags = ({ items }) => {
  return (<div className='tag-items'>
    {items.map((item, i) => (
      <div key={i} className="tag-item">{item}</div>
    ))}
  </div>)
}

const SelfIntroduction = () => {
  return (<div className='self-intro'>
    <div className="self-intro-main">I'm Liyi, software engineer, active programmer.</div>
    <div className="self-intro-sub">
      I focus on web application development. I love to learn new things in programming and this is my motivation to move forward.
    </div>
  </div>)
}

const RecentPosts = ({ items }) => {
  console.log(items);
  return (<div className='recent-posts'>
    <div className="recent-posts-title">
      <div className="title-left">Recent Posts</div>
      <div className="title-right">
        <Link to={'/posts'}>
          {`All >>`}
        </Link>
      </div>
    </div>
    <div className="recent-posts-list">
      {items.map((item, i) => (
        <div key={i} className="post-item">
          <div className="post-item-title-top">
            <div className="post-item-top-left">
              <Link to={item?.node?.fields?.slug+'/'}>
                {item?.node?.frontmatter?.title}
              </Link>
              </div>
            <div className="post-item-top-right"><Tags items={item?.node?.frontmatter?.tags} /></div>
          </div>
          <div className="post-item-title-bottom">
            <div className="post-item-bottom-left">
              {item?.node?.frontmatter?.date}
            </div>
            <div className="post-item-bottom-right">
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>)
}

const ProjectItems = [
  {
    title: 'Taiko sanjiro web simulator',
    desc: `A web rhythm game, unofficial simulator for taiko sanjiro built with React.js and PIXI.js. This is designed to be a single player game for practising.`,
    btnText: `Visit`,
    btnLink: `http://175.41.234.195/`
  },
  {
    title: 'DSLP',
    desc: `A datamining platform built for the need of non-computer-science background students. React, redux are used in building this project, as a result, students can leverage the power of state-of-art data mining tools.`,
    btnText: `Visit`,
    btnLink: `http://vclient4.cs.rit.edu:8000/`
  },
  {
    title: 'Cookieswitcher',
    desc: `A useful chrome extension to switch cookies for a single website. With Cookieswitcher, you can save current cookies and switch between saved cookies.`,
    btnText: `Google App stpre`,
    btnLink: `https://chrome.google.com/webstore/detail/cookieswitcher/fjknaoeojeieiofihajkbehbkmpbhkhg`
  },
]

const Projects = () => {
  return (
    <div className='project-container'>
      <div className="project-title">
        Projects
      </div>
      <div className='projects'>
        {ProjectItems.map((item, i) => (<div key={i} className='project-item'>
          <div className="project-item-title">{item.title}</div>
          <div className="project-item-desc">{item.desc}</div>
          <a href={item.btnLink} target="_blank"><div className="project-item-button">{item.btnText}</div></a>
        </div>))}
      </div>
    </div>
  )
}

const Home = ({ recentPosts }) => {
  return (<div className="index-container">
    <Header />
    <SelfIntroduction />
    <RecentPosts items={recentPosts} />
    <Projects />
    <Footer />
    {/* <Tree refreshBinder={this.refreshBinder.bind(this)} dispatch={this.dispatch.bind(this)}/> */}
    {/* <PostListing refreshBinder= {this.refreshBinder.bind(this)} dispatch={this.dispatch.bind(this)} refresh={this.refresh.bind(this)} postEdges={postEdges} /> */}
  </div>)
}

class Index extends React.Component {
  callBacks = {
    refreshArticleList: undefined,
    refreshTagList: undefined,
    refreshTree: undefined
  }

  refresh() {
    if (typeof this.refreshBindBack === 'function') this.refreshBindBack()
  }

  dispatch(action, ...params) {
    if (typeof this.callBacks[action] == 'function') this.callBacks[action](...params)
  }

  refreshBinder(binder) {
    this.callBacks = { ...this.callBacks, ...binder }
  }

  render() {
    //ignore drafts
    const postEdges = this.props.data.allMdx.edges.filter(edge => !edge.node.frontmatter.draft)
    return (
      <Layout>
        <Home recentPosts={postEdges.splice(0, 3)}/>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
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
