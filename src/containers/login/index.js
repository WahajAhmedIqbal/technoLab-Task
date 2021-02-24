import React from "react";
import "./loginStyle.css";
import { Row, Col } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import TablePage from "containers/table";
import { useDispatch } from "react-redux";
import { addUser } from "./../../redux/actions/userAddAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      key: Math.floor(Math.random() * 500),
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 character or less")
        .required("Required first name"),
      lastName: Yup.string()
        .max(15, "Must be 15 or less")
        .required("Required last name"),
      email: Yup.string().email("Invalid email").required("Required email "),
    }),
    onSubmit: (values) => {
      dispatch(addUser(values));
      formik.handleReset();
    },
  });

  return (
    <div className="main-box">
      <Row>
        <Col span={24}>
          <form className="form-box" onSubmit={formik.handleSubmit}>
            <h1>User Form</h1>
            {formik.key}
            <input
              id="firstName"
              name="firstName"
              placeholder="First Name "
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <input
              id="lastName"
              name="lastName"
              placeholder="Last Name "
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <input
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        </Col>
      </Row>

      <TablePage />
    </div>
  );
};

export default LoginPage;
