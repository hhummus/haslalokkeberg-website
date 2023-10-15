import * as React from 'react'
import { Link } from 'react-router-dom'

interface AboutIntroTextProp {
    introTitle: string,
    introText: string,
    introLink: string,
    introLinkText: string
}

function AboutIntroText(props: AboutIntroTextProp) {
  return (
    <div className="aboutIntroText">
    <h2>{props.introTitle}</h2>
     <p>{props.introText}</p>
     <Link to={props.introLink} target="_blank" className="visitCta">Besøk {props.introLinkText} sin nettside her</Link>
    </div>
   
  )
}

export default AboutIntroText