// import axios from 'axios';

// // قاعدة الرابط الأساسية للـ API بدون /conversations في النهاية
// const BASE_URL = 'https://lavender-eel-222276.hostingersite.com/api';

// export const getConversations = async (token) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/conversations`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching conversations:', error);
//     return [];
//   }
// };

// export const getConversationById = async (id, token) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/conversations/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching conversation:', error);
//     return null;
//   }
// };

// export const getMessages = async (conversationId, token) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/conversations/${conversationId}/messages`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     return [];
//   }
// };

// export const sendMessage = async (conversationId, message, token) => {
//   try {
//     await axios.post(`${BASE_URL}/conversations/${conversationId}/messages`, {
//       message_content: message,
//     }, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   } catch (error) {
//     console.error('Error sending message:', error);
//   }
// };

// // دالة لإنشاء محادثة جديدة
// export const createConversation = async (itemId, customerId, lenderId, token) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/conversations/create`, {
//       item_id: itemId,
//       customer_id: customerId,
//       lender_id: lenderId,
//     }, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error creating conversation:', error);
//     throw error;
//   }
// };

// // دالة للحصول على محادثة معينة أو إنشاء جديدة إذا لم توجد
// export const getOrCreateConversation = async (itemId, customerId, lenderId, token) => {
//   try {
//     // بما أنه لا توجد API مباشرة للبحث عن محادثة حسب itemId و customerId،
//     // ننفذ طلب الحصول على كل المحادثات ونبحث داخله (افتراضاً)
//     const conversations = await getConversations(token);
//     const existingConv = conversations.find(conv => 
//       conv.item.id === itemId &&
//       conv.customer.id === customerId &&
//       conv.lender.id === lenderId
//     );
//     if (existingConv) {
//       return existingConv;
//     } else {
//       return await createConversation(itemId, customerId, lenderId, token);
//     }
//   } catch (error) {
//     console.error('Error in getOrCreateConversation:', error);
//     throw error;
//   }
// };
import axios from 'axios';

// قاعدة الرابط الأساسية للـ API بدون /conversations في النهاية
const BASE_URL = 'https://lavender-eel-222276.hostingersite.com/api';
 const token = localStorage.getItem("userToken");
export const getConversations = async () => {
 

  try {
    const response = await axios.get(`${BASE_URL}/conversations`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching conversations:', error);
    return [];
  }
};

export const getConversationById = async (id, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/conversations/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching conversation:', error);
    return null;
  }
};

export const getMessages = async (conversationId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/conversations/${conversationId}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Messages from API:", response.data);
    // لو الرسائل داخل مفتاح messages يرجى التأكد
    return response.data.messages || response.data || [];
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
};

export const sendMessage = async (conversationId, message, token) => {
  try {
    await axios.post(`${BASE_URL}/conversations/${conversationId}/messages`, {
      message_content: message,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const createConversation = async (itemId, customerId, lenderId, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/conversations/create`, {
      item_id: itemId,
      customer_id: customerId,
      lender_id: lenderId,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating conversation:', error);
    throw error;
  }
};

export const getOrCreateConversation = async (itemId, customerId, lenderId, token) => {
  try {
    const conversations = await getConversations(token);
    const existingConv = conversations.find(conv => 
      conv.item.id === itemId &&
      conv.customer.id === customerId &&
      conv.lender.id === lenderId
    );
    if (existingConv) {
      return existingConv;
    } else {
      return await createConversation(itemId, customerId, lenderId, token);
    }
  } catch (error) {
    console.error('Error in getOrCreateConversation:', error);
    throw error;
  }
};
