import React from 'react'
import { withRouter } from 'react-router'
import './menuItem.scss'
const MenuItem = ({ title ,imageUrl,size,history,match,linkUrl}) => {
    return (
        <div
         onClick={()=> history.push(`${match.url}${linkUrl}`)}   
            className={`${size} menu-item`}>
             <div className="background"
              style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop now</span>
                
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
