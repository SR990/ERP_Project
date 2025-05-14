import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateMemo = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [showVoucher, setShowVoucher] = useState(false);

    const [formData, setFormData] = useState({
        sentTo: '',
        action: '',
        attachmentType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-[#f8f9fb] p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-[#212B36]">📘 Create Memo</h1>
                    <p className="text-sm text-gray-500">Create and send memos to designated offices.</p>
                    <button onClick={() => navigate(-1)} className="text-sm text-blue-500 mt-2 flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div />
                    <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-700">Otor John</p>
                        <p className="text-xs text-gray-500">HR Office</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Create Memo</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Memo title</label>
                        <input type="text" placeholder="Enter title" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Sent from</label>
                        <input value="Otor John" readOnly className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Sent to</label>
                        <div className="relative">
                            <select name="sentTo" value={formData.sentTo} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none">
                                <option value="">Select option</option>
                                <option value="Chief Operations Officer">Chief Operations Officer</option>
                                <option value="Finance Department">Finance Department</option>
                                <option value="IT Department">IT Department</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="col-span-2 flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Action</label>
                            <div className="relative">
                                <select name="action" value={formData.action} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none">
                                    <option value="">Select option</option>
                                    <option value="Review">Review</option>
                                    <option value="Approve">Approve</option>
                                    <option value="Forward">Forward</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <div className="relative">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                placeholderText="DD/MM/YYYY"
                            />

                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Add attachment?</label>
                        <div className="relative">
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Attachment type</label>
                        <div className="relative">
                            <select name="attachmentType" value={formData.attachmentType} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none">
                                <option value="">Select type</option>
                                <option value="PDF">PDF</option>
                                <option value="Image">Image</option>
                                <option value="Document">Document</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="col-span-3">
                        <label className="block text-sm font-medium mb-1">Memo body</label>
                        <textarea rows="4" placeholder="Enter subject" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-md font-medium"
                        onClick={() => setShowVoucher(true)}
                    >
                        Attach Payment Voucher
                    </button>
                    <button
                        onClick={() => navigate('/success')}
                        className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md font-medium"
                    >
                        Send Memo
                    </button>
                </div>
            </div>

            {/* Payment Voucher Preview */}
            {showVoucher && (
                <div className="mt-10 bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Operations Memo</h3>
                    <p><strong>Date:</strong> 21/12/2022</p>
                    <p><strong>From:</strong> Otuk John Stephen</p>
                    <p><strong>To:</strong> Abubari Abigael</p>
                    <p><strong>CC1:</strong> Fatimah Mohammed</p>
                    <p><strong>CC2:</strong> Sadiq Lukman</p>
                    <p><strong>CC3:</strong> James Nwoke Jnr.</p>
                    <p><strong>Attachment:</strong> No</p>
                    <p className="mt-4"><strong>Memo Message:</strong> Lorem ipsum dolor sit amet consectetur...</p>

                    <div className="border-t mt-6 pt-4">
                        <div className="text-center mb-4">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.QrXqKG_hGsR9qOSODO8m2QHaGw&pid=Api&P=0&h=180" alt="Logo" className="mx-auto mb-2" />
                            <p className="text-sm">Relia Energy</p>
                        </div>

                        <p className="text-sm mb-2">28th October, 2022</p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="border border-gray-300 rounded-sm p-2 w-fit bg-white">
                                <p className="text-xs font-semibold mb-1">BILL TO:</p>
                                <p className="text-xs leading-tight">
                                    THE MANAGING DIRECTOR<br />
                                    NOCAPA LIMITED<br />
                                    Plot 12a Dantata<br />
                                    Asokoro, ABUJA, FCT
                                </p>
                            </div>

                            <div className="text-sm text-right">
                                <p><strong>RC NO:</strong> 9876501</p>
                                <p><strong>CONTRACT:</strong> For the Provision of Electrical Services at Relia Energy Ltd.</p>
                                <p><strong>INVOICE NUMBER:</strong> INV-0001</p>
                            </div>
                        </div>

                        <table className="w-full text-sm border mt-2 mb-4">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-2 py-1">SN</th>
                                    <th className="border px-2 py-1">SUBJECT</th>
                                    <th className="border px-2 py-1">DESCRIPTION</th>
                                    <th className="border px-2 py-1">QUANTITY</th>
                                    <th className="border px-2 py-1">RATE</th>
                                    <th className="border px-2 py-1">AMOUNT (NGN)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-2 py-1 text-center">1</td>
                                    <td className="border px-2 py-1">ELECTRICAL</td>
                                    <td className="border px-2 py-1">Panel Installation</td>
                                    <td className="border px-2 py-1 text-center">1</td>
                                    <td className="border px-2 py-1 text-right">₦200,000</td>
                                    <td className="border px-2 py-1 text-right">₦200,000</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="text-sm mb-2"><strong>Total:</strong> ₦200,000</p>
                        <p className="text-sm italic">Amount in words: Two hundred thousand naira only</p>

                        <div className="mt-4 text-sm">
                            <p><strong>Account Name:</strong> RELIA ENERGY LIMITED</p>
                            <p><strong>Account Number:</strong> 1234567890</p>
                            <p><strong>Bank:</strong> Zenith Bank</p>
                            <p><strong>Branch:</strong> Central Business District - Abuja</p>
                        </div>

                        <div className="mt-4 flex justify-between text-sm">
                            <p>By: Fatimah Mohammed</p>
                            <p>Signature: ____________</p>
                        </div>

                        {/* Submit for Approval Button */}
                        <div className="mt-6 text-right">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md"
                                onClick={() => navigate('/success', { state: { message: 'Your memo has been submitted for approval successfully.' } })} // Navigate to success page
                            >
                                Submit for Approval
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <footer className="mt-8 text-center text-xs text-gray-500">
                Copyright © 2022 Relia Energy. All Rights Reserved
            </footer>
        </div>
    );
};

export default CreateMemo;
