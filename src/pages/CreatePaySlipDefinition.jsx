import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreatePaySlipDefinition() {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    staffName: '',
    title: '',
    level: '',
    basicSalary: '',
    housingAllowance: '',
    transportAllowance: '',
    utilityAllowance: '',
    productivityAllowance: '',
    communicationAllowance: '',
    inconvenienceAllowance: '',
    grossSalary: '',
    taxPaye: '',
    employeePension: '',
    totalDeductions: '',
    netSalary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    navigate('/payslip-view', { state: formData }); // Pass form data to PayslipView
  };

  return (
    <div className="flex-1 p-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 hover:brightness-150 cursor-pointer mb-4 hover:underline">
        ← Back
      </button>

      <h1 className="text-xl font-bold mb-4">Create Payslip</h1>

      {/* Staff Details */}
      <h2 className="text-md font-semibold mb-2">Basic Information</h2>
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Staff Name</label>
          <select
            name="staffName"
            onChange={handleChange}
            value={formData.staffName}
            className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black"
          >
            <option value="" disabled>
              Select Staff
            </option>
            <option>Staff 1</option>
            <option>Staff 2</option>
            <option>Staff 3</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <select
            name="title"
            onChange={handleChange}
            value={formData.title}
            className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black"
          >
            <option value="" disabled>
              Select Title
            </option>
            <option>Managing Director</option>
            <option>General Manager</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Level</label>
          <select
            name="level"
            onChange={handleChange}
            value={formData.level}
            className="w-full border rounded-lg px-3 py-2 text-gray-400 border-black"
          >
            <option value="" disabled>
              Select Level
            </option>
            <option>MD/CEO</option>
            <option>DGM</option>
          </select>
        </div>
      </div>

      {/* Salary Structure */}
      <h2 className="text-md font-semibold mb-2">Salary Structure</h2>
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
  <label className="block mb-1 font-medium">Basic Salary</label>
  <input
    type="number"
    name="basicSalary"
    onChange={handleChange}
    value={formData.basicSalary}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Housing Allowance</label>
  <input
    type="number"
    name="housingAllowance"
    onChange={handleChange}
    value={formData.housingAllowance}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Transport Allowance</label>
  <input
    type="number"
    name="transportAllowance"
    onChange={handleChange}
    value={formData.transportAllowance}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Utility Allowance</label>
  <input
    type="number"
    name="utilityAllowance"
    onChange={handleChange}
    value={formData.utilityAllowance}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Productivity Allowance</label>
  <input
    type="number"
    name="productivityAllowance"
    onChange={handleChange}
    value={formData.productivityAllowance}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Communication Allowance</label>
  <input
    type="number"
    name="communicationAllowance"
    onChange={handleChange}
    value={formData.communicationAllowance}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Inconvenience Allowance</label>
  <input
    type="number"
    name="inconvenienceAllowance"
    onChange={handleChange}
    value={formData.inconvenienceAllowance}
    className="w-full border rounded-lg px-3 py-2"
    placeholder="Enter amount"
  />
</div>

<div>
  <label className="block mb-1 font-medium">Gross Salary</label>
  <input
    type="number"
    name="grossSalary"
    onChange={handleChange}
    value={formData.grossSalary}
    className="w-full border rounded-lg bg-gray-200 px-3 py-2"
    placeholder="Amount"
  />
</div>

      </div>

      {/* Deductions */}
     <h2 className="text-md font-semibold mb-2">Deductions</h2>
<div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>
    <label className="block mb-1 font-medium">Tax/PAYE</label>
    <input
      type="number"
      name="taxPaye"
      onChange={handleChange}
      value={formData.taxPaye}
      className="w-full border rounded-lg px-3 py-2"
      placeholder="Enter amount"
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">Employee Pension</label>
    <input
      type="number"
      name="employeePension"
      onChange={handleChange}
      value={formData.employeePension}
      className="w-full border rounded-lg px-3 py-2"
      placeholder="Enter amount"
    />
  </div>

  <div>
    <label className="block mb-1 font-medium">Total Deduction</label>
    <input
      type="number"
      name="totalDeduction"
      onChange={handleChange}
      value={formData.totalDeduction}
      className="w-full border rounded-lg bg-gray-200 px-3 py-2"
      placeholder="Amount"
    />
  </div>
</div>


      {/* Net Salary */}
      <h2 className="text-md font-semibold mb-2">Net Salary</h2>
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-medium">Net Salary</label>
          <input
            type="number"
            name="netSalary"
            onChange={handleChange}
            value={formData.netSalary}
            className="w-full border bg-gray-200 rounded-lg px-3 py-2"
            placeholder="Amount"
          />
        </div>
      </div>

      <div className="flex items-end">
        <button onClick={handleSubmit} className="hover:brightness-150 cursor-pointer w-60 ml-6 mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded">
          Create
        </button>
      </div>
    </div>
  );
}
