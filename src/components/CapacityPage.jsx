import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CapacityPage = () => {
  const [form, setForm] = useState({
    description: '',
    type: '',
    duration: '',
    date: '',
    mode: '',
    staff: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', form);

    // Redirect to Success1 page after successful submission
    navigate('/success2');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2 text-left">Capacity Building</h1>
        <p className="text-gray-600 text-lg text-left">Create and submit a request for staff training</p>
      </div>

      {/* Back Button */}
      <div className="mb-6 w-full mx-auto text-left">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline"
        >
          &larr; Back
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Training Request</h2>
        
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Training description */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Training description
            </label>
            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Training type */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Training type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            >
              <option value="" disabled>Select type</option>
              <option>Team</option>
              <option>Individual</option>
            </select>
          </div>

          {/* Training duration */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Training duration</label>
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            >
              <option value="" disabled>Select duration</option>
              <option>1day</option>
              <option>3days</option>
              <option>1week</option>
              <option>2weeks</option>
            </select>
          </div>

          {/* Training date */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Training date</label>
            <div className="relative">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10m-6 8h6m-6 0H6m0-4h.01M6 16h.01M6 12h.01M6 8h.01M10 8h.01M14 8h.01M18 8h.01"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Training mode */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Training mode</label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            >
              <option value="" disabled>Select mode</option>
              <option>Online</option>
              <option>Physical</option>
            </select>
          </div>

          {/* Staff to be trained */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Staff to be trained</label>
            <select
              name="staff"
              value={form.staff}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            >
              <option value="" disabled>Select names</option>
              <option>Alice</option>
              <option>Bob</option>
              <option>Carol</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="md:col-span-3 flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              Save and Submit
            </button>
            <button
              type="button"
              onClick={() => console.log('Draft saved')}
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CapacityPage;
