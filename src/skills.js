import React from "react";

function Skills({ darkMode }) {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Firebase",
    "Git",
  ];

  return (
    <section
      id="skills"
      className="skills"
      style={{
        background: darkMode
          ? "linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1c1c1c)"
          : "linear-gradient(135deg, #ffecb3, #fff8e1, #ffe0b2)",
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.5s ease",
      }}
    >
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, i) => (
          <div
            key={i}
            className="skill"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #42a5f5, #478ed1)"
                : "linear-gradient(135deg, #90caf9, #bbdefb)",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      <style>{`
        .skills {
          padding: 80px 20px;
          text-align: center;
        }

        .skills h2 {
          font-size: 36px;
          margin-bottom: 50px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(0,198,255,0.6);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 25px;
          max-width: 900px;
          margin: auto;
        }

        .skill {
          padding: 20px;
          border-radius: 15px;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
          cursor: pointer;
        }

        .skill:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 25px rgba(0,0,0,0.5);
          background: linear-gradient(135deg, #00e676, #00c853) !important;
          color: #fff !important;
        }
      `}</style>
    </section>          
  );
}

export default Skills;
