"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main
      style={{
        paddingBlock: 30,
        minHeight: "88vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <h1 style={{ fontSize: 120 }}>404</h1>
      <h1 style={{ fontSize: 48 }}>Страница не найдена</h1>
      <p style={{ marginBottom: 20 }}>
        Кажется, по этому адресу ничего нет. Проверьте URL или вернитесь на
        главную.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button
          onClick={() => router.push("/")}
          style={{
            background: "#7db200",
            color: "#fff",
            fontSize: 16,
            letterSpacing: 1.15,
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          На главную
        </button>
        <button
          onClick={() => router.back()}
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            borderRadius: 6,
            fontSize: 16,
            letterSpacing: 1.15,
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#333",
          }}
        >
          Назад
        </button>
      </div>
    </main>
  );
}
