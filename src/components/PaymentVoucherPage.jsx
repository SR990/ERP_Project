import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentVoucherPage() {
  const navigate = useNavigate();
  const [memoFilter, setMemoFilter] = useState('All memos');
  const [perPage, setPerPage] = useState(16);

  const dummyData = Array(12).fill({
    sn: '01',
    subject: 'Request for FARS for October 2022',
    date: '05/12/2022',
    preparedBy: 'Otor John',
    sendTo: 'Abubakar Sadiq',
  });

  return (
    <div className="bg-[#f8f9fb] min-h-screen p-8 text-gray-800 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold flex items-center">
            <span className="mr-2">👥</span> Payment Voucher
          </h1>
          <p className="text-sm text-gray-500">Create payment voucher</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="font-semibold">Otor John</div>
            <div className="text-sm text-gray-500">HR Office</div>
          </div>
          <img
            src="https://ui-avatars.com/api/?name=Otor+John"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Filter & Action */}
      <div className="bg-white p-6 rounded-md shadow mb-6 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">250</div>
          <div className="text-gray-500 text-sm">Total payment vouchers</div>
        </div>
        <div className="flex items-center space-x-4">
          <select
            className="border px-3 py-2 rounded-md text-sm"
            value={memoFilter}
            onChange={(e) => setMemoFilter(e.target.value)}
          >
            <option>All memos</option>
            <option>Approved</option>
            <option>Pending</option>
          </select>
          <button
            onClick={() => navigate('/create-payment-voucher')}
            className="bg-blue-600 cursor-pointer hover:brightness-150 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Create Payment Voucher
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-4">All Payment Vouchers</h2>
        <div className="overflow-x-auto max-h-96 overflow-y-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 pr-4">S/N</th>
                <th className="py-2 pr-4">Subject</th>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Prepared By</th>
                <th className="py-2 pr-4">Send To</th>
                <th className="py-2 pr-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 pr-4">{item.sn}</td>
                  <td className="py-2 pr-4">{item.subject}</td>
                  <td className="py-2 pr-4">{item.date}</td>
                  <td className="py-2 pr-4">{item.preparedBy}</td>
                  <td className="py-2 pr-4">{item.sendTo}</td>
                  <td className="py-2 pr-4 text-blue-600 cursor-pointer hover:underline">
                    View more
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end items-center space-x-2">
          <span className="text-sm">Showing</span>
          <input
            type="number"
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="border w-16 px-2 py-1 rounded-md text-sm"
          />
          <span className="text-sm">per page</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-xs text-gray-400">
        Copyright © 2022 Relia Energy. All Rights Reserved
      </footer>
    </div>
  );
}
