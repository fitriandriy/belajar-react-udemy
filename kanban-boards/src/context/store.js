import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid"

const cards = [
  {
    id: 'card-1',
    title: "Learning How to Code"
  },
  {
    id: 'card-2',
    title: "Reading a Book"
  },
  {
    id: 'card-3',
    title: "Gym Workout"
  },
]
const initialState = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Backlog",
      cards: cards
    },
    "list-2": {
      id: "list-2",
      title: "On Progress",
      cards: []
    },
  },
  listIds: ["list-1", "list-2"]
}

export const DataContext = createContext()

// buat provider
export const DataProvider = (props) => {
  const [ store, setStore ] = useState(initialState)
  const changeTitle = (id, text) => {
    const item = store.lists[id]
    item.title = text
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [id]: item
      }
    }
    setStore(newStore)
  }
  const deleteCard = (cardId, listId) => {
    console.log(cardId, listId)
    const item = store.lists[listId]
    const removeCard = item.cards.filter(item => item.id !== cardId)
    item.cards = removeCard
    console.log(item.cards)
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId]: item
      }
    }
    setStore(newStore)
  }
  const cardEdit = (listId, cardId, idx, text) => {
    const item = store.lists[listId]
    const card = item.cards.find(item => item.id === cardId)
    card.title = text
    // tambahkan card pada position idx, hapus 1 item pada idx tersebut
    item.cards.splice(idx, 1, card)
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId] : item
      }
    }
    setStore(newStore)
  }
  const cardAdd = (listId, text) => {
    const item = store.lists[listId]
    const id = uuid()
    const newCard = {
      id: `card-${id}`,
      title: text
    }
    item.cards = [...item.cards, newCard]
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId] : item
      }
    }
    setStore(newStore)
  }
  const listAdd = (text) => {
    const id = `list-${uuid()}`
    const newList = {
      id: id,
      title: text,
      cards: []
    }
    const newStore = {
      listIds: [...store.listIds, id],
      lists: {
        ...store.lists,
        [id]: newList
      }
    }
    setStore(newStore)
  }
  const updateDrag = data => {
    setStore(data)
  }
  return (
    <DataContext.Provider
      value={{ 
        store,
        changeTitle,
        deleteCard,
        cardEdit,
        cardAdd,
        listAdd,
        updateDrag
      }}>
      { props.children }
    </DataContext.Provider>
  ) 
}
