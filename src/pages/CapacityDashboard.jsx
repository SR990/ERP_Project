import React from 'react';
import { useNavigate } from 'react-router-dom';

const CapacityDashboard = () => {
  const navigate = useNavigate();

  const trainings = [
    {
      sn: '01',
      description: 'Staff Health and Safety Training',
      date: '03/12/2022',
      type: 'Team',
      duration: '3days',
      mode: 'Physical',
      status: 'Inprogress',
    },
    {
      sn: '02',
      description: 'Staff Health and Safety Training',
      date: '03/12/2022',
      type: 'Team',
      duration: '2weeks',
      mode: 'Online',
      status: 'To-do',
    },
    {
      sn: '03',
      description: 'Staff Health and Safety Training',
      date: '03/12/2022',
      type: 'Team',
      duration: '3days',
      mode: 'Physical',
      status: 'Completed',
    },
    {
      sn: '04',
      description: 'Data Security Awareness Training',
      date: '04/01/2023',
      type: 'Individual',
      duration: '1week',
      mode: 'Online',
      status: 'Completed',
    },
    {
      sn: '05',
      description: 'First Aid and CPR Training',
      date: '06/01/2023',
      type: 'Team',
      duration: '2days',
      mode: 'Physical',
      status: 'Inprogress',
    },
    {
      sn: '06',
      description: 'Fire Safety Workshop',
      date: '09/02/2023',
      type: 'Team',
      duration: '1day',
      mode: 'Physical',
      status: 'Completed',
    },
    {
      sn: '07',
      description: 'Mental Health and Wellbeing',
      date: '10/03/2023',
      type: 'Individual',
      duration: '3days',
      mode: 'Online',
      status: 'To-do',
    },
    {
      sn: '08',
      description: 'Leadership Development Program',
      date: '11/04/2023',
      type: 'Team',
      duration: '1month',
      mode: 'Physical',
      status: 'Inprogress',
    },
    {
      sn: '09',
      description: 'Project Management Fundamentals',
      date: '12/05/2023',
      type: 'Individual',
      duration: '2weeks',
      mode: 'Online',
      status: 'Completed',
    },
    {
      sn: '10',
      description: 'Time Management Training',
      date: '01/06/2023',
      type: 'Team',
      duration: '5days',
      mode: 'Physical',
      status: 'Completed',
    },
    {
      sn: '11',
      description: 'Customer Service Essentials',
      date: '02/07/2023',
      type: 'Team',
      duration: '3days',
      mode: 'Online',
      status: 'Completed',
    },
    {
      sn: '12',
      description: 'Conflict Resolution Workshop',
      date: '05/08/2023',
      type: 'Individual',
      duration: '1week',
      mode: 'Physical',
      status: 'To-do',
    },
    {
      sn: '13',
      description: 'Remote Work Best Practices',
      date: '10/09/2023',
      type: 'Team',
      duration: '2days',
      mode: 'Online',
      status: 'Inprogress',
    },
    {
      sn: '14',
      description: 'Advanced Excel Training',
      date: '12/10/2023',
      type: 'Individual',
      duration: '4days',
      mode: 'Online',
      status: 'Completed',
    },
    {
      sn: '15',
      description: 'Workplace Ethics and Culture',
      date: '01/11/2023',
      type: 'Team',
      duration: '3days',
      mode: 'Physical',
      status: 'Completed',
    },
    {
      sn: '16',
      description: 'Diversity and Inclusion Program',
      date: '03/12/2023',
      type: 'Team',
      duration: '1week',
      mode: 'Online',
      status: 'Inprogress',
    },
    {
      sn: '17',
      description: 'Cybersecurity for Employees',
      date: '15/01/2024',
      type: 'Individual',
      duration: '5days',
      mode: 'Online',
      status: 'To-do',
    },
    {
      sn: '18',
      description: 'Effective Communication Skills',
      date: '20/02/2024',
      type: 'Team',
      duration: '2weeks',
      mode: 'Physical',
      status: 'Completed',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600';
      case 'Inprogress':
        return 'text-orange-500';
      case 'To-do':
        return 'text-blue-500';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Capacity Building</h1>
        <p className="text-gray-600 text-sm">
          Create and submit request for staff training
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between h-28">
          <div>
            <div className="text-xl font-bold text-gray-800">350</div>
            <div className="text-sm text-gray-500">Total training request</div>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-500 font-bold">📈</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between h-28">
          <div>
            <div className="text-xl font-bold text-gray-800">800</div>
            <div className="text-sm text-gray-500">Total staff trained</div>
          </div>
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-500 font-bold">👥</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between h-28">
          <div>
            <div className="text-xl font-bold text-gray-800">300</div>
            <div className="text-sm text-gray-500">Total training done</div>
          </div>
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-500 font-bold">✔️</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between h-28">
          <div>
            <div className="text-xl font-bold text-gray-800">70%</div>
            <div className="text-sm text-gray-500">Staff training rate</div>
          </div>
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-yellow-500 font-bold">⭐</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Training Capacity Dashboard
        </h1>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:opacity-90"
          onClick={() => navigate('/training-request')}
        >
          Make Training Request
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 overflow-hidden">
        <h2 className="text-lg font-semibold mb-4">All Trainings</h2>

        <div className="overflow-y-auto max-h-[450px] pr-3">
          <table className="min-w-full text-sm border-separate border-spacing-y-3">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="text-left text-gray-700">
                <th className="p-3">S/N</th>
                <th className="p-3">Training Description</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">Training Type</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Training Mode</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {trainings.slice(0, 10).map((t, index) => (
                <tr key={index} className="bg-gray-50 rounded-lg shadow-sm">
                  <td className="p-3">{t.sn}</td>
                  <td className="p-3">{t.description}</td>
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">{t.type}</td>
                  <td className="p-3">{t.duration}</td>
                  <td className="p-3">{t.mode}</td>
                  <td className={`p-3 ${getStatusColor(t.status)} font-medium`}>
                    {t.status}
                  </td>
                  <td
                    className="p-3 text-blue-600 underline cursor-pointer"
                    onClick={() => navigate('/training-details', { state: t })}
                  >
                    View more
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        Copyright © 2022 Relia Energy. All Rights Reserved
      </p>
    </div>
  );
};

export default CapacityDashboard;
