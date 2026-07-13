function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 80px",
        backgroundColor: "#111827",
        position: "sticky",
        top: 0,
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Kavya Pabboju
      </h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <a href="#about" style={{ color: "white" }}>
          About
        </a>

        <a href="#skills" style={{ color: "white" }}>
          Skills
        </a>

        <a href="#projects" style={{ color: "white" }}>
          Projects
        </a>

        <a href="#experience" style={{ color: "white" }}>
          Experience
        </a>

        <a href="#contact" style={{ color: "white" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;