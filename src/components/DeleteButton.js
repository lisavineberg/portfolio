import { useState } from "react";

const DeleteButton = ({ color, removeClass }) => {
  const [remove, setRemove] = useState(false);

  const toggle = () => {
    setRemove(!remove);
  }

  return (
    <button 
      onClick={toggle} 
      className={`delete-button ${remove ? removeClass : ''}`}
      style={{ '--background-color': color }}>
      Delete me
    </button>
  )
}

export default DeleteButton;
