import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import SalaryTable from './SalaryTable';
import { FiDatabase } from 'react-icons/fi';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import TaxTable from './TaxTable';
import PayslipTable from './PayslipTable';
import PayrollTable from './PayrollTable';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Net Salary',
      data: [300000, 350000, 370000, 380000, 390000, 400000, 410000, 420000, 430000, 440000, 450000, 460000],
      backgroundColor: '#3B82F6', // blue
      stack: 'combined',
      barThickness: 10, 
    },
    {
      label: 'Loan',
      data: [20000, 19000, 22500, 28000, 37500, 17000, 26500, 30000, 25500, 35000, 24500, 14000],

      backgroundColor: '#A855F7', // purple
      stack: 'combined',
      barThickness: 10, 
    },
    {
      label: 'Tax',
      data: [40000, 45000, 47000, 49000, 51000, 50000, 48000, 47000, 46000, 45000, 44000, 43000],
      backgroundColor: '#F59E0B', // orange
      stack: 'combined',
      barThickness: 10, 
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 0,
        bottomRight: 0,
      },
    },
  ],
};

export default function SalaryChart() {
  const [activeTable, setActiveTable] = useState('');

  const toggleTable = (tableName) => {
    setActiveTable((prevTable) => (prevTable === tableName ? '' : tableName));
  };

  return (
    <>
      
      <div className="grid grid-cols-1 md:grid-cols-2 w-300 mt-6 ml-8 gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute top-4 right-4 bg-yellow-100 p-2 rounded-full">
              <FiDatabase className="text-yellow-500" />
            </div>
            <h4 className="text-lg font-semibold">5,205,350.00</h4>
            <p className="text-sm text-gray-500">Gross salary this month</p>
            <p className="text-green-500 text-xs flex items-center">
              <BsArrowUp className="mr-1" /> 2% more than last month
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute top-4 right-4 bg-blue-100 p-2 rounded-full">
              <FiDatabase className="text-blue-500" />
            </div>
            <h4 className="text-lg font-semibold">4,550,350.00</h4>
            <p className="text-sm text-gray-500">Net salary this month</p>
            <p className="text-green-500 text-xs flex items-center">
              <BsArrowUp className="mr-1" /> 2.1% more than last month
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute top-4 right-4 bg-orange-100 p-2 rounded-full">
              <FiDatabase className="text-orange-500" />
            </div>
            <h4 className="text-lg font-semibold">550,350.00</h4>
            <p className="text-sm text-gray-500">Total tax this month</p>
            <p className="text-red-500 text-xs flex items-center">
              <BsArrowDown className="mr-1" /> 2.1% less than last month
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute top-4 right-4 bg-purple-100 p-2 rounded-full">
              <FiDatabase className="text-purple-500" />
            </div>
            <h4 className="text-lg font-semibold">150,350.00</h4>
            <p className="text-sm text-gray-500">Total loan this month</p>
            <p className="text-red-500 text-xs flex items-center">
              <BsArrowDown className="mr-1" /> 1.5% less than last month
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Annual payroll summary</h3>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
              },
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => `${value / 1000}k`,
                  },
                },
              },
            }}
            data={data}
          />
        </div>
      </div>

      <div className="flex space-x-5 text-sm font-medium w-300 mt-6 ml-8 text-gray-500 border-b border-gray-200 pb-2">
        <button
        className={`px-4 py-2 transition cursor-pointer ${
            activeTable === 'Salary Breakdown' ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
        }`}
        onClick={() => toggleTable('Salary Breakdown')}
        >
        Salary Breakdown
        </button>
                <button
        className={`px-4 py-2 transition cursor-pointer ${
            activeTable === 'Tax Definitions' ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
        }`}
        onClick={() => toggleTable('Tax Definitions')}
        >
        Tax Definitions
        </button>

        <button
        className={`px-4 py-2 transition cursor-pointer ${
            activeTable === 'Payslips' ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
        }`}
        onClick={() => toggleTable('Payslips')}
        >
        Payslips
        </button>

        <button
        className={`px-4 py-2 transition cursor-pointer ${
            activeTable === 'Payroll' ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
        }`}
        onClick={() => toggleTable('Payroll')}
        >
        Payroll
        </button>
      </div>

      {activeTable === 'Salary Breakdown' && (
        <div className="bg-white p-4 rounded-lg shadow-sm border w-300 ml-8 mt-6 ">
          <SalaryTable />
        </div>
      )}
      {activeTable === 'Tax Definitions' && (
        <div className="bg-white p-4 rounded-lg shadow-sm border w-300 ml-8 mt-6">
          <TaxTable />
        </div>
      )}
      {activeTable === 'Payslips' && (
        <div className="bg-white p-4 rounded-lg shadow-sm border w-300 ml-8 mt-6">
          <PayslipTable />
        </div>
      )}
      {activeTable === 'Payroll' && (
        <div className="bg-white p-4 rounded-lg shadow-sm border ml-8 w-300 mt-6">
          <PayrollTable />
        </div>
      )}
    </>
  );
}
