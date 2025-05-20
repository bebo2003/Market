import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import toast from "react-hot-toast";
import loadingImage from "../../../assets/images/Bean Eater@1x-1.0s-200px-200px.gif";

// Modal component for confirmation
const Modal = ({ message, onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-4">{message}</h3>
      <div className="flex gap-4 justify-end">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);

const LenderItems = () => {
  const { cartItems, loading, error, setCartItems } = useContext(CartContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItems, setEditedItems] = useState({});
  const [showModal, setShowModal] = useState(false);  // State to control modal visibility
  const [itemToDelete, setItemToDelete] = useState(null);  // Store the item to delete

  const handleUpdate = async (id, updatedData) => {
    setIsUpdating(true);
    try {
      const bodyData = {};
      if (updatedData.price) bodyData.price = updatedData.price;
      if (updatedData.description) bodyData.description = updatedData.description;
      if (updatedData.title) bodyData.title = updatedData.title;

      const response = await fetch(
        `https://lavender-eel-222276.hostingersite.com/api/items/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
          body: JSON.stringify(bodyData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to update item: ${errorText}`);
      }

      const updatedItem = await response.json();
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? updatedItem : item))
      );
      toast.success("Item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error(`Update failed: ${error.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://lavender-eel-222276.hostingersite.com/api/items/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete item: ${errorText}`);
      }

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
      toast.success("Item deleted successfully");
      setShowModal(false); // Close the modal after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error(`Delete failed: ${error.message}`);
      setShowModal(false); // Close the modal if deletion fails
    }
  };

  const handleEditClick = (item) => {
    setEditingItemId(item.id);
    setEditedItems({
      ...editedItems,
      [item.id]: {
        price: item.price,
        description: item.description,
        title: item.title,
      },
    });
  };

  const handleInputChange = (e, itemId, field) => {
    const value = e.target.value;
    setEditedItems({
      ...editedItems,
      [itemId]: {
        ...editedItems[itemId],
        [field]: value,
      },
    });
  };

  const openDeleteModal = (id) => {
    setItemToDelete(id);
    setShowModal(true);  // Open the modal when attempting to delete an item
  };

  const closeModal = () => {
    setShowModal(false);  // Close the modal if user cancels
  };

  if (loading) return <div>Loading items...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        Lender Items
      </h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 md:px-6 py-3">Product</th>
              <th className="px-4 md:px-6 py-3">Description</th>
              <th className="px-4 md:px-6 py-3">Price</th>
              <th className="px-4 md:px-6 py-3">Status</th>
              <th className="px-4 md:px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const isEditing = item.id === editingItemId;
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="flex items-center gap-4 px-4 py-3">
                    <img
                      src={item.images?.[0]?.url || loadingImage}
                      className="w-16 h-16 object-cover rounded-md"
                      alt={item.title}
                    />
                    <span className="text-sm font-medium">{item.title}</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {isEditing ? (
                      <input
                        type="text"
                        className="border p-1 rounded"
                        value={editedItems[item.id]?.description || item.description}
                        onChange={(e) => handleInputChange(e, item.id, "description")}
                      />
                    ) : (
                      item.description
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">
                    {isEditing ? (
                      <input
                        type="number"
                        className="border p-1 rounded"
                        value={editedItems[item.id]?.price || item.price}
                        onChange={(e) => handleInputChange(e, item.id, "price")}
                      />
                    ) : (
                      `${item.price} EGP`
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">{item.item_status}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-3">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => {
                              handleUpdate(item.id, {
                                title: item.title,
                                price: editedItems[item.id]?.price,
                                description: editedItems[item.id]?.description,
                              });
                            }}
                            disabled={isUpdating}
                            className={`px-3 py-1 rounded-md text-sm font-medium transition duration-200 ${isUpdating
                              ? "bg-blue-300 cursor-not-allowed text-white"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`}
                          >
                            {isUpdating ? "Loading..." : "Save"}
                          </button>
                          <button
                            onClick={() => {
                              setEditingItemId(null);
                              setEditedItems({});
                            }}
                            className="px-3 py-1 rounded-md text-sm font-medium bg-gray-400 hover:bg-gray-500 text-white"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditClick(item)}
                            className="px-3 py-1 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => openDeleteModal(item.id)}
                            disabled={isUpdating}
                            className="px-3 py-1 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white"
                          >
                            {isUpdating ? "Loading..." : "Delete"}
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Show modal if it is triggered */}
      {showModal && (
        <Modal
          message="Are you sure you want to delete this item?"
          onConfirm={() => handleDelete(itemToDelete)}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default LenderItems;
