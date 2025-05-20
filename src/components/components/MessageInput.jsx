
import React, { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
        placeholder="Type your message..."
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
        Send
      </button>
    </form>
  );
}
