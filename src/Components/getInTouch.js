import React, { useState,useEffect } from "react";
import "./css/getInTouch.css";
import pic from "./images/contactUs.jpg";
import * as Icon from "react-bootstrap-icons";
import Alert from "react-bootstrap/Alert";

const ContactForm = () => {
  
  const initialValues = { name: "", email: "", phone: "", mess: " " };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    let cont = { name: formValues.name, email: formValues.email, phone: formValues.phone, mess: formValues.mess };
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cont),
    });
    console.log(cont);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const format = /^[A-Za-z]+$/;
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length > 10) {
      errors.name = "Name cannot exceed more than 10 characters";
    } else if (!format.test(values.name)) {
      errors.name = "This is not a valid Name format!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phonenumber is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phonenumber cannot be less then  10 numbers";
    } else if (values.phone.length > 10) {
      errors.phone = "Phonenumber cannot be more then  10 numbers";
    }
    if (!values.mess) {
      errors.mess = "Message is required";
    } else if (values.mess.length < 10) {
      errors.mess = "Message must be more than 10 characters";
    } else if (values.mess.length > 150) {
      errors.mess = "Message cannot exceed more than 150 characters";
    }
    return errors;
  };

  return (
    <div >
      <div className="maincont">
        <div className="cont1">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            alert("Submitted Successfully")
          ) : (
            <pre></pre>
          )}
          <form className="needs-validation">
            <div className="form-box">
              <h4 style={{ color: "red", textAlign: "center" }}>
                Get In Touch
              </h4>

              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <p>{formErrors.name}</p>
              <br />

              <input
                type="text"
                name="email"
                id="email"
                value={formValues.email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <p>{formErrors.email}</p>
              <br />

              <input
                type="text"
                name="phone"
                id="phone"
                value={formValues.phone}
                placeholder="Phone"
                onChange={handleChange}
               
              />
              <p>{formErrors.phone}</p>
              <br />

              <textarea
                rows="5"
                type="text"
                name="mess"
                id="mess"
                value={formValues.mess}
                placeholder="Message"
                onChange={handleChange}
              />
              <p>{formErrors.mess}</p>
              <br />

              <button
                className="btn btn-danger"
                type="submit"
                value="Add Details"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="cont2">
          <img src={pic} />
        </div>
      </div>
      <div className="address">
        <Icon.GeoAlt />
        #144 2nd street Banansvadi, Banglore.
      </div>
    </div>
  );
};

export default ContactForm;
