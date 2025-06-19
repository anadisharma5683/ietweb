// pages/be/part-time.js

export default function PartTimePrograms() {
  return (
    <div style={{ backgroundColor: "#123", color: "#abc", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>B.E. Programs (Part-Time)</h1>
      <p>
        IET is presently offering <strong>Part-Time 4-Year B.E. Programs</strong> in the following five branches:
      </p>
      <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8rem" }}>
        <li>B.E. (Mechanical Engineering)</li>
        <li>B.E. (Computer Engineering)</li>
        <li>B.E. (Electronics & Instrumentation Engineering)</li>
        <li>B.E. (Information Technology)</li>
        <li>B.E. (Electronics & Telecommunication Engineering)</li>
      </ul>
    </div>
  );
}
