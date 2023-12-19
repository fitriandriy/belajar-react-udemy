import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return(
      <div>
        <h3>{ this.props.book }</h3>
        <h3>{ this.props.author }</h3>
        <ListItem></ListItem>
      </div>
    )
  }
}

export default List;
