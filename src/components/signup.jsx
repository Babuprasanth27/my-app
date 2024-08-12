import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from './UserContext'; // Import the custom hook

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // Get the setUser function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
        }),
      });

      if (response.ok) {
        // Update the context with user data
        setUser({ email, username });
        // Navigate based on role
        if (role === 'user') {
          navigate("/");
        } else if (role === 'admin') {
          navigate("/ServiceLanding");
        }
      } else {
        const errorText = await response.text();
        setError(errorText);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-t from-blue-200 to-white font-serif">
      <div className="m-3 max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 text-indigo-800">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-indigo-800">
              <label className="block text-sm font-bold mb-2 text-black" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-800 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="mb-3">
              <Link to="/login" className="no-underline text-blue-500 hover:text-blue-700">
                Already have an account?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <dotlottie-player
            src="https://lottie.host/efcb2620-ef4e-4743-bfd5-3ac367cc999f/QwJVN5InUa.json"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
