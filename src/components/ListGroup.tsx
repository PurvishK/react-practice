import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
}

// todo: Props Defining
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // todo: useState Hook ( to set Variable Value
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group of {heading}</h1>
      <ul className="list-group">
        {
          // todo: Ng if
          items.length === 0 && <p>"Items not found"</p>
        }
        {
          // todo: Ng For
          items.map((item: string, index: number) => (
            <li
              // todo: Ng Class
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              // todo: Click Event
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item, index);
              }}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
