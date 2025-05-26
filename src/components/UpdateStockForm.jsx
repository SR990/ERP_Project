import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

const UpdateStockForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productId: '',
    category: '',
    qtyPurchased: '',
    unitPrice: '',
    supplier: '',
    image: null,
  });

  const navigate = useNavigate();

  const totalAmount =
    formData.qtyPurchased && formData.unitPrice
      ? Number(formData.qtyPurchased) * Number(formData.unitPrice)
      : 0;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Stock item updated successfully!');
    navigate('/stocks-inventory');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button onClick={() => r(-1)} className="text-blue-600 mb-4 hover:underline">
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Update Stock</h2>
        <p className="text-gray-500 mb-6">Modify the item details in your inventory</p>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-6">
            <label className="block mb-2 font-medium">Upload photo</label>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-gray-50 hover:file:bg-gray-100"
            />
            <p className="text-xs text-gray-400 mt-1">Allowed formats: JPG, JPEG, PNG. Max size: 2MB</p>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              value={formData.productName}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="text"
              name="productId"
              placeholder="Enter ID"
              value={formData.productId}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select category</option>
              <option value="Stationaries">Stationaries</option>
              <option value="Furniture">Furniture</option>
            </select>
            <input
              type="number"
              name="qtyPurchased"
              placeholder="Enter quantity"
              value={formData.qtyPurchased}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="number"
              name="unitPrice"
              placeholder="Enter unit price"
              value={formData.unitPrice}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="text"
              name="supplier"
              placeholder="Enter supplier name"
              value={formData.supplier}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="text"
              name="totalAmount"
              placeholder="Amount"
              value={`₹ ${totalAmount.toLocaleString()}`}
              readOnly
              className="bg-gray-100 text-gray-700 cursor-not-allowed px-4 py-2 rounded-md border border-gray-300"
            />
          </div>

          
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 text-white font-semibold py-2 px-6 rounded-md shadow-md"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const inputClass =
  'px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none w-full';

export default UpdateStockForm;
