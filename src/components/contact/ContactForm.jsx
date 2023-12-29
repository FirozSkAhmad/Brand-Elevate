import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }
    if (formData.department.trim() === "") {
      newErrors.department = "Department is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear error for the input being edited
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      const data = {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        department: formData.department,
        message: formData.message,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/6405cafe-670b-4c30-8213-e09a874ef7ab",
          data
        )
        .then((response) => {
          //   console.log(response);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            department: "",
            message: "",
          });
          toast.success(
            "Thank you. We will get back to you as soon as possible",
            {
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
            }
          );
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          toast.error("Error submitting form. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      toast.error("Please fill in the required fields correctly.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="form_con-s">
      <div className="form_Ttl">
        <h3>Get in touch</h3>
      </div>
      <div className="form_con">
        <form onSubmit={handleSubmit}>
          <div className="form_Box">
            <div className="f_Row">
              <div className="f_Col">
                <div className="f_input">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input_Fld"
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>
              </div>
              <div className="f_Col">
                <div className="f_input">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input_Fld"
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="f_Row">
              <div className="f_Col">
                <div className="f_input">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input_Fld"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="f_Row">
              <div className="f_Col">
                <div className="f_input">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="input_Fld"
                  >
                    <option value="">Department</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="finance">Finance</option>
                    {/* Add more options as needed */}
                  </select>
                  {errors.department && (
                    <span className="error-message">{errors.department}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="f_Row">
              <div className="f_Col">
                <div className="f_input">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input_Fld"
                    placeholder="Message"
                    rows={5}
                    cols={50}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="f_Btn">
            <button type="submit">Send message</button>
            <span>
              By contacting us, you agree to Brand Elevate{" "}
              <Link to="/terms" className="b">
                Terms and Conditions.
              </Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
