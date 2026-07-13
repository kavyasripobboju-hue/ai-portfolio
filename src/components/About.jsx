function About() {
  return (
    <section
      id="about"
      style={{
        background: "#111827",
        color: "white",
        padding: "80px 10%",
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
        About Me
      </h1>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "18px",
          lineHeight: "2",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#d1d5db",
          }}
        >
          I'm <strong>Kavya Pabboju</strong>, a passionate Data Scientist with
          nearly three years of professional experience and a strong interest
          in Artificial Intelligence and Generative AI.

          <br /><br />

          My expertise includes Python, SQL, Machine Learning, Deep Learning,
          NLP, FastAPI, React, and Generative AI technologies. I enjoy building
          intelligent AI applications that solve real-world business problems.

          <br /><br />

          Recently, I developed an AI-powered Medical Report Assistant using
          FastAPI, React, SQLite, JWT Authentication, and Google Gemini AI.
          This project strengthened my skills in backend development, API
          design, authentication, database integration, and AI application
          development.

          <br /><br />

          I'm currently seeking opportunities as a Data Scientist or AI
          Engineer where I can contribute, learn, and build impactful AI
          solutions.
        </p>
      </div>
    </section>
  );
}

export default About;