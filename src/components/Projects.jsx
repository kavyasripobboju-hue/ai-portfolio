import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "🏥 AI Medical Report Assistant",
    featured: true,
    description:
      "An AI-powered web application that allows users to upload medical reports in PDF format and receive simplified AI-generated explanations using Google Gemini. Built with authentication, PDF processing, database integration, and FastAPI backend.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "SQLite",
      "SQLAlchemy",
      "JWT",
      "Gemini AI",
      "PyMuPDF",
    ],
    github: "https://github.com/kavyasripobboju-hue/ai-medical-report-assistant",
    demo: "#",
  },

  {
    title: "📈 Walmart Sales Forecasting",
    description:
      "Forecasted Walmart weekly sales using Time Series Analysis. Implemented ARIMA, SARIMA, SARIMAX, Prophet, Box-Cox Transformation, and feature engineering to improve forecasting accuracy.",
    tech: [
      "Python",
      "Pandas",
      "ARIMA",
      "SARIMA",
      "SARIMAX",
      "Prophet",
      "Matplotlib",
    ],
    github: "#",
  },

  {
    title: "😊 Sentiment Analysis",
    description:
      "Built a sentiment analysis model using VADER, Logistic Regression, SVM, and DistilBERT to classify movie reviews into positive and negative sentiments.",
    tech: [
      "Python",
      "NLP",
      "VADER",
      "SVM",
      "Logistic Regression",
      "DistilBERT",
      "Streamlit",
    ],
    github: "#",
  },

  {
    title: "🎬 Netflix Recommendation System",
    description:
      "Developed a recommendation engine using collaborative filtering techniques to suggest personalized movies based on user preferences.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Recommendation System",
    ],
    github: "#",
  },

  {
    title: "📊 Customer Churn Prediction",
    description:
      "Predicted customer churn using Machine Learning models including Decision Tree, Random Forest, and Logistic Regression.",
    tech: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Decision Tree",
      "Logistic Regression",
    ],
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 10%",
        background: "#111827",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#38bdf8",
          marginBottom: "60px",
        }}
      >
        Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "18px",
            marginBottom: "35px",
          }}
        >
          <h2 style={{ color: "#38bdf8" }}>{project.title}</h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            {project.tech.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#2563eb",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "20px",
            }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaGithub /> GitHub
            </a>

            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;