import React from "react"
import TextField from "@material-ui/core/TextField"
import { FieldRenderProps } from "react-final-form"

const TextInput = (props: FieldRenderProps<string>): JSX.Element => {
  const { input, label, meta: { error }, ...custom } = props

  return (
    <TextField
      error={!!error}
      label={label}
      helperText={error}
      {...input}
      {...custom}
    />
  )
}

export default TextInput
