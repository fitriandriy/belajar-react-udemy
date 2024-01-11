import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { Redirect } from "react-router-dom"
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
const baseUrl = "https//localhost:4000"

const Auth = () => {
  const { isAuthenticated, loginSuccess, loginFailed } = useContext(AuthContext)
  const [login, setLogin] = useState(true)
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isLogin = () => {
    setLogin(!login)
  }
  const userLogin = async () => {
    setIsLoading(true)
    const user = {
      email, password
    }
    try {
      const res = await axios.post(`${baseUrl}/user/signin`, user)
      localStorage.setItem("token", res.data.token)
      setEmail("")
      setPassword("")
      setIsLoading(false)
      loginSuccess()
      console.log(res)
    } catch (error) {
      setIsError(true)
      setError(error.response.data.errors)
      setIsLoading(false)
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setIsError(false)
        setError("")
        loginFailed()
      }, 2000)
    }
  }
  const userRegister = async () => {
    setIsLoading(true)
    const user = {
      email, password, name
    }
    try {
      const res = await axios.post(`${baseUrl}/user/signup`, user)
      localStorage.setItem("token", res.data.token)
      setName("")
      setEmail("")
      setPassword("")
      setIsLoading(false)
      loginSuccess()
      console.log(res)
    } catch (error) {
      setIsError(true)
      setError(error.response.data.errors)
      setIsLoading(false)
      setName("")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setIsError(false)
        setError("")
        loginFailed()
      }, 2000)
    }
  }
  if ( isAuthenticated ) {
    return <Redirect to="/task" />
  }
  return (
    <div style={box}>
      <h3 style={head}>{ login ? "Login" : "Register" }</h3>
      <div>
        { !login && <Input value={name} type="text" placeholder="name" change={(e) => setName(e.target.value)} /> }
        <Input value={email} type="email" placeholder="email" change={(e) => setEmail(e.target.value)} />
        <Input value={password} type="password" placeholder="password" change={(e) => setPassword(e.target.value)} />
      </div>
      <div style={btn}>
        { isError && (
          <div>
            { error && error.map((item, index) => <p key={index} style={{ color: "red", margin: "0.4rem 0"}}>{item.msg}</p>)}
          </div>
        )}
        <Button variant="primary" load={isLoading} text={ login ? "login" : "register" } action={ login ? userLogin : userRegister } />
      </div>
      { login ? (
        <div style={paragraph}>
          <p>Belum punya akun? Silahkan <span onClick={isLogin} style={textBtn}>register</span></p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>Sudah punya akun? Silahkan <span onClick={isLogin} style={textBtn}>login</span></p>
        </div>
      )}
    </div>
  )
}

export default Auth

const textBtn = {
  color: "#57ea4f",
  fontSize: "15px",
  cursor: "pointer"
}

const head = {
  textAlign: "center",
  marginBottom: "0.4rem"
}

const btn= {
  textAlign: "center",
  marginTop: "0.5rem"
}

const paragraph= {
  textAlign: "center",
  marginTop: "0.5rem",
  fontSize: "14px"
}

const box = {
  background: "white",
  width: "25%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%",
  padding: "0.7rem"
}