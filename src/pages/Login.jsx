// import { Button, Input, Link } from "@nextui-org/react";
// import React, { useContext, useState } from "react";
// import { Link as RLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import toast from "react-hot-toast";
// import axios from "axios";

// const Login = () => {
//   const { setIsLogged } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const toastId = toast.loading("Logging in, please wait.");

//     // 	setTimeout(() => {
//     // 		toast.dismiss(toastId);
//     // 		if (email === "admin@gmail.com" && password === "admin") {
//     // 			toast.success("Logged in successful.");
//     // 			navigate("/dashboard");
//     // 			localStorage.setItem("token", "djfdjakfjaksjfskdjdksjlksdufsu");
//     // 			setIsLogged(true);
//     // 		} else {
//     // 			toast.error("Wrong credentials.");
//     // 		}
//     // 	}, 600);
//     // };
//     const loginData = { userName, password };

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/users/login",
//         loginData
//         // Ensure correct content type
//       );
//       toast.dismiss(toastId);
//       // If login is successful, navigate to dashboard or homepage
//       console.log(response.data);

//       localStorage.setItem("token", response.data);
//       toast.sucess("logged in");

//       navigate("/dashboard");
//       console.log("good");
//       setIsLogged(true);
//       // Redirect to the home/dashboard page
//     } catch (error) {
//       // Handle error response

//       toast.error("An error occurred while logging in");
//       toast.dismiss(toastId);
//     }
//   };
//   return (
//     <div className="h-full flex justify-center items-center">
//       <form
//         onSubmit={handleLoginSubmit}
//         className="shadow-lg px-5 py-8 border-gray-300 my-40 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col"
//       >
//         <div className="text-3xl text-center mb-10 text-blue-700">Login</div>
//         <div className=" flex flex-col gap-5">
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">UserName </label>
//             <input
//               //type="email"
//               name="name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Your Email"
//               required
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Password </label>
//             <input
//               type="password"
//               name="password"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//               value={password}
//               placeholder="Your Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <Button
//           type="submit"
//           onClick={() => setIsLogged(true)}
//           color="primary"
//           className="mt-5"
//         >
//           Login
//         </Button>
//         <div>
//           Don&apos;t have an account ?{" "}
//           <Link as={RLink} to="/register">
//             Register
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { Button, Input, Link } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { Link as RLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in, please wait...");

    const loginData = { userName, password };

    try {
      // Send login request to the backend API
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        loginData
      );

      // Handle successful login
      toast.dismiss(toastId);
      toast.success("Logged in successfully!");
      localStorage.setItem("token", response.data.password); // Assuming the API returns a token
      console.log(response.data);
      localStorage.setItem("user", response.data.userName);
      // Set the user as logged in
      setIsLogged(true);

      // Navigate to the dashboard page
      navigate("/dashboard");
    } catch (error) {
      toast.dismiss(toastId);

      // Handle error response
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message || "An error occurred while logging in."
        );
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={handleLoginSubmit}
        className="shadow-lg px-5 py-8 border-gray-300 my-40 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col"
      >
        <div className="text-3xl text-center mb-10 text-blue-700">Login</div>
        <div className="flex flex-col gap-5">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">UserName</label>
            <input
              name="userName"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" color="primary" className="mt-5">
          Login
        </Button>
        <div className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link as={RLink} to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
