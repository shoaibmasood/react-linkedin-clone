import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <Avatar />
                <h2>Shoaib Masood</h2>
                <h4>Javascript Developer</h4>
            </div>
            <div className="sidebar__stats">
                <p>Who's viewed your profile</p>
                <p className="sidebar_statsNumber">100</p>
            </div>
            <div className="sidebar__stats">
                <p>Views on your post</p>
                <p className="sidebar_statsNumber">50</p>
            </div>
        </div>
    )
}

export default Sidebar
