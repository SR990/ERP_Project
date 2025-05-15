import { useNavigate } from 'react-router-dom';

export default function LogisticsList() {
  const navigate = useNavigate();

  const logisticsData = [
    {
      id: 1,
      title: 'Request for travel time',
      purpose: 'Training course',
      amount: '360,000.00',
      requestedBy: 'Otor John Stephen',
      sentTo: 'Hassana Husseini',
      date: '21/11/2022',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Request for travel time',
      purpose: 'Vacation',
      amount: '360,000.00',
      requestedBy: 'Otor John Stephen',
      sentTo: 'Hassana Husseini',
      date: '21/11/2022',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Office Supplies Purchase',
      purpose: 'Stationery',
      amount: '120,000.00',
      requestedBy: 'Fatima Yusuf',
      sentTo: 'Christina Martins',
      date: '18/11/2022',
      status: 'Approved',
    },
    {
      id: 4,
      title: 'Vehicle Maintenance',
      purpose: 'Service',
      amount: '85,000.00',
      requestedBy: 'Otor John Stephen',
      sentTo: 'Ikenzy Obinna',
      date: '17/11/2022',
      status: 'Pending',
    },
    {
      id: 5,
      title: 'Project Equipment',
      purpose: 'Development',
      amount: '1,200,000.00',
      requestedBy: 'Osadebe Emmanuel',
      sentTo: 'Jonathan Gajie',
      date: '15/11/2022',
      status: 'Approved',
    },
    {
      id: 6,
      title: 'Marketing Campaign',
      purpose: 'Advertising',
      amount: '450,000.00',
      requestedBy: 'Shola Okoye',
      sentTo: 'Fatima Yusuf',
      date: '14/11/2022',
      status: 'Rejected',
    },
    {
      id: 7,
      title: 'Conference Attendance',
      purpose: 'Tech Conference',
      amount: '300,000.00',
      requestedBy: 'Grace Ibe',
      sentTo: 'Christina Martins',
      date: '12/11/2022',
      status: 'Approved',
    },
    {
      id: 8,
      title: 'Monthly Internet Subscription',
      purpose: 'Connectivity',
      amount: '60,000.00',
      requestedBy: 'Ikenzy Obinna',
      sentTo: 'Otor John Stephen',
      date: '10/11/2022',
      status: 'Pending',
    },
    {
      id: 9,
      title: 'Team Building Retreat',
      purpose: 'Staff Welfare',
      amount: '980,000.00',
      requestedBy: 'Jonathan Gajie',
      sentTo: 'Fatima Yusuf',
      date: '08/11/2022',
      status: 'Approved',
    },
    {
      id: 10,
      title: 'Software License Renewal',
      purpose: 'Subscription',
      amount: '250,000.00',
      requestedBy: 'Osadebe Emmanuel',
      sentTo: 'Shola Okoye',
      date: '05/11/2022',
      status: 'Approved',
    },
    {
      id: 11,
      title: 'Legal Advisory',
      purpose: 'Consultation',
      amount: '400,000.00',
      requestedBy: 'Grace Ibe',
      sentTo: 'Ikenzy Obinna',
      date: '03/11/2022',
      status: 'Pending',
    },
    {
      id: 12,
      title: 'Office Renovation',
      purpose: 'Maintenance',
      amount: '2,100,000.00',
      requestedBy: 'Fatima Yusuf',
      sentTo: 'Jonathan Gajie',
      date: '01/11/2022',
      status: 'Approved',
    },
    {
      id: 13,
      title: 'Security Upgrade',
      purpose: 'Surveillance System',
      amount: '700,000.00',
      requestedBy: 'Ikenzy Obinna',
      sentTo: 'Shola Okoye',
      date: '28/10/2022',
      status: 'Pending',
    },
    {
      id: 14,
      title: 'Customer Feedback Tool',
      purpose: 'CRM Subscription',
      amount: '320,000.00',
      requestedBy: 'Osadebe Emmanuel',
      sentTo: 'Fatima Yusuf',
      date: '25/10/2022',
      status: 'Approved',
    },
    {
      id: 15,
      title: 'Transport Reimbursement',
      purpose: 'Field Work',
      amount: '150,000.00',
      requestedBy: 'Jonathan Gajie',
      sentTo: 'Grace Ibe',
      date: '22/10/2022',
      status: 'Rejected',
    },
    {
      id: 16,
      title: 'Catering for Workshop',
      purpose: 'Event Support',
      amount: '270,000.00',
      requestedBy: 'Fatima Yusuf',
      sentTo: 'Christina Martins',
      date: '20/10/2022',
      status: 'Approved',
    },
    {
      id: 17,
      title: 'IT Infrastructure Upgrade',
      purpose: 'Hardware Replacement',
      amount: '3,500,000.00',
      requestedBy: 'Otor John Stephen',
      sentTo: 'Osadebe Emmanuel',
      date: '18/10/2022',
      status: 'Pending',
    },
    {
      id: 18,
      title: 'Medical Supplies',
      purpose: 'Health and Safety',
      amount: '210,000.00',
      requestedBy: 'Grace Ibe',
      sentTo: 'Jonathan Gajie',
      date: '16/10/2022',
      status: 'Approved',
    },
    {
      id: 19,
      title: 'New Employee Onboarding Kit',
      purpose: 'HR Supplies',
      amount: '90,000.00',
      requestedBy: 'Shola Okoye',
      sentTo: 'Christina Martins',
      date: '14/10/2022',
      status: 'Pending',
    },
    {
      id: 20,
      title: 'Office Cleaning Services',
      purpose: 'Sanitation',
      amount: '110,000.00',
      requestedBy: 'Jonathan Gajie',
      sentTo: 'Fatima Yusuf',
      date: '12/10/2022',
      status: 'Approved',
    },
    {
      id: 21,
      title: 'Data Analysis Software',
      purpose: 'Analytics Tools',
      amount: '540,000.00',
      requestedBy: 'Christina Martins',
      sentTo: 'Otor John Stephen',
      date: '10/10/2022',
      status: 'Rejected',
    },
    {
      id: 22,
      title: 'Business Cards Printing',
      purpose: 'Staff Identity',
      amount: '60,000.00',
      requestedBy: 'Fatima Yusuf',
      sentTo: 'Grace Ibe',
      date: '08/10/2022',
      status: 'Pending',
    }
  ];

  const summaryStats = [
    {
      label: 'Total request made',
      value: 350,
      icon: '📄',
      color: 'text-blue-500',
    },
    {
      label: 'Total cost incurred',
      value: '5,000,000',
      icon: '💰',
      color: 'text-purple-500',
    },
    {
      label: 'Pending request',
      value: 70,
      icon: '⏳',
      color: 'text-orange-500',
    },
    {
      label: 'Approved request',
      value: 280,
      icon: '✅',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-1">Logistics</h1>
      <p className="mb-7">Make and send logistics request.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {summaryStats.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-2xl shadow ${item.color}`}
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="text-lg font-semibold">{item.value}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6 bg-white rounded-2xl p-4 shadow-md">
      
        <div className="text-xl font-semibold text-gray-800">
          Logistics Request
        </div>

       
        <button
          onClick={() => navigate('/logistics/request')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Make Request
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
  <h2 className="text-xl font-semibold mb-4">All Logistics Requests</h2>

  <div className="overflow-y-auto max-h-[400px]">
  <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
    <thead className="sticky top-0 bg-white">
      <tr>
        <th className="p-2 bg-white">S/N</th>
        <th className="p-2 bg-white">Title</th>
        <th className="p-2 bg-white">Purpose</th>
        <th className="p-2 bg-white">Amount</th>
        <th className="p-2 bg-white">Requested By</th>
        <th className="p-2 bg-white">Sent To</th>
        <th className="p-2 bg-white">Date</th>
        <th className="p-2 bg-white">Status</th>
        <th className="p-2 bg-white">Action</th>
      </tr>
    </thead>

    <tbody>
      {logisticsData.slice(0, 10).map((item, index) => {
        let statusColor = '';

        if (item.status === 'Approved') {
          statusColor = 'text-green-600';
        } else if (item.status === 'Pending') {
          statusColor = 'text-yellow-600';
        } else {
          statusColor = 'text-red-600';
        }

        return (
          <tr
            key={item.id}
            className="bg-white shadow-sm hover:bg-gray-50"
          >
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{item.title}</td>
            <td className="p-2">{item.purpose}</td>
            <td className="p-2">{item.amount}</td>
            <td className="p-2">{item.requestedBy}</td>
            <td className="p-2">{item.sentTo}</td>
            <td className="p-2">{item.date}</td>
            <td className={`p-2 font-medium ${statusColor}`}>
              {item.status}
            </td>
            <td className="p-2 text-blue-500 cursor-pointer">View</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

</div>

    </div>
  );
}
