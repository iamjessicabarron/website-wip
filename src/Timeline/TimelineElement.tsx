import React from 'react';
const TimelineElement: React.FC<{title: String, year: string, desc: String, image: string, link?: string}> = (props) => {
  let linkElement = <p className="linkAlt">Coming soon</p>
  if (props.link) {
    linkElement = (<a href={props.link}>Check it out</a>)
  }

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
        </div>
      </div>
    );
}

export default TimelineElement;