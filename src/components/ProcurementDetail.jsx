import React from "react";
import { useNavigate } from "react-router-dom";

const ProcurementDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
                <button
                    className="text-blue-600 text-sm font-medium"
                    onClick={() => navigate("/procurements")}
                >
                    ← Back
                </button>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">Otor John</span>
                    <span className="text-sm text-gray-400">HR Officer</span>
                    <img src="https://i.pravatar.cc/32" alt="avatar" className="rounded-full w-8 h-8" />
                </div>
            </div>

            {/* Procurement Info */}
            <div className="bg-white p-6 rounded shadow mb-6 space-y-2 text-sm">
                <p><strong>Item:</strong> Office Chairs</p>
                <p><strong>Quantity:</strong> 10</p>
                <p><strong>Unit Price:</strong> ₦60,000.00</p>
                <p><strong>Total Price:</strong> ₦600,000.00</p>
                <p><strong>Date:</strong> 31/10/2022</p>
                <p><strong>Requested By:</strong> Otor Idoko Stephen</p>
                <p><strong>Sent To (Firms):</strong> Mohammed</p>
                <p><strong>Request Status:</strong> <span className="text-yellow-600 font-medium">Pending</span></p>
                <p><strong>Attachment:</strong> Yes</p>
            </div>



            {/* Action Form */}
            <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row gap-4 items-center justify-between">
                <select className="border px-3 py-2 rounded w-full md:w-1/4 text-sm">
                    <option>Select an action</option>
                    <option>Approve</option>
                    <option>Reject</option>
                </select>
                <input
                    type="text"
                    placeholder="Remarks"
                    className="border px-3 py-2 rounded w-full md:w-2/4 text-sm"
                />
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded text-sm"
                    onClick={() => navigate("/")}
                >
                    Submit
                </button>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-gray-400 mt-10">
                Copyright © 2025 RedStraw Technologies. All rights reserved.
            </p>
        </div>
    );
};

export default ProcurementDetail;
