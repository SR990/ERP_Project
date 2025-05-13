import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  labels: ['Pending', 'Approved', 'Completed'],
  datasets: [
    {
      data: [80, 370, 50],
      backgroundColor: ['#facc15', '#10b981', '#ef4444'],
    },
  ],
};

const Dashboard = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-8">

   
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Mr. Otor John</h1>
          <p className="text-gray-500 text-sm">Today is Saturday, 13th November 2022</p>
        </div>
        <div className="relative inline-block text-left">
     
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium">Otor John</span>
        <FaChevronDown className="text-gray-600 text-sm" />
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>

      
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-10">
          <ul className="py-1 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ['250', 'Total Staff', '↑ 12 more', 'text-green-600'],
          ['100', 'Total Applications', '↓ 6.2% less', 'text-red-600'],
          ['10', 'Total Projects', '↑ 2 more', 'text-green-600'],
          ['10', 'Departments', '', 'text-gray-400'],
        ].map(([value, title, note, color], i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-gray-600">{title}</div>
            {note && <div className={`text-sm mt-1 ${color}`}>{note}</div>}
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        
        <div className="bg-white p-4 rounded shadow">
  <h3 className="font-semibold text-lg mb-4">Memo</h3>

  <div className="w-full overflow-x-auto">
    <div className="min-w-[600px]">

      <div className="grid grid-cols-5 font-medium text-gray-600 border-b border-gray-300 px-2 py-2">
        <div>S/N</div>
        <div>Title</div>
        <div>From</div>
        <div>To</div>
        <div>Status</div>
      </div>

      <div className="max-h-48 overflow-y-auto">
        {[
          ['01', 'Ops memo', 'Otor', 'Ibrahim', 'Pending'],
          ['02', 'Project memo', 'Fatima', 'Shola', 'Approved'],
          ['03', 'Onboard', 'Otor', 'James', 'Approved'],
          ['04', 'Ops memo', 'Ibrahim', 'Otor', 'Approved'],
          ['05', 'Strategy Notice', 'Grace', 'Team', 'Pending'],
          ['06', 'Budget Report', 'Admin', 'Finance', 'Approved'],
        ].map(([sn, title, from, to, status], index) => (
          <div
            key={index}
            className="grid grid-cols-5 px-2 py-2 border-b text-sm border-gray-200"
          >
            <div>{sn}</div>
            <div>{title}</div>
            <div>{from}</div>
            <div>{to}</div>
            <div className={status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}>
              {status}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


<div className="bg-white p-4 rounded shadow">
  <h3 className="font-semibold text-lg mb-4">Staff List</h3>

  <div className="w-full overflow-x-auto">
    <div className="min-w-[600px]">
     
      <div className="grid grid-cols-4 font-medium text-gray-600 border-b border-gray-300 px-2 py-2">
        <div>S/N</div>
        <div>Name</div>
        <div>Role</div>
        <div>Department</div>
      </div>

      <div className="max-h-48 overflow-y-auto">
        {[
          ['01', 'Jonathan Gajie', 'Admin', 'HR'],
          ['02', 'Ikenzy Obinna', 'Admin', 'Management'],
          ['03', 'Osadebe', 'HOD IT', 'Operations'],
          ['04', 'Christina', 'HOD Account', 'Accounts'],
          ['05', 'Fatima Yusuf', 'Secretary', 'Legal'],
          ['06', 'Otor Matthew', 'Ops Manager', 'Operations'],
        ].map(([sn, name, role, dept], index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-2 py-2 border-b text-sm border-gray-200"
          >
            <div>{sn}</div>
            <div>{name}</div>
            <div>{role}</div>
            <div>{dept}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


<div className="bg-white p-4 rounded shadow">
  <h3 className="font-semibold text-lg mb-4">Payment Vouchers</h3>

  <div className="w-full overflow-x-auto">
    <div className="min-w-[600px]">
      
      <div className="grid grid-cols-4 font-medium text-gray-600 border-b border-gray-300 px-2 py-2">
        <div>S/N</div>
        <div>Subject</div>
        <div>Date</div>
        <div>Status</div>
      </div>

      
      <div className="max-h-48 overflow-y-auto">
        {[
          ['01', 'FAKS Oct 2022', '25/10/2022', 'Pending'],
          ['02', 'Project Fee', '19/10/2022', 'Approved'],
          ['03', 'FAKS Oct 2022', '10/10/2022', 'Approved'],
          ['04', 'Proposal Fee', '02/10/2022', 'Pending'],
          ['05', 'Extra Payment', '29/09/2022', 'Approved'],
          ['06', 'Reimbursement', '22/09/2022', 'Pending'],
        ].map(([sn, subject, date, status], index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-2 py-2 border-b text-sm border-gray-200"
          >
            <div>{sn}</div>
            <div>{subject}</div>
            <div>{date}</div>
            <div className={status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}>
              {status}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      
<div className="bg-white p-4 rounded shadow w-full sm:w-[350px] lg:w-[400px] xl:w-[570px]">
  <h3 className="font-semibold text-lg mb-2">Applications Overview</h3>
  <div className="text-gray-600 mb-4">Total: 500 Applications</div>

  
  <div className="flex justify-center items-center">
    <div className="w-full h-[250px]">
      <Pie data={pieData} options={{ maintainAspectRatio: false }} />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
