import React, { useState,useEffect } from "react";
 import { useLocation,useNavigate } from "react-router-dom";
import './css/ApplyForm.css';
const ApplyForm = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState();
//   const [address, setaddress] = useState("");
//   const [exp, setExp] = useState("");
 
const initialValues = {name:"",email:"",phone:"",address:"",exp:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location.state)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
         let candidate = {id:location.state.props.id,name:formValues.name,email:formValues.email,phone:formValues.phone,address:formValues.address,exp:formValues.exp};
        fetch("http://localhost:7000/candidates",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(candidate)
        })
        console.log(candidate);
        

}

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
    }
    else if (values.name.length > 10) {
      errors.name = "Name cannot exceed more than 10 characters";
    }
    else if (!format.test(values.name)) {
      errors.name = "This is not a valid Name format!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phonenumber is required";
    }  else if (values.phone.length < 10) {      
      errors.phone = "Phonenumber cannot be less then  10 numbers";    
    }    else if (values.phone.length > 10) {
      errors.phone = "Phonenumber cannot be more then  10 numbers";
    }
    if (!values.exp) {
      errors.exp = "Experience is required";
    } else if (values.exp.length < 10) {      
      errors.exp = "Experience must be more than 10 characters";    
    } else if (values.exp.length > 150) {
      errors.exp = "Experience cannot exceed more than 150 characters";
    }
    return errors;
  };


  return (
    <div style={{textAlign:'center'}}>
         {Object.keys(formErrors).length === 0 && isSubmit ? (
        alert(`Application submitted successfully ${navigate('/Jobs')}`)) : (
        <pre></pre>      )}
      <h5>Applying for JOB ID {location.state.props.id}</h5>
      <form className="Apply-form" >
       

        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          placeholder="Name"
          onChange={handleChange}
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

        <input
          
          type="text"
          name="address"
          id="address"
          value={formValues.address}
          placeholder="Address (Optional)"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="exp"
          id="exp"
          value={formValues.exp}
          placeholder="Experience Details"
          onChange={handleChange}
        />
        <p>{formErrors.exp}</p>
        <br />

        <button
          className="btn btn-danger"
          type="submit"
          value="Add Details"
          onClick={submit}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
