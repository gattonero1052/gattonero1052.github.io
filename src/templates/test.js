import React from 'react'
import {graphql} from "gatsby";



const page = ({data})=>{
  return <div>123
  </div>
}

export default page

//in this test page,
// export const q = graphql`
//     query arbitraryName(){
//         allFile{
//             edges{
//                 node{
//                     absolutePath
//                 }
//             }
//         }
//     }
// `