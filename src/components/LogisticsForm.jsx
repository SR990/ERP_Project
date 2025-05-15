import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LogisticsForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    purpose: '',
    department: '',
    destination: '',
    amount: '',
    dateOfDeparture: '',
    dateOfReturn: '',
    beneficiaryName: '',
    bankName: '',
    accountNumber: '',
    directorApproval: '',
    voucherNumber: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    navigate('/success');
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/logistics')}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Make Logistics Request</h1>

      <div className="max-h-[80vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold md:col-span-2 mb-2">
              Request Information
            </h2>

            <div>
              <label className="block font-medium">Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Request Title"
              />
            </div>

            <div>
              <label className="block font-medium">Purpose</label>
              <input
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Purpose"
              />
            </div>

            <div>
              <label className="block font-medium">Department</label>
              <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Department"
              />
            </div>

            <div>
              <label className="block font-medium">Destination</label>
              <input
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="example:Delhi"
              />
            </div>

            <div>
              <label className="block font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="₹"
              />
            </div>

            <div>
              <label className="block font-medium">Date of Departure</label>
              <input
                type="date"
                name="dateOfDeparture"
                value={formData.dateOfDeparture}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium">Date of Return</label>
              <input
                type="date"
                name="dateOfReturn"
                value={formData.dateOfReturn}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold md:col-span-2 mb-2">
              Payment Voucher
            </h2>

            <div>
              <label className="block font-medium">Voucher Number</label>
              <input
                name="voucherNumber"
                value={formData.voucherNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="e.g., VCH-001"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold md:col-span-2 mb-2">
              Beneficiary Payment Details
            </h2>

            <div>
              <label className="block font-medium">Beneficiary Name</label>
              <input
                name="beneficiaryName"
                value={formData.beneficiaryName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label className="block font-medium">Bank Name</label>
              <input
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Bank Name"
              />
            </div>

            <div>
              <label className="block font-medium">Account Number</label>
              <input
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Enter Account Number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Director's Approval</h2>

            <div>
              <label className="block font-medium">
                Approval Status / Comments
              </label>
              <textarea
                name="directorApproval"
                value={formData.directorApproval}
                onChange={handleChange}
                rows={4}
                className="w-full border p-2 rounded"
                placeholder="Approval remarks..."
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Submit Logistics Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
