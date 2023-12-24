import React, { useState } from 'react';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from 'react-router-dom';

const ContactForm = () => {

    // const handleCursor = () => {
    //     const cursor = document.querySelector('[data-cursor="1"]');
    //     cursor.classList.remove('cursor-hover--a');
    // }
    // State to manage form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., API call or other actions
        console.log(formData);
        toast.success("Thank you. We will get back to you as soon as possible", {
            style: {
                backgroundColor: "#fff",
                color: "#000",
            },
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    return (
        <div className='form_con-s'>
            <div className='form_Ttl'>
                <h3>Get in touch</h3>
            </div>
            <div className='form_con'>
                <form onSubmit={handleSubmit}>
                    <div className='form_Box'>
                        <div className='f_Row'>
                            <div className='f_Col'>
                                <div className='f_input'>
                                    <input type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className='input_Fld'
                                        placeholder='First name'
                                    />
                                </div>
                            </div>
                            <div className='f_Col'>
                                <div className='f_input'>
                                    <input type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className='input_Fld'
                                        placeholder='Last name'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='f_Row'>
                            <div className='f_Col'>
                                <div className='f_input'>
                                    <input type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='input_Fld'
                                        placeholder='Enter your email'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='f_Row'>
                            <div className='f_Col'>
                                <div className='f_input'>
                                    <select name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className='input_Fld'
                                    >
                                        <option value="">Department</option>
                                        <option value="hr">Human Resources</option>
                                        <option value="it">Information Technology</option>
                                        <option value="finance">Finance</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='f_Row'>
                            <div className='f_Col'>
                                <div className='f_input'>
                                    <textarea name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className='input_Fld'
                                        placeholder='Message'
                                        rows={5}
                                        cols={50}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='f_Btn'>
                        <button type="submit">Send message</button>
                        <span>By contacting us, you agree to Brand Elevate <Link to="/terms" className='b'>Terms and Conditions.</Link></span>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
