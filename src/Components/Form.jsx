import { Button, FormHelperText, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
import '../App.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import authService from '../Service/authService';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect } from 'react';
const Form1 = () => {

    // const [username, setusername] = useState("");
    // const [password, setPassword] = useState("");

    const handleSubmit = async (values) => {
        // console.log(username)
        // console.log(password)

        const payload = {
            firstName: values.userName,
            lastName: "hello",
            email: values.email,
            roleId: 2,
            password: values.password
        }

        authService.Register(payload).then((responce) => {
            console.log(responce)
            if (responce && responce.status === 200) {
                toast.success("data added succsesfullt!")
            }
        }).catch(() => {
            toast("some error ocurred")
        })

    }
    const getData = async () => {
        await axios.get(`https://book-e-sell-node-api.vercel.app/api/user/byId?id=${2280}`).then((res) => {
            console.log(res.data.result)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required("Username is required"),
        email: Yup.string().email().required("email is required"),
        password: Yup.string().min(6).required("password is required"),
        age: Yup.number().required("age is required").min(18),
    })
    return (
        <Formik
            initialValues={{ userName: "", age: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ values, errors, setFieldValue, handleBlur }) => {
                // console.log(errors)
                return (
                    <Form>
                        <div className='form-box'>
                            <Typography variant='h3' sx={{ color: "red", marginBottom: 1, marginLeft: "123px" }}>Login </Typography>
                            <TextField
                                label="username"
                                name="userName"
                                error={errors.userName}
                                variant="outlined"
                                value={values.userName}
                                onChange={(e) => {
                                    setFieldValue("userName", e.target.value)
                                }}
                                onBlur={handleBlur}
                            />
                            <FormHelperText error>
                                <ErrorMessage name="userName" />
                            </FormHelperText>
                            <TextField
                                label="email"
                                name="email"
                                error={errors.email}
                                variant="outlined"
                                value={values.email}
                                onChange={(e) => {
                                    setFieldValue("email", e.target.value)
                                }}
                                onBlur={handleBlur}
                            />
                            <FormHelperText error>
                                <ErrorMessage name="email" />
                            </FormHelperText>
                            <TextField
                                label="age"
                                name="age"
                                variant="outlined"
                                value={values.age}
                                onChange={(e) => {
                                    setFieldValue("age", e.target.value)
                                }}
                                onBlur={handleBlur}
                            />
                            <FormHelperText error>
                                <ErrorMessage name="age" />
                            </FormHelperText>
                            <TextField id="outlined-basic"
                                label="password"
                                name="password"
                                error={errors.password}

                                variant="outlined"
                                value={values.password}
                                onChange={(e) => {
                                    setFieldValue("password", e.target.value)
                                }}
                                onBlur={handleBlur}
                            />
                            <FormHelperText error>
                                <ErrorMessage name="password" />
                            </FormHelperText>
                            <Button variant="contained" type='submit'>Submit</Button>

                        </div>
                    </Form>
                )
            }}
        </Formik >
    )
}

export default Form1;
