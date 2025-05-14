import { useNavigate } from 'react-router-dom';

const data = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: [
    'Monthly Salary', 'Monthly Salary', 'Monthly Salary', 'Monthly Salary',
    'Monthly Salary', 'Monthly Salary', 'Monthly Salary', 'Monthly Salary', 'Monthly Salary', 'Monthly Salary',
    'Monthly Salary', 'Monthly Salary', 'Monthly Salary', 'Monthly Salary', 'Monthly Salary'
  ][i],
  level: ['Operations Department', 'Accounts Department', 'Operations Department', 'Operations Department', 'Operations Department', 
    'Operations Department', 'Operations Department', 'Operations Department', 'Operations Department', 'Operations Department',
     'Operations Department', 'Operations Department', 'Operations Department', 'Operations Department', 'Operations Department' ][i],
  basic: '30/01/2023',
  allowance: ['January', 'January', 'November', 'January', 'January', 
    'January', 'January', 'January', 'January', 'January',
'January', 'January', 'January', 'January', 'January',][i],
  gross: ['2023', '2023', '2022', '2022', '2022', 
    '2022', '2022', '2022', '2022', '2022', 
    '2022', '2022', '2022', '2022', '2022'][i],
  deductions: ['Pending', 'Pending', 'Paid', 'Paid', 'Paid', 
    'Paid', 'Paid', 'Paid', 'Paid', 'Paid', 
'Paid', 'Paid', 'Paid', 'Paid', 'Paid', ][i],
}));

export default function PayrollTable() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="text-lg font-semibold">Employee Payroll History</div>
        <button
          onClick={() => navigate('/create-payroll-definition')}
          className="bg-blue-700 cursor-pointer text-white px-4 py-2 rounded hover:brightness-150 "
        >
          Generate Payroll
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="max-h-72 overflow-y-auto">
          <table className="min-w-full text-sm table-fixed">
            <thead className="bg-gray-100 text-left sticky top-0 z-10">
              <tr>
                {['S/N', 'Payment name', 'Designation', 'Date Generated', 'Payment month', 'Payment year', 'Status', 'Action'].map((h) => (
                  <th key={h} className="px-4 py-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="px-4 py-2">{`D${row.id}`}</td>
                  <td className="px-4 py-2">{row.title}</td>
                  <td className="px-4 py-2">{row.level}</td>
                  <td className="px-4 py-2">{row.basic}</td>
                  <td className="px-4 py-2">{row.allowance}</td>
                  <td className="px-4 py-2">{row.gross}</td>
                  <td className="px-4 py-2">{row.deductions}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-blue-800 hover:brightness-150 cursor-pointer">View More</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}