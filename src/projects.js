import React from "react";

function Projects({ darkMode }) {
  const projectList = [
    { name: "Portfolio Website", tech: "React, CSS", link: "#" },
    { name: "E-commerce App", tech: "React, Node.js, MongoDB", link: "#" },
    { name: "Blog Platform", tech: "React, Firebase", link: "#" },
    { name: "Chat App", tech: "React, Socket.io", link: "#" },
  ];

  return (
    <section
      id="projects"
      className="projects"
      style={{
        background: darkMode
          ? "linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1c1c1c)"
          : "linear-gradient(135deg, #ffecb3, #fff8e1, #ffe0b2)",
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.5s ease",
      }}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, i) => (
          <div
            key={i}
            className="project-card"
            style={{
              background: darkMode
                ? "rgba(0,0,0,0.4)"
                : "rgba(255,255,255,0.8)",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            <h3 style={{ color: darkMode ? "#00c6ff" : "#1565c0" }}>
              {project.name}
            </h3>
            <p style={{ color: darkMode ? "#ddd" : "#444" }}>
              {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: darkMode ? "#0077b6" : "#42a5f5",
                color: "#fff",
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .projects {
          padding: 80px 20px;
          text-align: center;
        }

        .projects h2 {
          font-size: 36px;
          margin-bottom: 50px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(0,198,255,0.6);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: auto;
        }

        .project-card {
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 25px rgba(0,198,255,0.6);
        }

        .project-card .btn {
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .project-card .btn:hover {
          background: #00c6ff !important;
          box-shadow: 0 0 15px #00c6ff;
        }
      `}</style>
    </section>
  );
}

export default Projects;
