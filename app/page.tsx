export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-xl w-full bg-slate-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          Card Club
        </h1>

        <p className="text-slate-300 mb-8">
          Upload Game Night score sheets.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">
              Score Sheet Files
            </label>

            <input
              type="file"
              multiple
              className="w-full border border-slate-600 rounded p-2"
            />
          </div>

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