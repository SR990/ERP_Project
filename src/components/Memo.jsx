import React from 'react';
import { Search, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Memo = () => {
    const navigate = useNavigate();

    const memos = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        title: "Operations memo",
        from: "Williams Achegbani",
        to: "Chief Operations Officer",
        date: "16/11/2022",
        attachment: i % 3 === 0 ? "No" : "Yes",
        type: i % 5 === 0 ? "received" : "sent"
    }));

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">📘 Memo</h1>
                    <p className="text-sm text-gray-500">Create and send memos to designated offices.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-medium text-gray-800">Otor John</span>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                        <p className="text-2xl font-semibold text-gray-800">300</p>
                        <p className="text-sm text-gray-500">Total memo</p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Enter search word"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <select className="border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 w-full">
                            <option>All memos</option>
                        </select>
                        <button
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap"
                            onClick={() => navigate('/create-memo')}
                        >
                            Create Memo
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">All Memos</h2>

                {/* Scrollable table container */}
                <div className="overflow-x-auto">
                    <div className="max-h-[400px] overflow-y-auto border rounded-md">
                        <table className="w-full text-sm text-left text-gray-700 min-w-[900px]">
                            <thead className="sticky top-0 bg-white shadow-sm z-10">
                                <tr className="text-gray-500 border-b border-gray-200">
                                    <th className="py-2 px-2">S/N</th>
                                    <th className="py-2 px-2">Memo Title</th>
                                    <th className="py-2 px-2">Sent From</th>
                                    <th className="py-2 px-2">Sent To</th>
                                    <th className="py-2 px-2">Date</th>
                                    <th className="py-2 px-2">Attachment?</th>
                                    <th className="py-2 px-2">Memo Type</th>
                                    <th className="py-2 px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {memos.map((memo, index) => (
                                    <tr key={memo.id} className="border-b hover:bg-gray-50">
                                        <td className="py-2 px-2">{String(index + 1).padStart(2, '0')}</td>
                                        <td className="py-2 px-2">{memo.title}</td>
                                        <td className="py-2 px-2">{memo.from}</td>
                                        <td className="py-2 px-2">{memo.to}</td>
                                        <td className="py-2 px-2">{memo.date}</td>
                                        <td className="py-2 px-2">{memo.attachment}</td>
                                        <td className="py-2 px-2 flex items-center gap-1">
                                            {memo.type === 'sent' ? (
                                                <>
                                                    Sent <ArrowUpRight className="w-4 h-4 text-green-500" />
                                                </>
                                            ) : (
                                                <>
                                                    Received <ArrowDownLeft className="w-4 h-4 text-red-500" />
                                                </>
                                            )}
                                        </td>
                                        <td
                                            className="py-2 px-2 text-blue-600 hover:underline cursor-pointer"
                                            onClick={() => navigate(`/memo/${memo.id}`)}
                                        >
                                            View more
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">

                    <div className="flex gap-2">
                        {[].map((num) => (
                            <button
                                key={num}
                                className={`px-3 py-1 border rounded ${num === 1
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-700'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                        <button className="px-3 py-1 border rounded">&gt;&gt;</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center text-xs text-gray-500">
                Copyright © 2022 Relia Energy. All Rights Reserved
            </footer>
        </div>
    );
};

export default Memo;
