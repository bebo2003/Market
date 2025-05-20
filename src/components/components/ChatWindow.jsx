import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMessages, sendMessage } from '../services/chatAPI';

export default function ChatWindow({ conversation }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const [loading, setLoading] = useState(false);

  
  const token = localStorage.getItem('userToken');
  const type = localStorage.getItem('userType');
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      const data = await getMessages(conversation.id, token);
      setMessages(data || []);
      setLoading(false);
    };
    fetchMessages();
  }, [conversation]);

  const handleSend = async () => {
    if (!newMsg.trim()) return;
    await sendMessage(conversation.id, newMsg, token);
    setNewMsg('');
    const updated = await getMessages(conversation.id, token);
    setMessages(updated || []);
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto bg-gray-800 p-4 rounded space-y-3">
        {loading ? (
          <p className="text-gray-400">جاري تحميل الرسائل...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-400">لا توجد رسائل بعد.</p>
        ) : (
          messages.map((msg) => {
            const isLender = type === "lender";
console.log(isLender);

            return (
              <div
                key={msg.id}
                className={`flex ${isLender ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[70%] shadow-md ${
                    isLender
                      ? 'bg-blue-500 text-white rounded-br-none self-end'
                      : 'bg-purple-600 text-white rounded-bl-none self-start'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1">
                    {msg.sender === 'lender'
                      ? `${conversation.lender?.first_name} ${conversation.lender?.last_name}`
                      : `${conversation.customer?.first_name} ${conversation.customer?.last_name}`}
                  </div>
                  <p>{msg.message_content}</p>
                  <div className="text-xs text-gray-200 mt-1 text-right">
                    {new Date(msg.created_at).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Input Section */}
      <div className="p-4 border-t flex">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="اكتب رسالة..."
          className="flex-1 border rounded-lg p-2 mr-2 text-black"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          إرسال
        </button>
      </div>
    </div>
  );
}

ChatWindow.propTypes = {
  conversation: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    customer: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    lender: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
};
