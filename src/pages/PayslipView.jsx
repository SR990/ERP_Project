import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function PayslipView() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state;

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...initialData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEditMode = () => setEditMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 text-sm font-sans text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:brightness-150 cursor-pointer mb-6 hover:underline"
      >
        ← Back
      </button>

      {/* Header Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6 w-290 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{formData.staffName}</h2>
          <p className="text-sm text-gray-600">
            {formData.title} | {formData.level}
          </p>
        </div>
        <button
          onClick={toggleEditMode}
          className="bg-gradient-to-r hover:brightness-150 cursor-pointer from-blue-500 to-indigo-600 text-white px-6 py-2 rounded shadow transition"
        >
          {editMode ? 'Save' : 'Edit payslip'}
        </button>
      </div>

      {/* Salary Structure */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="grid md:grid-cols-3 gap-0 text-sm">
          <div className="col-span-2">
            <table className="w-180 h-100 border border-gray-200">
              <thead>
                <tr className="bg-[#1F2937] text-white">
                  <th className="text-left p-2 font-medium">Salary Structure</th>
                  <th className="text-left p-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'basicSalary',
                  'housingAllowance',
                  'transportAllowance',
                  'utilityAllowance',
                  'productivityAllowance',
                  'communicationAllowance',
                  'inconvenienceAllowance',
                ].map((field) => (
                  <tr key={field} className="border-t">
                    <td className="p-2 capitalize">
                      {field.replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td className="p-2">
                      {editMode ? (
                        <input
                          type="number"
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full border px-2 py-1 rounded"
                        />
                      ) : (
                        formData[field]
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-t font-semibold">
                  <td className="p-2">Gross Salary</td>
                  <td className="p-2">
                    {editMode ? (
                      <input
                        type="number"
                        name="grossSalary"
                        value={formData.grossSalary}
                        onChange={handleChange}
                        className="w-full border px-2 py-1 rounded"
                      />
                    ) : (
                      formData.grossSalary
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deductions */}
          <div>
            <table className="w-full h-55 border border-gray-200">
              <thead>
                <tr className="bg-[#1F2937] text-white">
                  <th className="text-left p-2 font-medium">Deductions</th>
                  <th className="text-left p-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'taxPaye',
                  'employeePension',
                  'totalDeduction',
                ].map((field) => (
                  <tr key={field} className="border-t">
                    <td className="p-2 capitalize">
                      {field.replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td className="p-2">
                      {editMode ? (
                        <input
                          type="number"
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full border px-2 py-1 rounded"
                        />
                      ) : (
                        formData[field]
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-t bg-blue-50 font-semibold border-blue-400">
                  <td className="p-2">Net Salary</td>
                  <td className="p-2">
                    {editMode ? (
                      <input
                        type="number"
                        name="netSalary"
                        value={formData.netSalary}
                        onChange={handleChange}
                        className="w-full border px-2 py-1 rounded"
                      />
                    ) : (
                      formData.netSalary
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Net Salary in Words */}
        <div className="mt-6 text-sm font-medium">
          Net Salary in Words:{' '}
          <span className="ml-2">{formData.netSalary} Naira Only</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 mt-8">
        Copyright © 2022 Relia Energy. All Rights Reserved
      </footer>
    </div>
  );
}
