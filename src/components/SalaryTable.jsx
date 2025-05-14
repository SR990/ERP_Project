import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: [
    'Managing Director', 'Executive Director', 'General Manager', 'Deputy General Manager',
    'Asst. General Manager', 'Principal Manager', 'Senior Manager', 'Manager',
    'Deputy Manager', 'Asst. Manager', 'Snr. Executive Officer', 'Serior Developer',
    'Developer', 'Junior Developer', 'Intern'
  ][i],
  level: ['MD/CEO', 'ED', 'GM', 'DGM', 'MD/CEO', 
    'MD/CEO', 'MD/CEO', 'MD/CEO', 'MD/CEO', 'MD/CEO', 
    'MD/CEO', 'ED', 'GM', 'DGM', 'MD/CEO'][i],
  basic: '₦445,331.00',
  allowance: '₦600,000.00',
  gross: '₦1,145,331.00',
  deductions: '₦224,000.00',
  net: '₦224,000.00',
  isEditing: false
}));

export default function SalaryTable() {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editRow, setEditRow] = useState(null);

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleEdit = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, isEditing: true } : row
    );
    setData(updatedData);
  };

  const saveEdit = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, isEditing: false } : row
    );
    setData(updatedData);
  };

  const handleChange = (id, field, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setData(updatedData);
  };

  return (
    <>
      <div className="flex justify-between mb-4 ">
        <div className="text-lg font-semibold">Salary Definition</div>
        <button
          onClick={() => navigate('/create-salary-definition')}
            className="bg-blue-700 cursor-pointer  text-white px-4 py-2 rounded hover:brightness-150 "
          >
            Create Salary Definition
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="max-h-72 overflow-y-auto">
            <table className="min-w-full text-sm table-fixed">
              <thead className="bg-gray-100 text-left sticky top-0 z-10">
                <tr>
                  {['S/N', 'Title', 'Level', 'Basic Salary', 'Allowance', 'Gross Salary', 'Deductions', 'Net Salary', 'Action'].map((h) => (
                    <th key={h} className="px-4 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="border-b">
                    <td className="px-4 py-2">{`D${row.id}`}</td>
                    {['title', 'level', 'basic', 'allowance', 'gross', 'deductions', 'net'].map((field) => (
                      <td key={field} className="px-4 py-2">
                        {row.isEditing ? (
                          <input
                            type="text"
                            value={row[field]}
                            onChange={(e) => handleChange(row.id, field, e.target.value)}
                            className="w-full border rounded px-2 py-1"
                          />
                        ) : (
                          row[field]
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-2 space-x-2">
                      {row.isEditing ? (
                        <button
                          onClick={() => saveEdit(row.id)}
                          className="text-green-800 hover:brightness-150 cursor-pointer"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(row.id)}
                          className="text-blue-800 hover:brightness-150 cursor-pointer"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="text-red-800 hover:brightness-150 cursor-pointer"
                      >
                        Delete
                      </button>
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