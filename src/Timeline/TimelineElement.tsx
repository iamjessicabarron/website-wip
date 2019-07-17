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
      <div className="timelineItem">
        {/* <div className="timelineElement"> */}
          <h2>{`${props.year}`}</h2>
          <h1>{props.title}</h1>
          <div className="techContainer">
            <div className="spanContainer">
              <div>
                {techElements}
              </div>
            </div>
          </div>
          <div className="contentContainer">
            <h3>{props.desc}</h3>
            {linkElement != null && linkElement}
          </div>
        {/* </div> */}
        <div className="itemImage">
          <img src={props.image} />
        </div>
      </div>
    );
}

export default TimelineElement;