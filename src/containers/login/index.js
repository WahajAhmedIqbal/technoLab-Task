import React, { useState } from "react";
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
    },
  });

  return (
    <div className="main-box">
      <Row>
        <Col span={24}>
          <form className="form-box" onSubmit={formik.handleSubmit}>
            <h1>User Form</h1>
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

      {/* <TablePage /> */}
    </div>
  );
};

export default LoginPage;

// import { Form, Formik, useField } from "formik";
// import React from "react";
// import * as Yup from "yup";

// const customTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? <div className="error">{meta}</div> : null}
//     </>
//   );
// };

// const LoginPage = () => {
//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         email: "",
//       }}
//       validationSchema={Yup.object({
//         name: Yup.string()
//           .min(3, "Must be at least 3 character")
//           .max(15, "Must be 15 character or less"),
//         email: Yup.string().min(3, "atleast 3 ").max(15, "maximum 15 or less"),
//       })}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         setTimeout(() => {

//           alert(JSON.stringify(values, null, 2));
//           resetForm();
//           setSubmitting(false);
//         }, 2000);
//       }}
//     >
//       {(props) => (
//         <Form>
//           <h1>Sign up</h1>
//           <customTextInput
//             label="Eame"
//             name="name"
//             type="text"
//             placeholder="Enter Name"
//           />
//           <customTextInput
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="Enter email"
//           />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginPage;
