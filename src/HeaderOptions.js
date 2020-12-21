import React from 'react'
import {Avatar} from "@material-ui/core"
import "./HeaderOptions.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOptions({Icon, avatar ,title , onClick}) {
    const user = useSelector(selectUser)
    
    return (
        <div onClick={onClick} className="headerOptions">
            {Icon && <Icon className="headerOptions__icon" />}
            {avatar && <Avatar src={avatar} className="headerOptions__icon">{user?.email[0]}</Avatar>}
            <h3 className="headerOptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
