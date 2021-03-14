import React from "react"
import { Field, Form } from "react-final-form"
import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import TextInput from "../../../components/finalFormFields/TextInput"
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
  },
  signup : {
    textAlign : "right"
  }
}))

const validate = (values: User) => Validator.build(values, {
  "email"    : [ Validator.required, Validator.email ],
  "password" : [ Validator.required, Validator.min(6) ]
})

interface Props {
  onSubmit: (values: any) => void
}

const LoginDisplay = (props : Props) => {
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
                    <Typography>Sign in</Typography>
                    <Field name="email" component={TextInput} label="Email" />
                    <Field name="password" type={"password"} component={TextInput} label="Password" />
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button variant="outlined" color={"primary"} type={"submit"}>Sign in</Button>
                  </CardActions>
                </Card>
                <div className={classes.signup}>
                  <Typography variant={"caption"}>You do not have an account ? </Typography>
                  <Link to={"/register"}><Typography variant={"caption"}>Sign up</Typography></Link>
                </div>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  )
}

export default LoginDisplay
