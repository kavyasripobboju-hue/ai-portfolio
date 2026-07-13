import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0f172a",
        color: "white",
        padding: "80px 10%",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#38bdf8",
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Let's Connect
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto 50px",
          lineHeight: "1.8",
        }}
      >
        I'm actively seeking opportunities as a Data Scientist or AI Engineer.
        Feel free to reach out for collaborations, interviews, or discussions
        about AI, Machine Learning, and Generative AI.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <a
          href="mailto:kavyapabboju@gmail.com"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <FaEnvelope size={30} />
          <br />
          Email
        </a>

        <a
          href="https://github.com/kavyasripobboju-hue"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <FaGithub size={30} />
          <br />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kavya-pabboju-643004245/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <FaLinkedin size={30} />
          <br />
          LinkedIn
        </a>

        <div>
          <FaMapMarkerAlt size={30} />
          <br />
          Hyderabad, India
        </div>
      </div>
    </section>
  );
}

export default Contact;