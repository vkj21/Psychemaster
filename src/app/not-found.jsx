export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from bg-purple-950 via-black to-purple-950 text-white flex flex-col justify-center items-center px-6 py-16 text-center">
      <h1 className="text-xl sm:text-3xl font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-400 mb-6 max-w-xl">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <a
        href="/"
        className="mt-4 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
