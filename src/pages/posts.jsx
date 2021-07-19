import { useStaticQuery } from "gatsby";
import React from 'react'
import { graphql } from "gatsby";
import { Link } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../layout'
import './posts.css'
import './global.css'

const Tags = ({ items }) => {
    return (<div className='tag-items'>
      {items.map((item, i) => (
        <div key={item} className="tag-item">{item}</div>
      ))}
    </div>)
  }

const Page = () => {
    const data = useStaticQuery(graphql`
    query{
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
  `)

    return (<Layout>
        <Header></Header>
        <div className="posts-main">
            <div className="posts-header">Posts</div>
            {data?.allMdx?.edges.filter(edge => !edge.node.frontmatter.draft).map((post, i) => {
                return (<div className='posts-item'>
                    <div className="posts-item-top">
                        <div className="posts-item-title"><Link to={post?.node?.fields?.slug}>
                            {post?.node?.frontmatter?.title}
                        </Link></div> 
                        <div className="posts-item-date">{post?.node?.frontmatter?.date}</div>
                        <div className="posts-item-tags"><Tags items={post?.node?.frontmatter?.tags}/></div>
                    </div>

                    <div className="posts-item-abstract">{post?.node?.frontmatter?.abstract}</div>
                </div>)
            })}
        </div>
        <Footer></Footer>
    </Layout>)
}

export default Page;