import React, { useEffect, useState } from "react";

function About({ darkMode }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <section
      id="about"
      className="about"
      style={{
        background: darkMode
          ? "linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1c1c1c)"
          : "linear-gradient(135deg, #ffecb3, #fff8e1, #ffe0b2)",
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.5s ease",
      }}
    >
      <h2>About Me</h2>
      <div
        className="about-container"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <div className="image-box">
          <img src="/peru.jpeg" alt="Profile" />
        </div>
        <div className="info-box">
          <p>
            I'm a passionate <strong>React & Full Stack Developer</strong> with
            hands-on experience building modern web applications. I enjoy
            creating scalable solutions, writing clean code, and exploring new
            technologies.
          </p>
          <div className="skills-highlights">
            {["React.js", "Node.js", "REST APIs", "Git & GitHub"].map(
              (skill, i) => (
                <span key={i} className="skill">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        .about h2 {
          font-size: 36px;
          margin-bottom: 40px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(0,198,255,0.6);
              text-align: center;
        }

        .about-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          align-items: center;
          max-width: 1000px;
          margin: auto;
        }

        .image-box img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          border: 5px solid #00c6ff;
          box-shadow: 0 0 25px rgba(0,198,255,0.5);
          object-fit: cover;
          transition: 0.4s;
        }
        .image-box img:hover {
          transform: scale(1.05);
          box-shadow: 0 0 40px #00c6ff;
        }

        .info-box {
          flex: 1;
          min-width: 250px;
          text-align: left;
        }
        .info-box p {
          font-size: 16px;
          line-height: 1.8;
        }

        .skills-highlights {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill {
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          color: #fff;
          padding: 6px 15px;
          border-radius: 20px;
          font-weight: bold;
          transition: transform 0.3s;
        }
        .skill:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default About;
