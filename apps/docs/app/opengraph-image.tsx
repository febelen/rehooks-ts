import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const sfPro = await fetch(new URL("./fonts/SF.otf", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            fontFamily: "SF Pro",
            color: "#fff",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Rehooks
        </h1>
        <p
          style={{
            marginTop: "-25px",
            fontSize: "40px",
            fontFamily: "SF Pro",
            color: "#a1a1a1",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          By Developers, For Developers.
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}
