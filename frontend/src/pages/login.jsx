import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
    setError(""); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = loginInfo;

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // Store token if needed
        // localStorage.setItem('token', result.token);
        navigate("/home");
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setError("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    card: {
      width: "420px",
      maxWidth: "100%",
      padding: "40px",
      borderRadius: "20px",
      background: "white",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      animation: "slideUp 0.6s ease-out",
    },
    header: {
      textAlign: "center",
      marginBottom: "32px",
    },
    title: {
      margin: 0,
      fontSize: "28px",
      fontWeight: 700,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      margin: "8px 0 0 0",
      fontSize: "14px",
      color: "#6c6c8a",
      letterSpacing: "0.3px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    label: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#4a4a6a",
    },
    inputWrapper: {
      position: "relative",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      paddingRight: "45px",
      borderRadius: "12px",
      border: "2px solid #e8e9f0",
      fontSize: "14px",
      transition: "all 0.3s ease",
      backgroundColor: "#f8f9ff",
      outline: "none",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#667eea",
      backgroundColor: "white",
      boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.1)",
    },
    inputError: {
      borderColor: "#e74c3c",
      backgroundColor: "#fff5f5",
    },
    togglePassword: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "4px",
      color: "#8c8caa",
    },
    errorMessage: {
      color: "#e74c3c",
      fontSize: "13px",
      marginTop: "4px",
    },
    button: {
      width: "100%",
      padding: "14px",
      borderRadius: "12px",
      border: "none",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
      marginTop: "8px",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.5)",
    },
    buttonDisabled: {
      opacity: 0.7,
      cursor: "not-allowed",
      transform: "none",
    },
    footer: {
      textAlign: "center",
      marginTop: "24px",
      fontSize: "14px",
      color: "#6c6c8a",
    },
    link: {
      color: "#667eea",
      cursor: "pointer",
      fontWeight: 600,
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    linkHover: {
      textDecoration: "underline",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "24px 0 16px 0",
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      background: "#e8e9f0",
    },
    dividerText: {
      padding: "0 16px",
      fontSize: "12px",
      color: "#8c8caa",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    backButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      color: "#6c6c8a",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
      marginBottom: "16px",
    },
  };

  // Hover states
  const [hoverStates, setHoverStates] = useState({
    button: false,
    link: false,
    back: false,
  });

  const handleMouseEnter = (key) => {
    setHoverStates(prev => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHoverStates(prev => ({ ...prev, [key]: false }));
  };

  // Password toggle icon
  const EyeIcon = ({ closed }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {closed ? (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </>
      ) : (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </>
      )}
    </svg>
  );

  const ArrowLeftIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  );

  // Input focus state
  const [focusStates, setFocusStates] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (field) => {
    setFocusStates(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusStates(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Link 
          to="/" 
          style={{
            ...styles.backButton,
            color: hoverStates.back ? "#667eea" : "#6c6c8a",
          }}
          onMouseEnter={() => handleMouseEnter('back')}
          onMouseLeave={() => handleMouseLeave('back')}
        >
          <ArrowLeftIcon />
          Back to Home
        </Link>

        <div style={styles.header}>
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Sign in to your account</p>
        </div>

        <form style={styles.form} onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder="you@example.com"
                style={{
                  ...styles.input,
                  ...(focusStates.email ? styles.inputFocus : {}),
                  ...(error && !loginInfo.email ? styles.inputError : {}),
                }}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                placeholder="Enter your password"
                style={{
                  ...styles.input,
                  ...(focusStates.password ? styles.inputFocus : {}),
                  ...(error && !loginInfo.password ? styles.inputError : {}),
                }}
              />
              <button
                type="button"
                style={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon closed={!showPassword} />
              </button>
            </div>
          </div>

          {error && (
            <div style={styles.errorMessage}>{error}</div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.button,
              ...(hoverStates.button && !isLoading ? styles.buttonHover : {}),
              ...(isLoading ? styles.buttonDisabled : {}),
            }}
            onMouseEnter={() => handleMouseEnter('button')}
            onMouseLeave={() => handleMouseLeave('button')}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>or</span>
          <div style={styles.dividerLine}></div>
        </div>

        <div style={styles.footer}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              ...styles.link,
              textDecoration: hoverStates.link ? "underline" : "none",
            }}
            onMouseEnter={() => handleMouseEnter('link')}
            onMouseLeave={() => handleMouseLeave('link')}
          >
            Create Account
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 480px) {
            .login-card {
              padding: 30px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;