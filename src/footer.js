import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Prerana Desai. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <style>{`
        .footer {
          padding: 40px 20px;
          background: linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1c1c1c);
          background-size: 800% 800%;
          animation: gradientShift 15s ease infinite;
          color: #fff;
          text-align: center;
        }

        @keyframes gradientShift {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }

        .footer p {
          margin-bottom: 15px;
          font-size: 16px;
          color: #ccc;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 25px;
        }

        .social-links a {
          color: #00c6ff;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: #0072ff;
          text-shadow: 0 0 10px #00c6ff;
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
