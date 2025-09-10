// components/ChatBotButton.tsx
"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react"; // or any icon lib

export default function ChatBotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {/* {open && (
        <div className="mb-4 w-80 h-96 bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setOpen(false)} className="text-gray-500">
              ✖
            </button>
          </div>
          <div className="h-[calc(100%-3rem)] overflow-y-auto">
            <p className="text-sm text-gray-600">Hi! How can I help you?</p>
          </div>
        </div>
      )} */}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#2B2B2B] flex items-center justify-center hover:bg-[#2B2B2B]/75 text-white p-4 rounded-full shadow-xl w-[70px] h-[70px]"
      >
        <svg
          width="44"
          height="42"
          viewBox="0 0 44 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 31C12 33 15 35 18 36C14 40 8 42 4 42C8 38 10 35 10 31Z"
            fill="white"
          />
          <path
            d="M14 33.64C9.18 31.14 6 26.86 6 22C6 14.26 14.06 8 24 8C33.94 8 42 14.26 42 22C42 29.74 33.94 36 24 36C20.3 36 16.86 35.14 14 33.64Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
