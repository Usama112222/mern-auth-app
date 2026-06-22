import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
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
    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "8px",
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
      margin: 0,
      fontSize: "14px",
      color: "#6c6c8a",
      letterSpacing: "0.3px",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "24px",
    },
    btnPrimary: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "14px",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "15px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
    btnSecondary: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "14px",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "15px",
      background: "#f8f9ff",
      color: "#4a4a6a",
      border: "2px solid #e8e9f0",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "24px 0",
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
    socialButtons: {
      display: "flex",
      gap: "12px",
      marginBottom: "24px",
    },
    socialBtn: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "12px",
      borderRadius: "12px",
      border: "2px solid #e8e9f0",
      background: "white",
      fontWeight: 500,
      fontSize: "14px",
      color: "#4a4a6a",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    footerText: {
      textAlign: "center",
      fontSize: "12px",
      color: "#8c8caa",
      margin: 0,
    },
    footerLink: {
      color: "#667eea",
      textDecoration: "none",
      fontWeight: 500,
    },
    icon: {
      width: "20px",
      height: "20px",
      flexShrink: 0,
    },
    logoIcon: {
      width: "40px",
      height: "40px",
    },
    // Media query styles (will be applied via inline)
    mobileCard: {
      padding: "30px 20px",
    },
    mobileTitle: {
      fontSize: "24px",
    },
    mobileSocial: {
      flexDirection: "column",
    },
  };

  // SVG Icons
  const LogoSvg = () => (
    <svg style={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ArrowIcon = () => (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  const UserIcon = () => (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/>
      <line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
  );

  const GoogleIcon = () => (
    <svg style={styles.icon} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  // Hover state management
  const [hoverStates, setHoverStates] = React.useState({
    primary: false,
    secondary: false,
    google: false,
    facebook: false,
  });

  const handleMouseEnter = (key) => {
    setHoverStates(prev => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHoverStates(prev => ({ ...prev, [key]: false }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logoContainer}>
            <LogoSvg />
            <h1 style={styles.title}>Welcome Back</h1>
          </div>
          <p style={styles.subtitle}>Sign in to continue to your dashboard</p>
        </div>

        <div style={styles.buttonGroup}>
          <Link
            to="/login"
            style={{
              ...styles.btnPrimary,
              transform: hoverStates.primary ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hoverStates.primary 
                ? '0 8px 25px rgba(102, 126, 234, 0.5)' 
                : '0 4px 15px rgba(102, 126, 234, 0.4)',
            }}
            onMouseEnter={() => handleMouseEnter('primary')}
            onMouseLeave={() => handleMouseLeave('primary')}
          >
            <span>Sign In</span>
            <ArrowIcon />
          </Link>

          <Link
            to="/signup"
            style={{
              ...styles.btnSecondary,
              transform: hoverStates.secondary ? 'translateY(-2px)' : 'translateY(0)',
              background: hoverStates.secondary ? '#f0f1ff' : '#f8f9ff',
              borderColor: hoverStates.secondary ? '#667eea' : '#e8e9f0',
              boxShadow: hoverStates.secondary 
                ? '0 4px 15px rgba(0, 0, 0, 0.05)' 
                : 'none',
            }}
            onMouseEnter={() => handleMouseEnter('secondary')}
            onMouseLeave={() => handleMouseLeave('secondary')}
          >
            <span>Create Account</span>
            <UserIcon />
          </Link>
        </div>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>or continue with</span>
          <div style={styles.dividerLine}></div>
        </div>

        <div style={styles.socialButtons}>
          <button
            style={{
              ...styles.socialBtn,
              transform: hoverStates.google ? 'translateY(-2px)' : 'translateY(0)',
              background: hoverStates.google ? '#f8f9ff' : 'white',
              borderColor: hoverStates.google ? '#667eea' : '#e8e9f0',
              boxShadow: hoverStates.google 
                ? '0 4px 15px rgba(0, 0, 0, 0.05)' 
                : 'none',
            }}
            onMouseEnter={() => handleMouseEnter('google')}
            onMouseLeave={() => handleMouseLeave('google')}
          >
            <GoogleIcon />
            Google
          </button>

          <button
            style={{
              ...styles.socialBtn,
              transform: hoverStates.facebook ? 'translateY(-2px)' : 'translateY(0)',
              background: hoverStates.facebook ? '#f8f9ff' : 'white',
              borderColor: hoverStates.facebook ? '#667eea' : '#e8e9f0',
              boxShadow: hoverStates.facebook 
                ? '0 4px 15px rgba(0, 0, 0, 0.05)' 
                : 'none',
            }}
            onMouseEnter={() => handleMouseEnter('facebook')}
            onMouseLeave={() => handleMouseLeave('facebook')}
          >
            <FacebookIcon />
            Facebook
          </button>
        </div>

        <p style={styles.footerText}>
          By continuing, you agree to our <a href="#" style={styles.footerLink}>Terms</a> and <a href="#" style={styles.footerLink}>Privacy Policy</a>
        </p>
      </div>

      {/* Add keyframe animation using style tag */}
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
            .home-card {
              padding: 30px 20px !important;
            }
            .home-title {
              font-size: 24px !important;
            }
            .social-buttons {
              flex-direction: column !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default HomePage;