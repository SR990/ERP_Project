import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function CreatePayRollDefinition() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const staffList = [
    {
      name: 'Abubakar Alghazali',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'Fatima Mohammed',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'Ibrahim Bankole',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'Sadiq Sadiq',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'James Emmanuel',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'Ranky Solomon',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'Otor John',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
    {
      name: 'Charles Wilson',
      title: 'Managing Director',
      level: 'MD/CEO',
      basic: '₦445,331.00',
      allowances: '₦600,000.00',
      gross: '₦1,145,331.00',
      deduction: '₦224,000.00',
      net: '₦224,000.00',
    },
  ];

  return (
    <div className="flex-1 p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:brightness-150 cursor-pointer mb-4 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-xl font-bold mb-4">Generate Payroll</h1>

      {/* Payroll Form */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Payment name</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter payment name" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Designation</label>
          <select className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black">
            <option value="" disabled selected hidden>
              Select Designation
            </option>
            <option>Managing Director</option>
            <option>General Manager</option>
            <option>Executive Director</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Date generated</label>
          <input
            type="date"
            defaultValue="2022-11-15"
            className="w-full border rounded-lg px-3 py-2 text-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Payment month</label>
          <select className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black">
            <option value="" disabled selected hidden>
              Select Month
            </option>
            {[
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ].map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Payment year</label>
          <select className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black">
            <option value="" disabled selected hidden>
              Select Year
            </option>
            {Array.from({ length: 25 }, (_, i) => 2001 + i).map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-end">
        <button className="w-60 hover:brightness-150 cursor-pointer ml-6 mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded">
          Generate Payroll
        </button>
      </div>

      {/* Staff Details Table */}
      <div className="mt-12">
        <h2 className="text-lg font-bold mb-4">Staff Details</h2>
        <div className="overflow-auto rounded-lg bg-white shadow-md">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-3">S/N</th>
                <th className="px-4 py-3">Staff Name</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Basic Salary</th>
                <th className="px-4 py-3">Allowances</th>
                <th className="px-4 py-3">Gross Salary</th>
                <th className="px-4 py-3">Deduction</th>
                <th className="px-4 py-3">Net Salary</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {staffList.map((staff, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{String(index + 1).padStart(2, '0')}</td>
                  <td className="px-4 py-2">{staff.name}</td>
                  <td className="px-4 py-2">{staff.title}</td>
                  <td className="px-4 py-2">{staff.level}</td>
                  <td className="px-4 py-2">{staff.basic}</td>
                  <td className="px-4 py-2">{staff.allowances}</td>
                  <td className="px-4 py-2">{staff.gross}</td>
                  <td className="px-4 py-2">{staff.deduction}</td>
                  <td className="px-4 py-2">{staff.net}</td>
                  <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                    View more
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button & Feedback */}
        <div className="flex flex-col items-end mt-6">
          <button
            onClick={() => setSubmitted(true)}
            className="w-40 cursor-pointer hover:brightness-150 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded"
          >
            Submit
          </button>

          {submitted && (
            <div className="mt-4 text-green-600 font-medium">
              ✅ Thanks for submitting the payroll!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
