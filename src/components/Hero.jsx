import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/kavya.jpg";
const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#2563eb",
  color: "white",
  padding: "12px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
};

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        padding: "60px 10%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1, minWidth: "320px" }}>
          <h3
            style={{
              color: "#38bdf8",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            👋 Hello, I'm
          </h3>

          <h1
            style={{
              color: "white",
              fontSize: "64px",
              marginBottom: "15px",
            }}
          >
            Kavya Pabboju
          </h1>

          <h2
            style={{
              color: "#cbd5e1",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            Data Scientist | AI & Machine Learning Engineer
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
              fontSize: "18px",
              marginBottom: "35px",
              maxWidth: "650px",
            }}
          >
            Data Scientist with nearly 3 years of professional experience and
            hands-on expertise in Machine Learning, Deep Learning, NLP,
            Generative AI, FastAPI, React, SQL, and Python. Passionate about
            building intelligent AI systems using LLMs, RAG, LangChain,
            LangGraph, MCP, and Agentic AI to solve real-world business
            challenges.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/kavyasripobboju-hue"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              <FaGithub /> GitHub
            </a>

            <a
  href="/Kavya_Pabboju_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={buttonStyle}
>
  <FaDownload /> Resume
</a>

            <a
              href="/Kavya_Pabboju_Resume.pdf"
              download
              style={buttonStyle}
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          <img
            src={profile}
            alt="Kavya Pabboju"
            style={{
              width: "340px",
              height: "340px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "6px solid #2563eb",
              boxShadow: "0 0 35px rgba(37,99,235,0.5)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;