import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
function Widgets() {
    
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__articles">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>
                    LinkedIn News
                </h2>
                <InfoIcon />
            </div>
            {newsArticle("Top 10 Highest Paying Jobs", "Top news ")}
            {newsArticle("Unconscious Bias", "Stacey Gordon") }
            {newsArticle("Critical Thinking For Better Judgement", "Becki Saltzman ")}
            {newsArticle("Critical Thinking For Better Judgement", "Becki Saltzman ")}

            
             
       
            
        </div>
    )
}

export default Widgets
