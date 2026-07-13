function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Machine Learning",
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      title: "Generative AI",
      skills: [
        "LLMs",
        "Prompt Engineering",
        "RAG",
        "LangChain",
        "LangGraph",
        "MCP",
        "Agentic AI",
        "Google Gemini",
      ],
    },
    {
      title: "Backend",
      skills: [
        "FastAPI",
        "REST APIs",
        "JWT Authentication",
        "SQLite",
        "SQLAlchemy",
      ],
    },
    {
      title: "Frontend",
      skills: ["React", "Axios", "Responsive Design"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Power BI",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        background: "#0f172a",
        padding: "80px 10%",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#38bdf8",
          marginBottom: "50px",
          fontSize: "42px",
        }}
      >
        Technical Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2
              style={{
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              {category.title}
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "#2563eb",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;