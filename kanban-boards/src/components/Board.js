import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import "../sass/Board.scss"
import Card from "./Card.js";
import menu from "../assets/menu.png"
import BoardTitle from "./BoardTitle.js";
import Button from "./Button.js";

const Board = ({ data, index }) => {
  return(
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <div 
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="board"
        >
          <div className="board__title">
            <BoardTitle id={data.id} title={data.title}/>
            <div {...provided.dragHandleProps} className="dot">
              <img src={menu} alt="menu" />
            </div>
          </div>
          <Droppable droppableId={data.id}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.cards.map((card, index) =>
                  <Card key={card.id} id={data.id} item={card} index={index}/>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Button id={data.id}/>
        </div>
      )}
    </Draggable>
  )
}

export default Board;