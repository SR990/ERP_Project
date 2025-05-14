import React from "react";
import { useNavigate } from "react-router-dom";

const ProcurementRequest = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-blue-700">🧾 Procurement</h2>
                    <p className="text-sm text-gray-500">Request for, and view all recorded procurements.</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">Otor John</span>
                    <span className="text-sm text-gray-400">HR Officer</span>
                    <img src="https://i.pravatar.cc/32" alt="avatar" className="rounded-full w-8 h-8" />
                </div>
            </div>

            {/* Back */}
            <button
                className="text-blue-500 text-sm mb-4"
                onClick={() => navigate("/procurements")}
            >
                ← Back
            </button>

            {/* Procurement Request */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Procurement Request</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input className="input" placeholder="Enter item name" />
                    <input className="input" placeholder="Enter quantity" />
                    <input className="input" type="date" />
                    <input className="input" placeholder="Enter unit price" />
                    <input className="input" placeholder="Enter amount" />
                    <input className="input" disabled value="Otor John" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700">
                        <option disabled selected>Select category</option>
                        <option>Office Supplies</option>
                        <option>Furniture</option>
                        <option>IT Equipment</option>
                        <option>Stationery</option>
                        <option>Services</option>
                    </select>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700">
                        <option disabled selected>Select department</option>
                        <option>Human Resources</option>
                        <option>Finance</option>
                        <option>IT</option>
                        <option>Operations</option>
                        <option>Administration</option>
                    </select>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700">
                        <option disabled selected>Select priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <button
                    onClick={() => navigate("/procurement-detail")}
                    className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded text-xs"
                >
                    Attach Payment Voucher
                </button>
            </div>

            {/* Payment Voucher Table */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Payment Voucher</h3>
                <table className="w-full text-sm text-left border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-2 border">S/N</th>
                            <th className="px-3 py-2 border">Item</th>
                            <th className="px-3 py-2 border">Quantity</th>
                            <th className="px-3 py-2 border">Date</th>
                            <th className="px-3 py-2 border">Unit Price (₦)</th>
                            <th className="px-3 py-2 border">Total Price (₦)</th>
                            <th className="px-3 py-2 border">VAT %</th>
                            <th className="px-3 py-2 border">VAT Amount (₦)</th>
                            <th className="px-3 py-2 border">Gross Amount (₦)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-3 py-2 border">01</td>
                            <td className="px-3 py-2 border">Office chairs</td>
                            <td className="px-3 py-2 border">25</td>
                            <td className="px-3 py-2 border">22/11/2022</td>
                            <td className="px-3 py-2 border">100,000.00</td>
                            <td className="px-3 py-2 border">2,500,000.00</td>
                            <td className="px-3 py-2 border">7.50%</td>
                            <td className="px-3 py-2 border">187,500.00</td>
                            <td className="px-3 py-2 border">2,687,500.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Beneficiary Payment Details */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Beneficiary Payment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input className="input" placeholder="Enter name" />
                    <input className="input" placeholder="Enter number" />
                    <input className="input" placeholder="Enter bank name" />
                </div>
            </div>

            {/* Memo Activities */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Memo Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input className="input" disabled value="Otor John" />
                    <select className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700">
                        <option disabled selected>Select reviewer</option>
                        <option>Mr. Adewale</option>
                        <option>Ms. Susan</option>
                        <option>Dr. Okoro</option>
                    </select>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700">
                        <option disabled selected>Select approver</option>
                        <option>Manager</option>
                        <option>Director</option>
                        <option>CEO</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="input" placeholder="Verifier Signature" />
                    <input className="input" placeholder="Authorizer Signature" />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <button
                    className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded"
                    onClick={() => navigate("/success")}
                >
                    Save and Send for Approval
                </button>

                <button className="border border-gray-400 px-6 py-2 rounded text-gray-700">Save</button>
            </div>

            {/* Footer */}
            <p className="text-center text-gray-400 text-xs mt-12">
                © Copyright © 2022 Relia Energy. All Rights Reserved
            </p>
        </div>
    );
};

export default ProcurementRequest;
