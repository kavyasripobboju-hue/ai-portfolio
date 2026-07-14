function Certifications() {
  const certifications = [
    {
      title: "Executive Post Graduate Certification in Data Science & AI",
      issuer: "IIT Roorkee & Intellipaat",
      description:
        "Completed comprehensive training in Python, SQL, Machine Learning, Deep Learning, NLP, Computer Vision, Power BI, and Generative AI.",
    },
    {
      title: "AI Medical Report Assistant",
      issuer: "Personal AI Project",
      description:
        "Designed and developed a full-stack AI application using FastAPI, React, SQLite, JWT Authentication and Google Gemini AI.",
    },
    {
      title: "Continuous Learning",
      issuer: "Self Learning",
      description:
        "Currently expanding expertise in LLMs, RAG, LangChain, LangGraph, MCP, Agentic AI and modern AI application development.",
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "80px 10%",
        background: "#111827",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Certifications & Achievements
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {certifications.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "18px",
            }}
          >
            <h2 style={{ color: "#38bdf8" }}>
              {item.title}
            </h2>

            <h4
              style={{
                color: "#94a3b8",
                marginBottom: "20px",
              }}
            >
              {item.issuer}
            </h4>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.8",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;