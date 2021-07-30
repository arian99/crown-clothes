import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({title,items}) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="preview">
               {
               items.filter((item,idx)=> idx < 4)
                    .map(({id,...otherCollectionItem})=>(
                   <CollectionItem key={id}{...otherCollectionItem}/>
               ))}
            </div>
        </div>
    )
}

export default CollectionPreview
