import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
import './index.css'

const DEFAULT_HEADER = [
  {
    path: "posts",
    text: "Posts",
  },
  {
    path: "#",
    text: "Snippets",
  },
  {
    path: "#",
    text: "Contact",
  },
];

const ResponsiveHeader = ({ items = DEFAULT_HEADER }) => {
    return (<div className="header">
      <div className="header-left">
        <div className="logo">
          <Link to="/"><FontAwesomeIcon icon={faKeyboard} /></Link>
        </div>
        <div className="name">Liyi Zhang</div>
      </div>
      <div className="header-right">{items.map((item, i) => (<div key={i} className="header-right-item">
        <Link to={item.path}>
          <div className='header-right-link'>{item.text}</div>
        </Link>
      </div>))}</div>
      <div className="header-right-minimal">XXX</div>
    </div>)
  }

export default ResponsiveHeader;
