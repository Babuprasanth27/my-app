// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import '@dotlottie/player-component';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (email === '' || password === '') {
// //       setError('Please add all the fields');
// //       return;
// //     }
// //     if(email === "admin@gmail.com"){
// //       useNavigate("/")
// //     }
// //     setError('');
// //     console.log('Email:', email);
// //     console.log('Password:', password);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white">
// //       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex">
// //         <div className="w-1/2 p-4 flex items-center justify-center">
// //           <dotlottie-player
// //             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
// //             autoplay
// //             loop
// //             style={{ width: '100%', height: '100%' }}
// //           ></dotlottie-player>
// //         </div>
// //         <div className="w-1/2 p-4">
// //           <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
// //           {error && (
// //             <div className="mb-4 text-red-500 text-sm text-center">
// //               {error}
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Email"
// //               />
// //             </div>
// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Password"
// //               />
// //             </div>
// //             <div className="mb-3 text-right">
// //               <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline">
// //                 Forgot Password?
// //               </a>
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <button
// //                 type="submit"
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
// //               >
// //                 <Link to="/" className="no-underline text-white">Login</Link>
// //               </button>
// //             </div>
// //           </form>
// //           <div className="mt-6 text-center">
// //             <p className="text-sm">
// //               Don't have an account?{' '}
// //               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
// //                 Create an Account
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import '@dotlottie/player-component';

// // function Login({ onLogin }) {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (email === '' || password === '') {
// //       setError('Please add all the fields');
// //       return;
// //     }

// //     setError('');
// //     onLogin(email); // Call the onLogin function from props
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white">
// //       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex">
// //         <div className="w-1/2 p-4 flex items-center justify-center">
// //           <dotlottie-player
// //             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
// //             autoplay
// //             loop
// //             style={{ width: '100%', height: '100%' }}
// //           ></dotlottie-player>
// //         </div>
// //         <div className="w-1/2 p-4">
// //           <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800 font-serif">Login</h2>
// //           {error && (
// //             <div className="mb-4 text-red-500 text-sm text-center">
// //               {error}
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label className="block  text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="email">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Email"
// //               />
// //             </div>
// //             <div className="mb-6">
// //               <label className="block  text-sm font-bold mb-2 font-serif text-indigo-800" htmlFor="password">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Password"
// //               />
// //             </div>
// //             <div className="mb-3 text-right">
// //               <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline font-serif">
// //                 Forgot Password?
// //               </a>
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <button
// //                 type="submit"
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full font-serif"
// //               >
// //                 Login
// //               </button>
// //             </div>
// //           </form>
// //           <div className="mt-6 text-center font-serif">
// //             <p className="text-sm">
// //               Don't have an account?{' '}
// //               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
// //                 Create an Account
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import '@dotlottie/player-component';

