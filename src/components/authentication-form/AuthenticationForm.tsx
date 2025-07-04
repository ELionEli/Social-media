import { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthenticationForm.css";

interface AuthenticationFormProps {
  mode: "signin" | "signup";
}

export const AuthenticationForm = ({ mode }: AuthenticationFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Handle authentication logic here
    console.log(`${mode} attempt:`, formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{mode === "signin" ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === "signup" && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {mode === "signup" && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button type="submit" className="auth-button">
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer">
          {mode === "signin" ? (
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          ) : (
            <p>
              Already have an account? <Link to="/signin">Sign in here</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
