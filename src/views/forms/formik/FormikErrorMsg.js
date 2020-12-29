import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup
} from "reactstrap"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required("Required")
})

class FormikErrorMsg extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Msg</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            You can show error messages with formik using{" "}
            <code>validationSchema</code> prop with formik tag.
          </p>
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: ""
            }}
            validationSchema={SignUpSchema}
            render={({ errors, touched }) => (
              <Form>
                <FormGroup>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    className="form-control"
                    name="firstName"
                    placeholder="Jane"
                    type="text"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    className="form-control"
                    name="lastName"
                    placeholder="Doe"
                    type="text"
                  />
                  <ErrorMessage name="firstName">
                    {(msg /** this is the same as the above */) => (
                      <div className="field-error text-danger">{msg}</div>
                    )}
                  </ErrorMessage>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <Field
                    className="form-control"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                  {/* This will render a string */}
                  <ErrorMessage name="email">
                    {(msg /** this is the same as the above */) => (
                      <div className="field-error text-danger">{msg}</div>
                    )}
                  </ErrorMessage>
                </FormGroup>

                <Button.Ripple color="primary" className="mt-1" type="submit">
                  Submit
                </Button.Ripple>
              </Form>
            )}
          />
        </CardBody>
      </Card>
    )
  }
}
export default FormikErrorMsg
