// import { Button, Input, Link } from "@nextui-org/react";
// import React from "react";
// import { Link as RLink } from "react-router-dom";
// import  { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
	
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = { userName, password, email };

//     try {
//       const response = await axios.post('http://localhost:8080/api/users/register', userData);
// 	  console.log(response);
// 	  if (response.data === "User registered successfully!") {
//         setMessage("Registration successful! Redirecting to login...");
        
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);  
//       } else {
//         setMessage("user already exists");  
//       }
//     } catch (error) {
//       setMessage('Error registering user');
//       console.error(error);
//     }
      
     
    
//   };
// 	return (
// 		<div className="h-full flex justify-center items-center">
// 			<form
// 				onSubmit={handleSubmit}
// 				className="shadow-lg px-5 py-8 border-gray-300 my-40 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col"
// 			>
// 			<form className="shadow-lg px-5 py-8 my-40 border-gray-300 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col">
// 				<div className="text-3xl text-center mb-10 text-blue-700">Register</div>
// 				<div className=" flex flex-col">
// 					<div className="mb-4">
// 						<label className="block text-gray-700 mb-2">Name </label>
// 						<input
// 							type="text"
// 							name="Name"
// 							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// 							placeholder="userName"
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label className="block text-gray-700 mb-2">Email </label>
// 						<input
// 							type="text"
// 							name="email"
// 							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// 							placeholder="email"
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label className="block text-gray-700 mb-2">Password </label>
// 						<input
// 							type="password"
// 							name="password"
// 							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// 							placeholder="password"
// 						/>
// 					</div>
// 				</div>
// 				<Button type ="submit" color="primary" className="mt-5">
// 					Sign Up
// 				</Button>
// 				<div>
// 					Already have an account ?{" "}
// 					<Link as={RLink} to="/login">
// 						Login
// 					</Link>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// export default Register;
import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { Link as RLink } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Initialize useNavigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the user data object to send to the backend
    const userData = { userName, password, email };

    try {
      // Make the POST request to register the user
      const response = await axios.post('http://localhost:8080/api/users/register', userData);
      console.log(response); // For debugging

      // If registration is successful
      if (response.data === "User registered successfully!") {
        setMessage("Registration successful! Redirecting to login...");
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage("User already exists");
      }
    } catch (error) {
      setMessage('Error registering user');
      console.error(error);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="shadow-lg px-5 py-8 my-40 border-gray-300 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col"
      >
        <div className="text-3xl text-center mb-10 text-blue-700">Register</div>
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={userName}  // Bind to state
              onChange={(e) => setUserName(e.target.value)}  // Update state
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}  // Bind to state
              onChange={(e) => setEmail(e.target.value)}  // Update state
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}  // Bind to state
              onChange={(e) => setPassword(e.target.value)}  // Update state
            />
          </div>
        </div>

        {/* Submit button */}
        <Button type="submit" color="primary" className="mt-5">
          Sign Up
        </Button>

        {/* Display message */}
        {message && <div className="mt-3 text-center text-red-600">{message}</div>}

        <div className="mt-3 text-center">
          Already have an account?{" "}
          <Link as={RLink} to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
