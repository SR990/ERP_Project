import React from 'react';
import { FaBell, FaChevronLeft, FaCog } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function ScheduleMaintenance() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Optional: Add validation or data processing
        navigate('/success');
    };

    return (
        <div className="min-h-screen bg-[#f9fbff] text-[#111827] font-sans p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <FaCog className="text-blue-500" />
                        Schedule Maintenance
                    </h1>
                    <p className="text-sm text-gray-500">Schedule a maintenance for future use.</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaBell className="text-gray-500 text-xl" />
                    <div className="flex items-center gap-2">
                        <HiOutlineUserCircle className="text-2xl text-gray-700" />
                        <div className="text-sm text-right">
                            <div className="font-medium">Otor John</div>
                            <div className="text-gray-400">HR Office</div>
                        </div>
                        <span className="text-gray-400">▼</span>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <button
                onClick={() => navigate('/maintenance')}
                className="flex items-center text-blue-500 mb-6 text-sm hover:underline"
            >
                <FaChevronLeft className="mr-1" />
                Back
            </button>

            {/* Schedule Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm max-w-6xl mx-auto">
                <h2 className="text-lg font-semibold mb-1">Schedule Maintenance</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Kindly fill in the form below to schedule a maintenance.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {/* Item Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Item name</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Select item</option>
                            <option>Air Conditioner</option>
                            <option>Generator</option>
                        </select>
                    </div>

                    {/* Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Select option</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="DD/MM/YYYY"
                        />
                    </div>

                    {/* Maintenance Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance type</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Select option</option>
                            <option>Routine</option>
                            <option>Emergency</option>
                        </select>
                    </div>

                    {/* Recurring Option */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Recurring option</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option>Select option</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Quarterly</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 col-span-full">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md shadow-md hover:opacity-90"
                        >
                            Schedule Maintenance
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
