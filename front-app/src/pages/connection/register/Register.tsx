import React from "react"
import RegisterDisplay from "./RegisterDisplay"

const Register = () => {

  const onSubmit = (values: string) => {
    console.log(values)
  }

  return (
    <RegisterDisplay
      onSubmit={onSubmit}
    />
  )
}

export default Register
