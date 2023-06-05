import ListItem from "./ListItem";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => <ListItem item={item} key={index} />)}
    </ul>
  )
}

export default List;
