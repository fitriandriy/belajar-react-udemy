import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom"
import { loginAuth, registerAuth } from "../store/actions/auth";
import Input from "../components/Input";
import Button from "../components/Button";

const Auth = () => {
  const { isAuthenticated, isLoading, errors } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [isLogin, setLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userLogin = async () => {
    const user = { email, password }
    dispatch(loginAuth(user))
    setEmail("")
    setPassword("")
  }
  const userRegister = async () => {
    const user = { name, email, password }
    dispatch(registerAuth(user))
    setName("")
    setEmail("")
    setPassword("")
  }
  if ( isAuthenticated ) {
    return <Redirect to="/task" />
  }
  return (
    <div style={box}>
      <h3 style={head}>{ isLogin ? "Login" : "Register" }</h3>
      <div>
        { !isLogin && <Input value={name} type="text" placeholder="name" change={(e) => setName(e.target.value)} /> }
        <Input value={email} type="email" placeholder="email" change={(e) => setEmail(e.target.value)} />
        <Input value={password} type="password" placeholder="password" change={(e) => setPassword(e.target.value)} />
      </div>
      <div style={btn}>
        <div>
          { errors && errors.map((item, index) => <p key={index} style={{ color: "red", margin: "0.4rem 0"}}>{item.msg}</p>)}
        </div>
        <Button variant="primary" load={isLoading} text={ isLogin ? "login" : "register" } action={ isLogin ? userLogin : userRegister } />
      </div>
      { isLogin ? (
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