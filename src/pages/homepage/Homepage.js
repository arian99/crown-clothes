import React from 'react'
import Directory from '../../components/directory/Directory'
import './homepage.scss'
const Hompage = ({history}) => {
    return (
        <div className="home">
           <Directory history={history}/>
        </div>
    )
}

export default Hompage
