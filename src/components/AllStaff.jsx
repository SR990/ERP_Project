import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllStaff() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg  p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold mt-3 ml-3 text-gray-800 flex items-center">
            👥 All Staff
          </h2>
          <p className="text-sm ml-3 text-gray-500">View, search for and add new staff</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right text-sm">
            <p className="font-semibold text-gray-700 mt-3 ">Otor John</p>
            <p className="text-gray-500">HR Office</p>
          </div>
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="rounded-full w-10 h-10 mr-5 mt-3 border"
          />
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center justify-between ml-2 mr-5 bg-gray-50 p-4 rounded-md mb-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter search word"
            className="border border-gray-300 px-3 py-2 rounded-md w-64"
          />
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-md">
            🔍
          </button>
        </div>
        <div className="text-center text-lg font-semibold">250<br /><span className="text-xs text-gray-500">Total number of staff</span></div>
        <select className="border border-gray-300 px-3 py-2 rounded-md">
          <option>All staff</option>
          <option>Admin staff</option>
          <option>IT staff</option>
          <option>Human Resource staff</option>
        </select>
        <button
          onClick={() => navigate('/add-staff')}
          className="bg-blue-600 hover:brightness-150 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Staff
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto ml-2 mr-5">
        <div className="overflow-y-auto max-h-96 scroll-smooth">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                {[
                  'S/N', 'First Name', 'Last Name', 'Gender', 'Staff ID',
                  'Phone Number', 'Role', 'Designation', 'Action',
                ].map((header) => (
                  <th key={header} className="px-4 py-2 border">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['01', 'Sandra', 'Williams', 'Female', '0246AHR', '08130000000', 'Admin', 'Human Resources'],
                ['02', 'Abubakar', 'Ibrahim', 'Male', '0251ITO', '07062000313', 'IT', 'Operations'],
                ['03', 'Ikechukwu', 'Ugboma', 'Male', '0340IT0', '08130000000', 'IT', 'Operations'],
                ['04', 'Joshua', 'Adewale', 'Male', '0146APM', '07038126632', 'Admin', 'Project Management'],
                ['05', 'Fatimah', 'Nasir', 'Female', '0226ACS', '08130000000', 'Admin', 'Customer Service'],
                ['06', 'Hauwa', 'Lateef', 'Female', '0124HR', '08130000000', 'IT', 'Human Resources'],
                ['07', 'Sandra', 'Williams', 'Female', '0246AH', '08130000000', 'Admin', 'Project Management'],
                ['08', 'Sandra', 'Williams', 'Female', '0246AH', '08130000000', 'None', 'Cleaning'],
                ['09', 'Sandra', 'Williams', 'Female', '0246PMO', '08130000000', 'PM', 'Operations'],
                ['10', 'Sunday', 'Alison', 'Male', '0246AH', '08130000000', 'None', 'Security'],
                ['11', 'Sandra', 'Williams', 'Female', '0246AHR', '08130000000', 'Admin', 'Human Resources'],
                ['12', 'Abubakar', 'Ibrahim', 'Male', '0251ITO', '07062000313', 'IT', 'Operations'],
                ['13', 'Ikechukwu', 'Ugboma', 'Male', '0340IT0', '08130000000', 'IT', 'Cleaning'],
                ['14', 'Joshua', 'Adewale', 'Male', '0146APM', '07038126632', 'Admin', 'Project Management'],
                ['15', 'Fatimah', 'Nasir', 'Female', '0226ACS', '08130000000', 'Admin', 'Customer Service'],
                ['16', 'Hauwa', 'Lateef', 'Female', '0124HR', '08130000000', 'IT', 'Human Resources'],
                ['17', 'Sunday', 'Alison', 'Female', '0246AH', '08130000000', 'IT', 'Security'],
                ['18', 'Sandra', 'Williams', 'Female', '0246AH', '08130000000', 'None', 'Cleaning'],
                ['19', 'Abubakar', 'Ibrahim', 'Female', '0246PMO', '08130000000', 'PM', 'Operations'],
                ['20', 'Ikechukwu', 'Ugboma', 'Male', '0246AH', '08130000000', 'Admin', 'Security'],
              ].map((row, index) => (
                <tr key={index} className="border-t">
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-2 border">{cell}</td>
                  ))}
                  <td className="px-4 py-2 border text-blue-600 hover:underline cursor-pointer">
                    View more
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between ml-2 mr-5 mt-4">
        <div className="text-sm text-gray-600">
          Showing <strong>9</strong> per page
        </div>
        
      </div>
    </div>
  );
}
