import React, { Component } from 'react'
import CollectionPreview from '../../components/collection/CollectionPreview';
import SHOP_DATA from './shopData.js';

 class Shop extends Component {
     constructor(props){
         super(props);
         this.state={
             collections: SHOP_DATA
     }
    };
    render() {
const {collections}=this.state;
        return (
             <div className="shop-page">
            {
                collections.map(({id,...otherCollections})=>(
                    <CollectionPreview key={id}{...otherCollections}/>
                ))

            }
           
            </div>
        )
    }
}
export default Shop;