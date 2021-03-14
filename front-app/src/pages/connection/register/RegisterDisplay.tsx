import React from "react"
import { Form, Field } from "react-final-form"
import TextInput from "../../../components/finalFormFields/TextInput"
import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import { User } from "../../../models/User"
import { Validator } from "../../../utils/form-validators"

const useStyle = makeStyles(() => ({
  root : {
    marginTop : "10%"
  },
  card : {
    width : 300
  },
  cardContent : {
    display : "grid"
  },
  action : {
    textAlign : "right"
  }
}))

const validate = (values: User) => Validator.build(values, {
  "firstName" : [ Validator.required, Validator.min(3) ],
  "lastName"  : [ Validator.required, Validator.min(3) ],
  "email"     : [ Validator.required, Validator.email ],
  "password"  : [ Validator.required, Validator.min(6) ]
})

interface Props {
  onSubmit: (values: any) => void
}

const RegisterDisplay = (props: Props) => {
  const classes = useStyle()
  const { onSubmit } = props

  return (
    <div className={classes.root}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justify={"center"}>
              <Grid item>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography>Sign up</Typography>
                    <Field name="firstName" component={TextInput} label="First name" />
                    <Field name="lastName" component={TextInput} label="Last name" />
                    <Field name="email" component={TextInput} label="Email" />
                    <Field name="password" type={"password"} component={TextInput} label="Password" />
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button variant="outlined" color={"primary"} type={"submit"}>Sign up</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  )
}

export default RegisterDisplay
