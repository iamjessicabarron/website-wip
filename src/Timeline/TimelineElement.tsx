import React from 'react';

interface Props {
  title: string, 
  year: string, 
  desc: String, 
  image: string, 
  link?: string
  technology: string[]
}
const TimelineElement: React.FC<Props> = (props) => {
  let linkElement = <p className="linkAlt">Coming soon</p>
  if (props.link) {
    linkElement = (<a href={props.link}>Check it out</a>)
  }

  let techElements = props.technology.map((item, index) => {
    if (index === 0) {
      return <span className="main">{item}</span>
    } 

    return <span>{item}</span>
  })

    return (
      <div className="timelineElementsContainer">
        <div className="timelineElement">
          <h1>{`${props.year} /`}</h1>
          <h2>{props.title}</h2>
          <h3>{props.desc}</h3>
          {linkElement != null && linkElement}
        </div>
        <div className="timelineElementSecondary">
          <img src={props.image} />
          {techElements}
        </div>
      </div>
    );
}

export default TimelineElement;