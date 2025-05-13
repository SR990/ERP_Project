import React from 'react';
import { ChevronDown, Search, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Circulars = () => {
    const navigate = useNavigate();

    const circulars = [
        { id: 1, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 2, title: "Finance Budget Guidelines for Q1", from: "Finance Dept", to: "All Departments", date: "10/12/2022", type: "received" },
        { id: 3, title: "Annual Leave Policy Update", from: "HR Manager", to: "All Employees", date: "05/01/2023", type: "sent" },
        { id: 4, title: "Internal Audit Notification", from: "Audit Team", to: "Finance Dept", date: "12/01/2023", type: "received" },
        { id: 5, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 6, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 7, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "received" },
        { id: 8, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 9, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 10, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "received" },
        { id: 11, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 12, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
        { id: 13, title: "HR Circular for Operations Department Staff", from: "Admin, HR", to: "Operations Staff", date: "16/11/2022", type: "sent" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-blue-800">📘 Circulars</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Enter search word"
                            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="text-sm font-medium text-gray-700">150 Total circulars</div>
                    <select className="px-4 py-2 border border-gray-300 rounded-md">
                        <option>All memos</option>
                    </select>
                    <button
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md font-medium"
                        onClick={() => navigate('/create-circular')}
                    >
                        Create Circular
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-4">All Circulars</h2>

                {/* Scrollable table with vertical blue scrollbar */}
                <div className="w-full max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-grey-500 scrollbar-track-grey-100">
                    <table className="min-w-[1000px] w-full text-left text-sm">
                        <thead className="border-b">
                            <tr>
                                <th className="py-2 px-2">S/N</th>
                                <th className="py-2 px-2">Circular Title</th>
                                <th className="py-2 px-2">Sent From</th>
                                <th className="py-2 px-2">Sent To</th>
                                <th className="py-2 px-2">Date</th>
                                <th className="py-2 px-2">Circular Type</th>
                                <th className="py-2 px-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {circulars.map((item, i) => (
                                <tr key={item.id} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-2">{String(i + 1).padStart(2, "0")}</td>
                                    <td className="py-2 px-2">{item.title}</td>
                                    <td className="py-2 px-2">{item.from}</td>
                                    <td className="py-2 px-2">{item.to}</td>
                                    <td className="py-2 px-2">{item.date}</td>
                                    <td className="py-2 px-2 flex items-center gap-1">
                                        {item.type.toLowerCase() === "sent" ? (
                                            <>
                                                Sent <ArrowUpRight className="w-4 h-4 text-green-500" />
                                            </>
                                        ) : (
                                            <>
                                                Received <ArrowDownLeft className="w-4 h-4 text-red-500" />
                                            </>
                                        )}
                                    </td>
                                    <td className="py-2 px-2 text-blue-600 hover:underline cursor-pointer">
                                        View more
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <span>Showing</span>
                    <select className="border px-2 py-1 rounded ml-2">
                        <option>13</option>
                    </select>
                    <span>per page</span>

                    <div className="flex gap-2 ml-auto">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                className={`px-3 py-1 border rounded ${num === 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                            >
                                {num}
                            </button>
                        ))}
                        <button className="px-3 py-1 border rounded">&gt;&gt;</button>
                    </div>
                </div>
            </div>

            <footer className="mt-8 text-center text-xs text-gray-500">
                Copyright © 2022 Relia Energy. All Rights Reserved
            </footer>
        </div>
    );
};

export default Circulars;
