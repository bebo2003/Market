import React, { useEffect, useState } from 'react';
import { getConversations } from './services/chatAPI'; // تأكد من مسار الملف

export default function ChatList() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConversations() {
      try {
        const data = await getConversations();
        setConversations(data);
      } catch (error) {
        console.error('Failed to fetch conversations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchConversations();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Conversations</h2>

      {loading ? (
        <p>Loading conversations...</p>
      ) : conversations.length === 0 ? (
        <p>No conversations found.</p>
      ) : (
        conversations.map((conv) => {
          // جلب آخر رسالة
          const lastMessage = conv.messages.length
            ? conv.messages[conv.messages.length - 1].message_content
            : 'No messages yet';

          return (
            <div
              key={conv.id}
              className="mb-4 p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition"
            >
              <h3 className="text-xl font-semibold">{conv.item.title}</h3>
              <p className="text-sm text-gray-300">
                Lender: {conv.lender.first_name} {conv.lender.last_name}
              </p>
              <p className="mt-2 text-gray-200 italic truncate">{lastMessage}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
