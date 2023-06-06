import React from "react";

const ListItem = ({ item }) => {
  return (
    <li className="card">
      {item.link ? <a href={item.link} target="_blank" rel="noreferrer"><h3>{item.title}</h3></a> : <h3>{item.title}</h3>}
      {item.subtitle && <span>{item.subtitle}</span>}
      {item.text ? <p>{item.text}</p> : <React.Fragment />}
    </li>
  )
}

export default ListItem;
