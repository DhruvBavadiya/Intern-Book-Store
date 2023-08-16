import React, { useEffect, useState } from 'react'
import { Bookstyle } from '../Styles/Bookstyle'
import { Typography } from '@mui/material'
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import categoryService from '../Service/categoryService';

const EditBook = () => {
    const navigate =useNavigate()
    const { id } = useParams()
    const initialValues = {
        id: 0,
        name: "",
        price: 0,
        description: "",
        base64image: "",
        categoryId: 0,
      };
    
    const [initialValuesState, setInitialValuesState] = useState(initialValues);
    const [categories, setCategories] = useState();

    // const category = [
    //     1, 2, 3, 4, 5
    // ]

    const Allcategory = async ()=>{
        await categoryService.GetAllCategory().then((res)=>{
            if(res && res.status===200){
                setCategories(res.data.result)
            }
        console.log("helo")
        })
    }

    useEffect(()=>{
        Allcategory();
    },[])

    // console.log(categories)

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Book Name Required!"),
        price: Yup.number().min(0).required("Book Price Required!"),
        categoryId: Yup.string().required("Category Required!"),
        description: Yup.string().required("Description Required!"),
        base64image: Yup.string().required("Image is required"),
    });


    const handleSubmit = () => {
        // will
    }

    return (
        <Formik
            initialValues={{ name: "", price: "", base64image: "", categoryId: "", description: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ values, handleBlur, errors, setFieldValue, setFieldError }) => {
                return (
                    <Form>
                        <div style={Bookstyle.booklistContainer}>
                            <Typography variant='h4' sx={Bookstyle.booklistTitle}>
                                Edit Book
                            </Typography>
                            <hr />
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name<sup>*</sup></label>
                                <input type="text"
                                    name="name"
                                    id="name"
                                    error={errors.name}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    onChange={(e) => setFieldValue("name", e.target.value)}
                                    class="form-control"
                                    placeholder="Book Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Price</label>
                                <input type="email" 
                                 name="price"
                                id="price"
                                error={errors.price}
                                onBlur={handleBlur}
                                value={values.price}
                                onChange={(e) => setFieldValue("price", e.target.value)}
                                class="form-control" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Add Image</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <label for="formFile" class="form-label">Select Category</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                {Array.isArray(categories)&&categories.map((category) => {
                                    return (
                                      <option value={category.id} key={category.id}>
                                        {category.name}
                                      </option>
                                    );
                                  })}

                            </select>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" class="btn btn-danger" onClick={() => navigate("/books")}
                            >Danger</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default EditBook
