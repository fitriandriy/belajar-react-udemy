import React, { useEffect, useState, useContext } from 'react';
import logo from '../logo.svg'
import FormInput from '../components/FormInput';
import TodoItem from '../components/TodoItem';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';
import Button from '../components/Button';
import { delTask, getTask } from '../store/actions/task';
import '../styles/Task.css';
import { AuthContext } from '../context/auth';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonLoading from '../components/SkeletonLoading';

let setTodos;
const Task = () => {
  const dispatch = useDispatch()
  const { todos, isLoading } = useSelector(state => state.task)
  const { logout } = useContext(AuthContext)
  const [ deleteId, setDeleteId ] = useState("")
  const [ isDelete, setIsDelete ] = useState(false)
  const [ isEdit, setIsEdit ] = useState(false)
  const [ editData, setEditData ] = useState({
    id: "",
    title: ""
  })

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

  const deleteTask = (id) => {
    dispatch(delTask(id))
  }

  const addTask = (data) => {
    setTodos([...todos, data])
  }

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  return (
    <div className="app">
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
        <Button text="logout" variant="primary" action={logout} />
      </div>
      <div className='list'>
        { isLoading ? (<SkeletonLoading />) : (
          <>
            { todos.map(item => 
              <TodoItem
                key= {item.id}
                todo= {item}
                openDeleteModal= {openDeleteModal}
                open= {openModal}
                loading= {isLoading}
              ></TodoItem>
            )}
          </>
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
