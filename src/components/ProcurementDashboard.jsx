import React from 'react';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ProcurementDashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f9fbff] text-[#111827] font-sans p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <span className="text-blue-600">📦</span> Procurement
                    </h1>
                    <p className="text-sm text-gray-500">
                        Request for, and view all requested procurements.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <FaBell className="text-gray-500 text-xl" />
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700">Otor John</span>
                        <span className="text-sm text-gray-400">HR Officer</span>
                        <img
                            src="https://i.pravatar.cc/32"
                            alt="avatar"
                            className="rounded-full w-8 h-8"
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                    ['Total request made', '350', 'text-blue-600'],
                    ['Total cost incurred', '8,000,000', 'text-purple-600'],
                    ['Pending request', '20', 'text-orange-400'],
                    ['Approved request', '330', 'text-green-500'],
                ].map(([label, value, color], i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-sm text-gray-500">{label}</div>
                        <div className={`text-2xl font-bold ${color}`}>{value}</div>
                    </div>
                ))}
            </div>

            {/* Request Button */}
            <div className="flex justify-between items-center bg-white px-4 py-3 rounded-xl shadow-sm mb-4">
                <h2 className="font-semibold text-gray-700 text-lg">Procurement request</h2>
                <button
                    onClick={() => navigate('/procurement-request')}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md shadow hover:opacity-90"
                >
                    Make Procurement Request
                </button>
            </div>

            {/* Table with scroll */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Procurement Request</h3>
                <div className="overflow-y-auto max-h-[400px]">
                    <table className="w-full text-sm text-left">
                        <thead className="text-gray-600 border-b sticky top-0 bg-white z-10">
                            <tr>
                                {[
                                    'S/N',
                                    'Item',
                                    'Qty',
                                    'Amount',
                                    'Requested By',
                                    'Sent to',
                                    'Date',
                                    'Status',
                                    'Action',
                                ].map((h, i) => (
                                    <th key={i} className="px-4 py-2 whitespace-nowrap">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 20 }).map((_, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b text-gray-700 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-2">0{idx + 1}</td>
                                    <td className="px-4 py-2">Office chairs</td>
                                    <td className="px-4 py-2">20</td>
                                    <td className="px-4 py-2">360,000.00</td>
                                    <td className="px-4 py-2">Otor John</td>
                                    <td className="px-4 py-2">Faruk Hashim</td>
                                    <td className="px-4 py-2">21/11/2022</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`font-medium ${idx < 2
                                                ? 'text-yellow-500'
                                                : 'text-green-600'
                                                }`}
                                        >
                                            {idx < 2 ? 'Pending' : 'Approved'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-blue-500 cursor-pointer hover:underline">
                                        View more
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-gray-400 mt-6">
                © 2022 Relia Energy. All Rights Reserved
            </p>
        </div>
    );
}
