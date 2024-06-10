// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
      >
        Go back to Home
      </Link>
    </div>
  );
}
