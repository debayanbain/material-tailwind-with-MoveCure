'use client';

import { useRouter } from 'next/navigation';
import { TbAlertCircleFilled } from "react-icons/tb";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex items-center justify-center mb-4 text-red-500">
          <TbAlertCircleFilled size={48} />
        </div>
        <h1 className="text-2xl font-semibold mb-2">Oops, something went wrong</h1>
        <p className="text-gray-600 mb-6">{error?.message ?? 'An unexpected error occurred.'}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.replace('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Go Home
          </button>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
