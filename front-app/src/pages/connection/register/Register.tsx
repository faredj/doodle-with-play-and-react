import React from "react"
import { Form, Field } from "react-final-form"
import TextInput from "../../../components/finalFormFields/TextInput"
import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"

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

const Register = () => {
  const classes = useStyle()

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <div className={classes.root}>
      <Form
        onSubmit={onSubmit}
        validate={null}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justify={"center"}>
              <Grid item>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography>Registration</Typography>
                    <Field name="firstName" component={TextInput} label="First name" />
                    <Field name="lastName" component={TextInput} label="Last name" />
                    <Field name="email" component={TextInput} label="Email" />
                    <Field name="password" type={"password"} component={TextInput} label="Password" />
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button variant="outlined" color={"primary"} type={"submit"}>Registration</Button>
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

export default Register
