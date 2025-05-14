// components/CreatePaymentVoucher.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreatePaymentVoucher({ onBack }) {
  const [rows, setRows] = useState([
    {
      class: 'Consultancy service',
      description: 'FARS',
      qty: 1,
      unitPrice: 1000000,
      vat: 7.5,
      wht: 2.5,
    },
    {
      class: 'Consultancy service',
      description: 'Tax Service',
      qty: 1,
      unitPrice: 500000,
      vat: 7.5,
      wht: 10,
    },
  ]);

  const [subject, setSubject] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();


  const addRow = () => {
    setRows([
      ...rows,
      {
        class: '',
        description: '',
        qty: 1,
        unitPrice: '',
        vat: 7.5,
        wht: 0,
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const calculateTotals = () => {
    return rows.reduce(
      (acc, row) => {
        const amount = row.qty * row.unitPrice;
        const vatAmount = amount * (row.vat / 100);
        const whtAmount = amount * (row.wht / 100);
        const grossAmount = amount + vatAmount;
        const netAmount = grossAmount - whtAmount;

        acc.amount += amount;
        acc.vat += vatAmount;
        acc.wht += whtAmount;
        acc.net += netAmount;
        return acc;
      },
      { amount: 0, vat: 0, wht: 0, net: 0 }
    );
  };

  const { amount, vat, wht, net } = calculateTotals();

  const isSubmitEnabled = accountName && accountNumber && bankName;

  const handleSubmit = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      onBack();
    }, 2000);
  };

  return (
    
    <div className="bg-white p-10 rounded-lg shadow-md text-sm">
        <button
        onClick={() => navigate('/payment-voucher')}
        className="text-blue-600 hover:underline hover:brightness-150 cursor-pointer mb-4"
      >
        ← Back
      </button>
      <h2 className="text-base font-semibold mb-6">Payment Voucher</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Enter subject"
          className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-4 text-sm table-fixed">
          <thead className="border-b text-left">
            <tr className="text-gray-600">
              <th className="py-2 px-1 w-12">QTY</th>
              <th className="py-2 px-1 w-28">Unit Price (₦)</th>
              <th className="py-2 px-1 w-32">Amount (₦)</th>
              <th className="py-2 px-1 w-20">VAT %</th>
              <th className="py-2 px-1 w-32">VAT Amount (₦)</th>
              <th className="py-2 px-1 w-36">Gross Amount (₦)</th>
              <th className="py-2 px-1 w-20">WHT%</th>
              <th className="py-2 px-1 w-32">WHT Amount</th>
              <th className="py-2 px-1 w-36">Net Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const amount = row.qty * row.unitPrice;
              const vatAmount = amount * (row.vat / 100);
              const grossAmount = amount + vatAmount;
              const whtAmount = amount * (row.wht / 100);
              const netAmount = grossAmount - whtAmount;

              return (
                <tr key={index} className="border-b">
                  <td className="py-2 px-1">
                    <input
                      type="number"
                      className="border px-2 py-1 rounded w-full"
                      value={row.qty}
                      onChange={(e) =>
                        handleChange(index, 'qty', Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="py-2 px-1">
                    <input
                      type="number"
                      className="border px-2 py-1 rounded w-full"
                      value={row.unitPrice}
                      onChange={(e) =>
                        handleChange(index, 'unitPrice', Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="py-2 px-1">
                    {amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-2 px-1">{row.vat}%</td>
                  <td className="py-2 px-1">
                    {vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-2 px-1">
                    {grossAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-2 px-1">
                    <input
                      type="number"
                      className="border px-2 py-1 rounded w-full"
                      value={row.wht}
                      onChange={(e) =>
                        handleChange(index, 'wht', Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="py-2 px-1">
                    {whtAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-2 px-1">
                    {netAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button
        onClick={addRow}
        className="flex items-center text-sm border px-4 py-2 rounded-md mb-6 hover:bg-gray-100"
      >
        <span className="mr-1 text-lg font-bold">+</span> Add another row
      </button>

      <div className="flex justify-between font-semibold text-sm mb-4 px-2">
        <div>Total</div>
        <div className="flex gap-12">
          <span>{amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          <span>{vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          <span>{wht.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          <span>{net.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      <div className="border-t border-dashed py-3 text-gray-500 mb-6">
        Net amount in words: ....................................................
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Beneficiary Payment Details</h3>
        <div className="grid grid-cols-3 gap-4">
          <input
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter name"
            className="border px-3 py-2 rounded"
          />
          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter number"
            className="border px-3 py-2 rounded"
          />
          <input
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Enter bank name"
            className="border px-3 py-2 rounded"
          />
        </div>
      </div>

      {showMessage ? (
        <div className="text-green-600 font-semibold">Payment voucher submitted!</div>
      ) : (
        <button
          onClick={handleSubmit}
          className={`px-6 py-2 rounded text-white shadow ${
            isSubmitEnabled
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!isSubmitEnabled}
        >
          Submit Payment Voucher
        </button>
      )}
    </div>
  );
}
