import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup
} from "reactstrap"
import { Formik, Field, Form } from "formik"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

class FormikBasic extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Getting values in and out of form state is easy using formik, you
            won't have to manage state to make your input a controlled element.
          </p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: ""
            }}
            onSubmit={values => {
              setTimeout(() => {
                toast.success(JSON.stringify(values, null, 2))
              }, 500)
            }}
            render={() => (
              <Form>
                <FormGroup>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    className="form-control"
                    name="firstName"
                    placeholder="Jane"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    className="form-control"
                    name="lastName"
                    placeholder="Doe"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field
                    className="form-control"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                </FormGroup>
                <Button.Ripple color="primary" type="submit">
                  Submit
                </Button.Ripple>
              </Form>
            )}
          />
          <ToastContainer />
        </CardBody>
      </Card>
    )
  }
}
export default FormikBasic
