import { useRouteError, Link } from "react-router-dom";

export default function Error() {
    const err = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <h1 className="text-4xl font-bold text-red-500 mb-2">Oops!</h1>
            <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
                {err?.status ? `${err.status} : ${err.statusText}` : err?.message || "Page Not Found"}
            </p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
