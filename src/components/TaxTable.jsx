import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: [
    'NHIS', 'VAT', 'WHT', 'NHIS',
    'VAT', 'WHT', 'NHIS', 'VAT', 'WHT', 'NHIS',
    'VAT', 'WHT', 'NHIS', 'VAT', 'WHT'
  ][i],
  level: ['2%', '2.5%', '5%', '2%', '2.5%',
     '5%', '2%', '2.5%', '5%', '2%', '2.5%',
      '5%', '2%', '2.5%', '5%'][i],
  
}));

export default function TaxTable() {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);

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

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <div className="text-lg font-semibold">Tax Definition</div>
        <button
          onClick={() => navigate('/create-tax-definition')}
          className="bg-blue-700 cursor-pointer text-white px-4 py-2 rounded hover:brightness-150 "
        >
          Create Tax Definition
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="max-h-72 overflow-y-auto">
          <table className="min-w-full text-sm table-fixed">
            <thead className="bg-gray-100 text-left sticky top-0 z-10">
              <tr>
                {['S/N', 'Tax Type', '% Value', 'Action'].map((h) => (
                  <th key={h} className="px-4 py-2">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="px-4 py-2">{`D${row.id}`}</td>
                  <td className="px-4 py-2">
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.title}
                        onChange={(e) => handleChange(row.id, 'title', e.target.value)}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      row.title
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {row.isEditing ? (
                      <input
                        type="text"
                        value={row.level}
                        onChange={(e) => handleChange(row.id, 'level', e.target.value)}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      row.level
                    )}
                  </td>
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