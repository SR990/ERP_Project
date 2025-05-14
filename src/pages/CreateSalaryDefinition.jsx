import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateSalaryDefinition() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex-1 p-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 hover:brightness-150 cursor-pointer mb-4 hover:underline">
        ← Back
      </button>

      {/* Tabs */}
      

      <h1 className="text-xl font-bold mb-4">Create Salary Definition</h1>

      {/* Salary Definition Form */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <select className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black">
            <option value="" disabled selected hidden>
            Select option
            </option>
            <option>Managing Director</option>
            <option>General Manager</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Level</label>
          <select className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black">
            <option value="" disabled selected hidden>
            Select option
            </option>
            <option>MD/CEO</option>
            <option>DGM</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Basic Salary</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter amount in Naira" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Allowance</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter amount in Naira" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Gross Salary</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter amount in Naira" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Deductions</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter amount in Naira" />
        </div>
        <div className="block mb-1 font-medium">
          <label className="block mb-1 font-medium">Net Salary</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter amount in Naira" />
        </div>
        
      </div>
      
      <div className="flex items-end">
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer hover:brightness-150 transition duration-200 w-60 ml-6 mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded"
        >
          Create
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Success"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Congratulations</h2>
            <p className="mb-6">Your salary definition has been created successfully.</p>
            <button
              onClick={handleCloseModal}
              className="bg-gradient-to-r hover:brightness-150  cursor-pointer from-blue-500 to-indigo-600 text-white px-6 py-2 rounded"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