// // function Login({ onLogin }) {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('user'); // Default role is 'user'
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (email === '' || password === '') {
// //       setError('Please fill in all the fields');
// //       return;
// //     }

// //     setError('');
// //     onLogin({ email, password, role }); // Pass the role along with email and password
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white p-4">
// //       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
// //         <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
// //           <dotlottie-player
// //             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
// //             autoplay
// //             loop
// //             style={{ width: '100%', height: '100%' }}
// //           ></dotlottie-player>
// //         </div>
// //         <div className="w-full md:w-1/2 p-4">
// //           <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800 font-serif">Login</h2>
// //           {error && (
// //             <div className="mb-4 text-red-500 text-sm text-center">
// //               {error}
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="email">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Email"
// //               />
// //             </div>
// //             <div className="mb-6">
// //               <label className="block text-sm font-bold mb-2 font-serif text-indigo-800" htmlFor="password">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Password"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="role">
// //                 Role
// //               </label>
// //               <div className="flex">
// //                 <label className="mr-4">
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="user"
// //                     checked={role === 'user'}
// //                     onChange={() => setRole('user')}
// //                     className="mr-1"
// //                   />
// //                   User
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="admin"
// //                     checked={role === 'admin'}
// //                     onChange={() => setRole('admin')}
// //                     className="mr-1"
// //                   />
// //                   Admin
// //                 </label>
// //               </div>
// //             </div>
// //             <div className="mb-3 text-right">
// //               <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline font-serif">
// //                 Forgot Password?
// //               </a>
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <button
// //                 type="submit"
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full font-serif"
// //               >
// //                 Login
// //               </button>
// //             </div>
// //           </form>
// //           <div className="mt-6 text-center font-serif">
// //             <p className="text-sm">
// //               Don't have an account?{' '}
// //               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
// //                 Create an Account
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// // import React, { useState } from 'react';
// // import {Link, useNavigate } from 'react-router-dom';
// // import '@dotlottie/player-component';

// // function Login({ onLogin }) {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('user');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate(); 

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (email === '' || password === '') {
// //       setError('Please fill in all the fields');
// //       return;
// //     }

// //     try {
// //       const response = await fetch('http://localhost:8080/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email, password, role }),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         onLogin(data);
// //         navigate('/'); // Navigate to the home page on successful login
// //       } else {
// //         setError('Invalid email or password');
// //       }
// //     } catch (error) {
// //       setError('Failed to connect to the server');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white p-4">
// //       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
// //         <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
// //           <dotlottie-player
// //             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
// //             autoplay
// //             loop
// //             style={{ width: '100%', height: '100%' }}
// //           ></dotlottie-player>
// //         </div>
// //         <div className="w-full md:w-1/2 p-4">
// //           <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800 font-serif">Login</h2>
// //           {error && (
// //             <div className="mb-4 text-red-500 text-sm text-center">
// //               {error}
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="email">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Email"
// //               />
// //             </div>
// //             <div className="mb-6">
// //               <label className="block text-sm font-bold mb-2 font-serif text-indigo-800" htmlFor="password">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Password"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="role">
// //                 Role
// //               </label>
// //               <div className="flex">
// //                 <label className="mr-4">
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="user"
// //                     checked={role === 'user'}
// //                     onChange={() => setRole('user')}
// //                     className="mr-1"
// //                   />
// //                   User
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="admin"
// //                     checked={role === 'admin'}
// //                     onChange={() => setRole('admin')}
// //                     className="mr-1"
// //                   />
// //                   Admin
// //                 </label>
// //               </div>
// //             </div>
// //             <div className="mb-3 text-right">
// //               <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline font-serif">
// //                 Forgot Password?
// //               </a>
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <button
// //                 type="submit"
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full font-serif"
// //               >
// //                 Login
// //               </button>
// //             </div>
// //           </form>
// //           <div className="mt-6 text-center font-serif">
// //             <p className="text-sm">
// //               Don't have an account?{' '}
// //               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
// //                 Create an Account
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import '@dotlottie/player-component';
// // import LoadingIndicator from './LoadingIndicator';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('user');
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();


// //   const handleButtonClick = (path) =>{
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       window.location.href = path;
// //     },1000)
// //   }

// //   // const handleLogin = async (e) => {
// //   //   e.preventDefault(); 

// //   //   try {
// //   //     const response = await fetch('http://localhost:8080/auth/login', {
// //   //       method: 'POST',
// //   //       headers: {
// //   //         'Content-Type': 'application/json',
// //   //       },
// //   //       body: JSON.stringify({ email, password, role }),
// //   //     });

// //   //     const result = await response.text(); 

// //   //     if (response.ok && role === 'user') {
// //   //       navigate('/');  
// //   //     } else if(response.ok && role === 'admin'){
// //   //       navigate('/ServiceLanding')
// //   //     }
// //   //     else{
// //   //       setError(result);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("Error during login:", error);
// //   //     setError("An error occurred during login.");
// //   //   }
// //   // };


// //   const handleLogin = async (e) => {
// //     e.preventDefault();
  
// //     try {
// //       const response = await fetch('http://localhost:8080/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email, password, role }),
// //       });
  
// //       const result = await response.json();
  
// //       if (response.ok) {
// //         // Save user info to localStorage
// //         localStorage.setItem('user', JSON.stringify({ username: result.username, role }));
  
// //         if (role === 'user') {
// //           navigate('/');
// //         } else if (role === 'admin') {
// //           navigate('/ServiceLanding');
// //         }
// //       } else {
// //         setError(result.message);
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //     }
// //   };
  

  
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white p-4">
// //     {loading && <LoadingIndicator/>}
// //       <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
// //         <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
// //           <dotlottie-player
// //             src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
// //             autoplay
// //             loop
// //             style={{ width: '100%', height: '100%' }}
// //           ></dotlottie-player>
// //         </div>
// //         <div className="w-full md:w-1/2 p-4">
// //           <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800 font-serif">Login</h2>
// //           {error && (
// //             <div className="mb-4 text-red-500 text-sm text-center">
// //               {error}
// //             </div>
// //           )}
// //           <form onSubmit={handleLogin}>
// //             <div className="mb-4">
// //               <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="email">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Email"
// //               />
// //             </div>
// //             <div className="mb-6">
// //               <label className="block text-sm font-bold mb-2 font-serif text-indigo-800" htmlFor="password">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 aria-label="Password"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="role">
// //                 Role
// //               </label>
// //               <div className="flex">
// //                 <label className="mr-4">
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="user"
// //                     checked={role === 'user'}
// //                     onChange={() => setRole('user')}
// //                     className="mr-1"
// //                   />
// //                   User
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="role"
// //                     value="admin"
// //                     checked={role === 'admin'}
// //                     onChange={() => setRole('admin')}
// //                     className="mr-1"
// //                   />
// //                   Admin
// //                 </label>
// //               </div>
// //             </div>
// //             <div className="mb-3 text-right">
// //               <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline font-serif">
// //                 Forgot Password?
// //               </a>
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <button
// //               onClick={() => handleButtonClick('/')}
// //                 type="submit"
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full font-serif"
// //               >
// //                 Login
// //               </button>
// //             </div>
// //           </form>
// //           <div className="mt-6 text-center font-serif">
// //             <p className="text-sm">
// //               Don't have an account?{' '}
// //               <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
// //                 Create an Account
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;



import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext'; // Import UserContext
import '@dotlottie/player-component';
import LoadingIndicator from './LoadingIndicator';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext); // Use setUser from UserContext
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const result = await response.text();

      if (response.ok) {
        
        setUser({ email, username: result, role });

        // Redirect based on role
        if (role === 'user') {
          navigate('/');
        } else if (role === 'admin') {
          navigate('/ServiceLanding');
        }
      } else {
        setError(result);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-200 to-white p-4">
      {loading && <LoadingIndicator />}
      <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <dotlottie-player
            src="https://lottie.host/0a8156d9-727d-4e90-a007-416af1b68688/wtaWKXIkAy.json"
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          ></dotlottie-player>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800 font-serif">Login</h2>
          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                aria-label="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 font-serif text-indigo-800" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                aria-label="Password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-indigo-800 font-serif" htmlFor="role">
                Role
              </label>
              <div className="flex">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={role === 'user'}
                    onChange={() => setRole('user')}
                    className="mr-1"
                  />
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={() => setRole('admin')}
                    className="mr-1"
                  />
                  Admin
                </label>
              </div>
            </div>
            <div className="mb-3 text-right">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700 no-underline font-serif">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full font-serif"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 text-center font-serif">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:text-blue-700 no-underline">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
