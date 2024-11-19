import React, {useState} from "react";

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: " ",
        email: " ",
        password: " ",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const {name, value} =e.target;
        setFormData({...formData, [name]: value});

    };
    const validateForm = () => {
        const newErrors ={};

        if(!formData.username) newErrors.username = "Username is required";
        if(!formData.email) newErrors.email = "Email is required";
        if(!formData.password) newErrors.password = "Password is required";
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }else {
            console.log("Form submitted:", formData);
            setErrors({});
        }
        };

        return (
<form onSubmit = {handleSubmit}>
    <div>
        <label>Username: </label>
        <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        />
    </div>

    <div>
        <label>Email: </label>
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
    </div>

    <div>
        <label>Password: </label>
        <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        />
    </div>
</form>

        );
};
export default RegistrationForm;