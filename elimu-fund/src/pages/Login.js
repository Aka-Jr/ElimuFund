import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState(""); // Changed setName to setEmail for clarity
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    request
      .post('http://localhost:5000/login')
      .send({ email, password })
      .then(response => {
        if (response.body.error === false) {
          setMessage('Login successful');
          // Redirect to the dashboard route using the Navigate function
          return <Navigate to="/faqs" />;
        } else {
          setMessage('Invalid credentials');
        }
      })
      .catch(error => {
        console.error(error);
        setMessage('An error occurred during login');
      });
  }

  return (
    <div>
      <label>Enter your name:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Changed setName to setEmail here
        />
      </label>
      <label>Enter your password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button> {/* Changed input type to button */}
      <p>{message}</p>
    </div>
  )
}

export default Login;
