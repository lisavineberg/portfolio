import React from "react";

const ListItem = ({ item }) => {
  return (
    <li>
      <h2>{item.title}</h2>
      <span>{item.subtitle}</span>
      {item.text ? <p>{item.text}</p> : <React.Fragment />}
    </li>
  )
}

export default ListItem;
