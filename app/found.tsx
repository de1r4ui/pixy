import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0b0b0b",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: 90 }}>404</h1>

      <p
        style={{
          color: "#999",
          marginTop: 15,
          marginBottom: 40,
          fontSize: 20,
        }}
      >
        This page does not exist.
      </p>

      <Link
        href="/"
        style={{
          padding: "15px 35px",
          background: "white",
          color: "black",
          borderRadius: 12,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}