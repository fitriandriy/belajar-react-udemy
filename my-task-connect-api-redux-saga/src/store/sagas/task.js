import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"
const baseUrl = 'https://localhost:4000'

function* get() {
  const token = localStorage.getItem("token")
  try {
    const res = yield axios.get(`${baseUrl}`, {
      headers: {
        "Authorization": token
      }
    })
    const delay = time => new Promise(resolve => setTimeout(resolve, time))
    yield call(delay, 2000)
    // simpan ke reducernya
    yield put({ type: "GET_SUCCESS", payload: res.data.todos })
  } catch (error) {
    console.log(error)
  }
}

function* del(actions) {
  const payload = actions 
  const token = localStorage.getItem("token")
  try {
    yield axios.delete(`${baseUrl}/${payload}`, {
      headers: {
        "Authorization": token
      }
    })
    // simpan ke reducernya
    yield put({ type: "DELETE_SUCCESS", id: payload })
  } catch (error) {
    console.log(error)
  }
}

function* add(actions) {
  const payload = actions 
  const token = localStorage.getItem("token")
  try {
    const res = yield axios.post(`${baseUrl}`, payload, {
      headers: {
        "Authorization": token
      }
    })
    // simpan ke reducernya
    yield put({ type: "ADD_SUCCESS", payload: res.data.todo })
  } catch (error) {
    console.log(error)
  }
}

export function* watchAdd() {
  yield takeEvery("ADD_TASK_REQUEST", add)
}

export function* watchGet() {
  yield takeEvery("TASK_REQUEST", get)
}

export function* watchDel() {
  yield takeEvery("DELETE_TASK_REQUEST", del)
}

