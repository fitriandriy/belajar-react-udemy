import React, { useEffect, useState, useContext } from 'react';
import logo from '../logo.svg'
import FormInput from '../components/FormInput';
import TodoItem from '../components/TodoItem';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';
import Button from '../components/Button';
import '../styles/Task.css';
import axios from 'axios';
import { AuthContext } from '../context/auth';
const baseUrl = "https://localhost:4000"

const Task = () => {
  const { logout } = useContext(AuthContext)
  const [ loading, setLoading ] = useState(false)
  const [ todos, setTodos ] = useState([])
  const [ isEdit, setIsEdit ] = useState(false)
  const [ deleteId, setDeleteId ] = useState("")
  const [ isDelete, setIsDelete ] = useState(false)
  const [ editData, setEditData ] = useState({
    id: "",
    title: ""
  })

  const getData = async () => {
    setLoading(true)
    const token = localStorage.getItem("token")
    const res = await axios.get(`${baseUrl}/todo`, {
      headers: {
        "Authorization": token
      }
    })
    setTodos(res.data.todos)
    setLoading(false)
  }

  const setTitle = e => {
    setEditData({
      editData: {
        ...editData,
        title: e.target.value
      }
    })
  }

  const update = () => {
    const { id, title } = editData;
    const newData = { id, title }
    const newTodos = todos
    newTodos.splice((id-1), 1, newData)
    setTodos(newTodos)
    setIsEdit(false)
    setEditData({ id: "", title: "" })
  }

  const openModal = (id, data) => {
    setIsEdit(true)
    setEditData({ id, title: data })
  }

  const openDeleteModal = (id) => {
    setIsDelete(true)
    setDeleteId(id)
  }

  const closeDeleteModal = () => {
    setIsDelete(false)
  }

  const closeModal = () => {
    setIsEdit(false)
  }

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token")
    await axios.get(`${baseUrl}/todo/${id}`, {
      headers: {
        "Authorization": token
      }
    })
    setTodos(todos.filter(item => item._id === id))
  }

  const addTask = (data) => {
    setTodos([...todos, data])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="app">
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
        <Button text="logout" variant="primary" action={logout} />
      </div>
      <div className='list'>
        { todos.map(item => 
          <TodoItem
            key= {item.id}
            todo= {item}
            openDeleteModal= {openDeleteModal}
            open= {openModal}
            loading= {loading}
          ></TodoItem>
        )}
      </div>
      <div className='input-form'>
        <FormInput add={addTask}></FormInput>
      </div>
      <EditModal
        edit={isEdit}
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      ></EditModal>
      <DeleteModal
        delete={isDelete}
        close={closeDeleteModal}
        del={deleteTask}
      ></DeleteModal>
    </div>
  );
}

export default Task;
