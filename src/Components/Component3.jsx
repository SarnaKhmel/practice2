import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Validations = yup.object().shape({
  name: yup.string().min(2, "Min length 3 char").required("Name is required"),
  email: yup
    .string()
    .email("invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default class Component3 extends Component {
  render() {
    return (
      <div>
        <h2>Component3</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={Validations}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ touched, errors }) => (
            <Form>
              <label>
                Name
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="errorName"
                  className="errorName"
                />
              </label>

              <label>
                Email
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`form-control  ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="errorName"
                  className={`form-control  ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
              </label>

              <label>
                Password
                <Field
                  type="text"
                  name="password"
                  placeholder="Password"
                  className={`form-control  ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="errorName"
                  className="errorName"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
