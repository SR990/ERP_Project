import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stockData = [
  { sn: '01', img: '📎', name: 'Pen', id: '45565787', cat: 'Stationaries', qty: '50pcs', price: '₦100.00', total: '₦5,000.00', stock: '40pcs', supplier: 'Big Ben’s Store', status: 'In stock' },
  { sn: '02', img: '📄', name: 'A4 Paper', id: '69956787', cat: 'Stationaries', qty: '20pcs', price: '₦3,000.00', total: '₦60,000.00', stock: '0pcs', supplier: 'Big Ben’s Store', status: 'Out of stock' },
  { sn: '03', img: '🖊️', name: 'Marker', id: '32214567', cat: 'Stationaries', qty: '30pcs', price: '₦150.00', total: '₦4,500.00', stock: '28pcs', supplier: 'Stationery World', status: 'In stock' },
  { sn: '04', img: '📏', name: 'Ruler', id: '11256789', cat: 'Stationaries', qty: '40pcs', price: '₦50.00', total: '₦2,000.00', stock: '35pcs', supplier: 'Office Mart', status: 'In stock' },
  { sn: '05', img: '📐', name: 'Compass', id: '99881234', cat: 'Stationaries', qty: '25pcs', price: '₦300.00', total: '₦7,500.00', stock: '20pcs', supplier: 'Office Mart', status: 'In stock' },
  { sn: '06', img: '📘', name: 'Notebook', id: '56787765', cat: 'Books', qty: '60pcs', price: '₦400.00', total: '₦24,000.00', stock: '55pcs', supplier: 'NoteHouse', status: 'In stock' },
  { sn: '07', img: '📕', name: 'Ledger Book', id: '23456543', cat: 'Books', qty: '35pcs', price: '₦1,000.00', total: '₦35,000.00', stock: '10pcs', supplier: 'NoteHouse', status: 'Low stock' },
  { sn: '08', img: '🧾', name: 'Invoice Pad', id: '88888888', cat: 'Stationaries', qty: '45pcs', price: '₦250.00', total: '₦11,250.00', stock: '15pcs', supplier: 'Office Supplies Co.', status: 'Low stock' },
  { sn: '09', img: '✂️', name: 'Scissors', id: '22234455', cat: 'Tools', qty: '50pcs', price: '₦500.00', total: '₦25,000.00', stock: '50pcs', supplier: 'Tool Depot', status: 'In stock' },
  { sn: '10', img: '📎', name: 'Clips', id: '98765432', cat: 'Stationaries', qty: '100pcs', price: '₦10.00', total: '₦1,000.00', stock: '90pcs', supplier: 'Stationery World', status: 'In stock' },
  { sn: '11', img: '📦', name: 'Storage Box', id: '55599988', cat: 'Storage', qty: '15pcs', price: '₦2,000.00', total: '₦30,000.00', stock: '12pcs', supplier: 'Storage Hub', status: 'In stock' },
  { sn: '12', img: '🖇️', name: 'Binder Clips', id: '90871234', cat: 'Stationaries', qty: '200pcs', price: '₦20.00', total: '₦4,000.00', stock: '180pcs', supplier: 'Office Point', status: 'In stock' },
  { sn: '13', img: '🧮', name: 'Calculator', id: '45672222', cat: 'Electronics', qty: '20pcs', price: '₦3,000.00', total: '₦60,000.00', stock: '10pcs', supplier: 'TechZone', status: 'Low stock' },
  { sn: '14', img: '📠', name: 'Fax Machine', id: '12345678', cat: 'Electronics', qty: '5pcs', price: '₦15,000.00', total: '₦75,000.00', stock: '3pcs', supplier: 'TechZone', status: 'Low stock' },
  { sn: '15', img: '🖨️', name: 'Printer', id: '10293847', cat: 'Electronics', qty: '8pcs', price: '₦50,000.00', total: '₦400,000.00', stock: '5pcs', supplier: 'TechZone', status: 'In stock' },
  { sn: '16', img: '🪞', name: 'Whiteboard', id: '47583920', cat: 'Boards', qty: '10pcs', price: '₦7,000.00', total: '₦70,000.00', stock: '8pcs', supplier: 'Board House', status: 'In stock' },
];

const StocksInventoryPage = () => {
  const [activeTab, setActiveTab] = useState('stocks');
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Stocks and Inventory</h1>
        <p className="text-gray-500">Update stock and inventory table</p>
      </div>

      <div className="flex space-x-4 border-b mb-6">
        <button
          onClick={() => setActiveTab('stocks')}
          className={`pb-2 px-4 font-medium ${activeTab === 'stocks' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}
        >
          Stocks
        </button>
        <button
          onClick={() => setActiveTab('inventory')}
          className={`pb-2 px-4 font-medium ${activeTab === 'inventory' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}
        >
          Inventory
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {activeTab === 'stocks' ? (
          <>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">15</div>
              <div className="text-sm text-gray-500">Categories</div>
              <div className="text-xs mt-1 text-green-500">+2 more than last year</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">800</div>
              <div className="text-sm text-gray-500">Total Items</div>
              <div className="text-xs mt-1 text-green-500">+10 more than last year</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">₦5,000,000</div>
              <div className="text-sm text-gray-500">Total Item Cost</div>
              <div className="text-xs mt-1 text-red-500">-2.5% less than last year</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">200</div>
              <div className="text-sm text-gray-500">Items Low in Stock</div>
              <div className="text-xs mt-1 text-red-500">+20 more than last week</div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">100</div>
              <div className="text-sm text-gray-500">Total Inventory Stock</div>
              <div className="text-xs mt-1 text-green-500">+5% since last month</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">₦1,200,000</div>
              <div className="text-sm text-gray-500">Total Inventory Value</div>
              <div className="text-xs mt-1 text-red-500">-1.2% since last quarter</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">15</div>
              <div className="text-sm text-gray-500">Returned Items</div>
              <div className="text-xs mt-1 text-yellow-500">+3% returns rate</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[220px]">
              <div className="text-xl font-semibold text-gray-800">8</div>
              <div className="text-sm text-gray-500">Inventory Locations</div>
              <div className="text-xs mt-1 text-blue-500">New warehouse added</div>
            </div>
          </>
        )}
      </div>

      <div className="mb-6 bg-white h-20 flex justify-end items-center pr-6 rounded-2xl">
  <button
    onClick={() => navigate('/update-stock')}
    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md"
  >
    Update Stock
  </button>
</div>


      <h2 className="text-lg font-semibold mb-2 text-gray-700">Stock List</h2>

      <div className="overflow-x-auto max-h-[400px] rounded-2xl">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead className="bg-white text-gray-700 text-sm sticky top-0">
            <tr>
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">QTY Purchased</th>
              <th className="px-4 py-2">Unit Price</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">In-Stock</th>
              <th className="px-4 py-2">Supplier</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {stockData.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-100">
                <td className="px-4 py-3">{item.sn}</td>
                <td className="px-4 py-2">{item.img}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.cat}</td>
                <td className="px-4 py-2">{item.qty}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.total}</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">{item.supplier}</td>
                <td className={`px-4 py-2 ${item.status.includes('Out') || item.status === 'Low stock' ? 'text-red-500' : 'text-green-600'}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StocksInventoryPage;
