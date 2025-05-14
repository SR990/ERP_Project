import React, { useState } from 'react';
import { FaBell, FaCog } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Maintenance() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const maintenanceData = [
        { date: '2025-05-14', title: 'AC filter replacement - Block A' },
        { date: '2025-05-15', title: 'Generator oil change' },
        { date: '2025-05-14', title: 'Fix broken ceiling fan in HR' },
    ];

    const filteredMaintenance = maintenanceData.filter(item =>
        item.date === selectedDate.toISOString().split('T')[0]
    );

    return (
        <div className="min-h-screen bg-[#f9fbff] text-[#111827] font-sans p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <FaCog className="text-blue-500" />
                        Maintenance
                    </h1>
                    <p className="text-sm text-gray-500">View and create schedule for maintenance</p>
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

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {['Scheduled', 'Completed', 'Pending', 'Overdue'].map((status, idx) => {
                    const colors = ['blue', 'green', 'yellow', 'red'];
                    return (
                        <div key={status} className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2">
                            <div className="text-xl font-bold">25</div>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-6 h-6 rounded-full bg-${colors[idx]}-100 text-${colors[idx]}-500 flex items-center justify-center text-sm`}
                                >
                                    <FaCog />
                                </div>
                                <span className="text-gray-600">{status} maintenance</span>
                            </div>
                            <p className="text-xs text-green-500 mt-1">↑ 2 more than last quarter</p>
                        </div>
                    );
                })}
            </div>

            {/* Schedule a Maintenance */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Schedule a Maintenance</h2>
                <button
                    onClick={() => navigate('/schedule-maintenance')}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md shadow-md hover:opacity-90"
                >
                    Schedule Maintenance
                </button>
            </div>

            {/* Calendar + Maintenance */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col lg:flex-row gap-8">
                {/* Real Calendar */}
                <div className="w-full lg:w-1/3">
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="rounded-xl p-2 shadow border-none"
                        tileClassName={({ date }) => {
                            const dateStr = date.toISOString().split('T')[0];
                            return maintenanceData.some(item => item.date === dateStr)
                                ? 'bg-blue-100 text-blue-600 font-semibold rounded-full'
                                : null;
                        }}
                    />
                </div>

                {/* Maintenance List */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-lg font-semibold mb-4">
                        Maintenance for {selectedDate.toDateString()}
                    </h2>
                    {filteredMaintenance.length > 0 ? (
                        filteredMaintenance.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 mb-4">
                                <div>
                                    <p className="text-gray-500 text-sm">{item.date}</p>
                                    <p className="font-semibold mt-1">
                                        {i + 1}. {item.title}
                                    </p>
                                </div>
                                <button className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-md text-sm shadow hover:opacity-90">
                                    View
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No maintenance scheduled for this date.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-400 mt-10">
                © 2025 Relia Energy. All Rights Reserved
            </div>
        </div>
    );
}
