import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBudget = () => {
    const [formData, setFormData] = useState({
        number: '',
        description: '',
        amount: '',
        date: '',
        office: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreate = () => {
        if (Object.values(formData).some((val) => val === '')) return;
        setSubmitted(true);
    };

    const handleSubmitApproval = () => {
        navigate('/success'); // Navigate to Success page
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <button onClick={() => navigate(-1)} className="text-blue-600 text-sm mb-4">&larr; Back</button>

            <div className="bg-white p-6 rounded shadow">
                <h1 className="text-xl font-semibold mb-1">Create Budget</h1>
                <p className="text-sm text-gray-500 mb-4">Kindly fill in the form below to create a budget</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Enter item"
                        className="border rounded px-3 py-2"
                    />
                    <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        className="border rounded px-3 py-2"
                    />
                    <input
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount in ₦"
                        className="border rounded px-3 py-2"
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                    />
                    <select
                        name="office"
                        value={formData.office}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                    >
                        <option value="">Select option</option>
                        <option value="HR Office">HR Office</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>

                <button
                    onClick={handleCreate}
                    className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded shadow"
                >
                    Create Budget
                </button>
            </div>

            {submitted && (
                <div className="mt-6 bg-white p-6 rounded shadow">
                    <h2 className="text-sm font-semibold mb-4">Budget Request</h2>
                    <table className="w-full text-left text-sm">
                        <thead className="text-gray-600 border-b">
                            <tr>
                                <th className="p-2">S/N</th>
                                <th className="p-2">Budget No.</th>
                                <th className="p-2">Budget Description</th>
                                <th className="p-2">Budget Amount (₦)</th>
                                <th className="p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-2">01</td>
                                <td className="p-2">{formData.number}</td>
                                <td className="p-2">{formData.description}</td>
                                <td className="p-2">{formData.amount}</td>
                                <td className="p-2">{formData.date}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button
                        onClick={handleSubmitApproval}
                        className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded"
                    >
                        Submit for Approval
                    </button>
                </div>
            )}

            <p className="text-center text-xs text-gray-400 mt-10">
                © 2022 Relia Energy. All Rights Reserved
            </p>
        </div>
    );
};

export default CreateBudget;
