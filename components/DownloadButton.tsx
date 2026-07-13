"use client";

import { useEffect, useState } from "react";

type Props = {
  image: string;
};

export default function DownloadButton({ image }: Props) {
  const [open, setOpen] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [status, setStatus] = useState("Preparing...");

  useEffect(() => {
    if (!open) return;

    if (seconds === 5) {
      // Здесь потом будет настоящая реклама Adsterra
      setTimeout(() => {
        window.open("https://example.com", "_blank");
      }, 700);
    }

    if (seconds <= 0) {
      download();
      return;
    }

    const timer = setTimeout(() => {
      if (seconds === 3) {
        setStatus("Advertisement...");
      }

      if (seconds === 1) {
        setStatus("Downloading...");
      }

      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [open, seconds]);

  async function download() {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = image.split("/").pop() || "wallpaper.jpg";

      document.body.appendChild(a);
      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);
    } finally {
      setTimeout(() => {
        setOpen(false);
        setSeconds(5);
        setStatus("Preparing...");
      }, 500);
    }
  }

  function startDownload() {
    setOpen(true);
    setSeconds(5);
    setStatus("Preparing...");
  }

  return (
    <>
      <button
        className="download-btn"
        onClick={startDownload}
      >
        ⬇ Download
      </button>

      {open && (
        <div className="ad-modal">
          <div className="ad-box">
            <h2>Preparing your wallpaper</h2>

            <p>{status}</p>

            <div className="timer">
              {seconds}
            </div>
          </div>
        </div>
      )}
    </>
  );
}