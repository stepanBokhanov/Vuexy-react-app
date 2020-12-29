import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Button,
  Label
} from "reactstrap"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

const formSchema = Yup.object().shape({
  required: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  number: Yup.number().required("Required"),
  url: Yup.string()
    .url()
    .required("Required"),
  date: Yup.date().required("Required"),
  minlength: Yup.string()
    .min(4, "Too Short!")
    .required("Required"),
  maxlength: Yup.string()
    .max(5, "Too Long!")
    .required("Required")
})

class FormValidation extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle> Validation</CardTitle>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={{
              required: "",
              email: "",
              url: "",
              number: "",
              date: "",
              minlength: "",
              maxlength: ""
            }}
            validationSchema={formSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <FormGroup className="my-3">
                  <Label for="required">Name</Label>
                  <Field
                    name="required"
                    id="required"
                    className={`form-control ${errors.required &&
                      touched.required &&
                      "is-invalid"}`}
                  />
                  {errors.required && touched.required ? (
                    <div className="invalid-tooltip mt-25">{errors.required}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="my-3">
                  <Label for="email">Email</Label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={`form-control ${errors.email &&
                      touched.email &&
                      "is-invalid"}`}
                  />
                  {errors.email && touched.email ? (
                    <div className="invalid-tooltip mt-25">{errors.email}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="my-3">
                  <Label for="url">Website URL</Label>
                  <Field
                    name="url"
                    id="url"
                    className={`form-control ${errors.url &&
                      touched.url &&
                      "is-invalid"}`}
                  />
                  {errors.url && touched.url ? (
                    <div className="invalid-tooltip mt-25">{errors.url}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="my-3">
                  <Label for="number">Number</Label>
                  <Field
                    name="number"
                    id="number"
                    className={`form-control ${errors.number &&
                      touched.number &&
                      "is-invalid"}`}
                  />
                  {errors.number && touched.number ? (
                    <div className="invalid-tooltip mt-25">{errors.number}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="my-3">
                  <Label for="date">Date</Label>
                  <Field
                    type="date"
                    name="date"
                    id="date"
                    className={`form-control ${errors.date &&
                      touched.date &&
                      "is-invalid"}`}
                  />
                  {errors.date && touched.date ? (
                    <div className="invalid-tooltip mt-25">{errors.date}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="my-3">
                  <Label for="minlength">
                    Min Length (Minimum 4 Characters)
                  </Label>
                  <Field
                    name="minlength"
                    id="minlength"
                    className={`form-control ${errors.minlength &&
                      touched.minlength &&
                      "is-invalid"}`}
                  />
                  {errors.minlength && touched.minlength ? (
                    <div className="invalid-tooltip mt-25">{errors.minlength}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="my-3">
                  <Label for="maxlength">
                    Max Length (Maximum 5 Characters)
                  </Label>
                  <Field
                    name="maxlength"
                    id="maxlength"
                    className={`form-control ${errors.maxlength &&
                      touched.maxlength &&
                      "is-invalid"}`}
                  />
                  {errors.maxlength && touched.maxlength ? (
                    <div className="invalid-tooltip mt-25">{errors.maxlength}</div>
                  ) : null}
                </FormGroup>
                <Button.Ripple color="primary" type="submit">
                  Submit
                </Button.Ripple>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    )
  }
}
export default FormValidation
