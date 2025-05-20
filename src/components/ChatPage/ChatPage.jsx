import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConversations, getMessages, sendMessage } from '../services/chatAPI'; 
import { toast } from 'react-toastify';
import { Menu } from 'lucide-react';

const ChatPage = () => {
  const { conversationId } = useParams();
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // افتراضيًا مخفي في الموبايل

  const token = localStorage.getItem("userToken");

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await getConversations(token);
        setConversations(data);
      } catch {
        toast.error("خطأ في تحميل المحادثات");
      }
    };
    fetchConversations();
  }, [token]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!conversationId) return;
      setLoading(true);
      try {
        const msgs = await getMessages(conversationId, token);
        setMessages(msgs);
      } catch {
        toast.error("فشل في تحميل الرسائل");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [conversationId, token]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    try {
      await sendMessage(conversationId, newMessage, token);
      setNewMessage('');
      const msgs = await getMessages(conversationId, token);
      setMessages(msgs);
    } catch {
      toast.error("فشل في إرسال الرسالة");
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white relative">

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full bg-gray-900 border-r border-gray-700 p-4 overflow-y-auto transition-transform z-10
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}
      >
        <h2 className="text-purple-400 font-bold mb-4">Conversations</h2>
        {conversations.map((conv) => (
          <Link
            key={conv.id}
            to={`/chatpage/${conv.id}`}
            className="block p-3 mb-2 bg-gray-800 rounded hover:bg-gray-700 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="font-semibold text-purple-300 truncate">
              {conv.lender.first_name} {conv.lender.last_name} - {conv.item.title}
            </div>
            <div className="text-sm text-gray-400 truncate">{conv.lastMessage || "لا توجد رسائل بعد"}</div>
          </Link>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex-1 p-6 flex flex-col ml-0 md:ml-64 relative">
        
        {/* Toggle Sidebar Button (Mobile) */}
        <button
          className="md:hidden absolute top-4 left-4 bg-gray-800 p-2 rounded hover:bg-gray-700 z-20"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="text-white" />
        </button>

        <div className="flex-1 overflow-y-auto bg-gray-800 p-4 rounded mt-10 md:mt-0">
          {loading ? (
            <p>Messages is Loading...</p>
          ) : messages.length === 0 ? (
            <p>No Messages...</p>
          ) : (
            messages.map((msg) => {
              const isLender = msg.sender === 'lender';
              return (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${isLender ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded px-4 py-2 max-w-[70%] ${
                      isLender
                        ? 'bg-blue-400 text-black rounded-br-none'
                        : 'bg-purple-600 text-white rounded-bl-none'
                    }`}
                  >
                    <b>{msg.sender}</b>
                    <p>{msg.message_content}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {conversationId && (
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 rounded text-black"
            />
            <button
              onClick={handleSend}
              className="bg-yellow-400 text-black px-4 rounded hover:bg-yellow-500 transition"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
