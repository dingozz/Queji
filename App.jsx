
import React from "react";

export default function App() {
  const handleDonate = () => {
    window.location.href = "https://www.paypal.com/donate";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Nosotros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <img src="/amigo1.jpg" alt="Amigo 1" className="w-72 h-72 object-cover rounded-2xl shadow-md" />
        <img src="/amigo2.jpg" alt="Amigo 2" className="w-72 h-72 object-cover rounded-2xl shadow-md" />
      </div>
      <button
        onClick={handleDonate}
        className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow"
      >
        Donar
      </button>
    </div>
  );
}
