import React from "react"
import LoginDisplay from "./LoginDisplay"

const Login = () => {

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <LoginDisplay
      onSubmit={onSubmit}
    />
  )
}

export default Login
