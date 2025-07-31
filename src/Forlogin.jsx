import React, { useState } from "react";

function Forlogin() {

    let [formData, setFormData] = useState({
        email: "",
        password: ""
        
      });
    
      const handleChange = (joe) => {
        // const { name, value } = e.target;
        setFormData ({
          ...formData,
          [joe.target.name]: joe.target.value
        });
      }
      const handleSubmit = async (e) => {
        alert("Form submitted");
        e.preventDefault();
         // Here you can add the logic to send formData to your backend
          try {
            console.log(formData);
            // const response = await fetch('https://newbackend-ncar.onrender.com/user/login', {
            const response = await fetch('http://localhost:3700/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            console.log('Signup successful:', data);
          } catch (error) {
            console.error('Error:', error);
          }
    
    }
    
 return (
    <div>
      <div className="h-screen flex items-center justify-center bg-black text-white  flex-col gap-4">
      <h1 className="text-4xl font-bold">Forlogin</h1> 
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-8 w-80>">
        
        <label className="flex flex-col">
          Email:
          <input onChange={handleChange} type=" text" name="email" className=" mt-1 p-2 bg-gray-800 border border-gray-700 rounded" />
        </label>

        <label className="flex flex-col">
          Password:
          <input onChange={handleChange} type=" text" name="password" className=" mt-1 p-2 bg-gray-800 border border-gray-700 rounded" />
        </label>
        <button type="submit" className="mt-4 p-2 bg-blue-600 rounded ">login</button>
      </form>
    </div>


    </div>
  )
}

export default Forlogin