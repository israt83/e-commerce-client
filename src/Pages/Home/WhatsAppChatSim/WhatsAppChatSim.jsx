import React, { useState } from "react";

const replies = {
  hello: "Hi! How can we help you with your skin today?",
  oily: "For oily skin, we recommend oil-free moisturizer and clay masks.",
  dry: "For dry skin, we suggest hydrating creams and serums.",
  sensitive: "For sensitive skin, use gentle cleanser and soothing gels.",
  default: "Thanks for reaching out! We will get back to you shortly.",
};

const WhatsAppChatSim = () => {
  const [messages, setMessages] = useState([
    { from: "system", text: "Hello! Send us a message for skincare advice." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: "user", text: input }]);

    // generate reply
    const msg = input.toLowerCase();
    const reply = replies[msg] || replies["default"];

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "system", text: reply }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Chat with Our Skincare Expert</h2>
      <div className="h-64 overflow-y-auto border p-2 rounded mb-4 flex flex-col space-y-2 bg-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.from === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChatSim;
