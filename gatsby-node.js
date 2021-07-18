/**
 * @onCreateNode:
 * To extend markdown node
 *
 * Called when a new node is created
 * Because MarkdownRemark Plugin works by creating node from markdown documents
 * We can get information of the node it generated and extend it as we need.
 *
 * @createPages:
 * To create pages using existing nodes
 *
 * We can use graphql to get the parameters we need
 *
 * The markdown data can be acquired in the following way by default
 * markdownQueryResult.data.allMdx.edges
 *
 * after achieving this, we can create pages from these data using
 *
 * createPage({
 *   path
 *   component
 *   context
 * })
 *
 */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  let {replaceWebpackConfig} = actions
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /valine|leancloud/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  const config = getConfig()

  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'workerize-loader' }
  })

  config.output.globalObject = 'this'

  replaceWebpackConfig(config)
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  let slug;
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    const hasFrontMatter =  Object.prototype.hasOwnProperty.call(node, "frontmatter")
    
    if (hasFrontMatter) {
        slug = node.frontmatter.slug ||
          `/${parsedFilePath.dir?parsedFilePath.dir+'/':''}${_.kebabCase(node.frontmatter.title || parsedFilePath.name)}`;

        //date specified in frontMatter
        if(Object.prototype.hasOwnProperty.call(node.frontmatter, "date")){
          let date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
          if (!date.isValid) {
            console.warn(`WARNING: Invalid date.`, node.frontmatter)
            date = ''
          }else {
            date = date.toISOString()
          }
          createNodeField({
            node,
            name: "date",
            value: date
          });
        }
    }

    createNodeField({node, name: "slug", value: slug});
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");

  const markdownQueryResult = await graphql(`
      {
        allMdx {
          edges {
            next{
              fields{
                slug
              }
              frontmatter{
                title
              }
            }
            
            node {
              fields {
                slug
              }
              
              frontmatter {
                abstract
                draft
                title
                tags
                category
                date
              }
            }
          }
        }
      }`)


  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();

  //get all the pages
  const postsEdges = markdownQueryResult.data.allMdx.edges;
  postsEdges.sort((postA, postB) => {
    const dateA = postA.node.frontmatter.date?moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    ):moment(postA.node.frontmatter.created)

    const dateB = postB.node.frontmatter.date?moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    ):moment(postA.node.frontmatter.created);

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  postsEdges.forEach((edge, index) => {
    if (edge.node.frontmatter.draft) {
      return
    }

    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }

    // const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = edge.next
    const prevEdge = postsEdges[prevID];

    console.log(edge.node.fields.slug)
    createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge&&nextEdge.node?nextEdge.node.frontmatter.title:'',
        nextslug: nextEdge&&nextEdge.node?nextEdge.node.fields.slug:'',
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug
      }
    });
  });

  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: {
        tag
      }
    });
  });

  categorySet.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: {
        category
      }
    });
  });
};
