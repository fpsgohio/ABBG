"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    console.log(result);

    setSubmitted(true);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    setFiles(Array.from(e.target.files));
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Submitted
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-slate-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          Card Club
        </h1>

        <p className="text-slate-300 mb-8">
          Upload Game Night score sheets.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">
              Score Sheet Files
            </label>

            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full border border-slate-600 rounded p-2"
            />
          </div>

          {files.length > 0 && (
            <div className="bg-slate-700 rounded p-4">
              <p className="font-semibold mb-2">
                {files.length} file(s) selected
              </p>

              <ul className="text-sm text-slate-300">
                {files.map((file) => (
                  <li key={file.name}>
                    • {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}