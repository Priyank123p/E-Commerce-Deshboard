import React, { useState } from 'react';
import "./Form.css";
import { Link } from 'react-router-dom';
import { FaCcMastercard, FaEnvelope } from "react-icons/fa";
import { FiUploadCloud } from 'react-icons/fi';

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        outlet: '',
        password: '',
        date: '',
        time: '',
        cardNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const formatCard = (value) => {
        const v = value.replace(/\D/g, '').slice(0, 16);
        return v.replace(/(\d{4})(?=\d)/g, '$1 ');
    };

    // Dropzone
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
    };

    return (
        <div className="form-page container">
            <div className="form-header d-flex justify-content-between align-items-center">
                <h2>Form Elements</h2>
                <Link to="/" className="route-home">
                    <button className="btn home-btn">Home</button>
                </Link>
            </div>

            <div className="form-body d-flex mt-4">
                {/* Left Section */}
                <div className="form-left col-md-6">
                    <div className="form-section">
                        <form className="form-block">
                            <h3 className="form-title">Default Inputs</h3>

                            <label className="form-field">
                                <span>Full Name</span>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </label>

                            <label className="form-field">
                                <span>Email (with placeholder)</span>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    type="email"
                                    required
                                />
                            </label>

                            <label className="form-field">
                                <span>Select Input</span>
                                <select name="outlet" value={form.outlet} onChange={handleChange}>
                                    <option value="">Select an option</option>
                                    <option>Marketing</option>
                                    <option>Template</option>
                                    <option>Development</option>
                                </select>
                            </label>

                            <label className="form-field">
                                <span>Password</span>
                                <input
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="Enter a secure password"
                                />
                            </label>

                            <div className="form-row">
                                <label className="form-field half">
                                    <span>Date</span>
                                    <input name="date" value={form.date} onChange={handleChange} type="date" />
                                </label>

                                <label className="form-field half">
                                    <span>Time</span>
                                    <input name="time" value={form.time} onChange={handleChange} type="time" />
                                </label>
                            </div>

                            <label className="form-field payment-field">
                                <span>Card Input</span>
                                <div className="input-icon-wrapper">
                                    <div className="icon-box">
                                        <FaCcMastercard className="mastercard-icon" />
                                    </div>
                                    <input
                                        name="cardNumber"
                                        value={form.cardNumber}
                                        onChange={(e) =>
                                            handleChange({
                                                target: {
                                                    name: "cardNumber",
                                                    value: formatCard(e.target.value),
                                                },
                                            })
                                        }
                                        placeholder="Card number"
                                        inputMode="numeric"
                                        autoComplete="cc-number"
                                    />
                                </div>
                            </label>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div className="form-right col-md-6">
                    {/* Upload File */}
                    <div className="upload-container">
                        <h3 className="form-title">File Input</h3>
                        <label className="upload-field">
                            <span>Upload File</span>
                            <input type="file" className="upload-input" />
                        </label>
                    </div>

                    {/* Checkbox */}
                    <div className="checkbox-section">
                        <h3 className="form-title">Checkbox</h3>
                        <div className="checkbox-group">
                            <label><input type="checkbox" /> Default</label>
                            <label><input type="checkbox" /> Checked</label>
                            <label><input type="checkbox" /> Disabled</label>
                        </div>
                    </div>

                    {/* Radio */}
                    <div className="radio-section">
                        <h3 className="form-title">Radio Buttons</h3>
                        <div className="radio-group">
                            <label><input type="radio" /> Default</label>
                            <label><input type="radio" /> Selected</label>
                            <label><input type="radio" /> Disabled</label>
                        </div>
                    </div>

                    {/* Toggle switch input */}
                    <div className="Toggle-section">
                        <h3 className="form-title">Toggle switch input</h3>
                        <div className="Toggle-group">
                            <label className="toggle">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                Default
                            </label>

                            <label className="toggle">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                Selected
                            </label>

                            <label className="toggle">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                Disabled
                            </label>
                        </div>
                    </div>

                    {/* Dropzone */}
                    <div className="Dropzone-section">
                        <h3 className="form-title">Dropzone</h3>

                        <div className="dropzone-box">
                            <div className="upload-icon">
                                <FiUploadCloud size={36} />
                            </div>
                            <h4 className="drop-text">Drag & Drop Files Here</h4>
                            <p className="sub-text">
                                Drag and drop your PNG, JPG, WebP, SVG images here or browse
                            </p>
                            <label className="browse-file">
                                <input type="file" accept="image/*" onChange={handleFileChange} />
                                Browse File
                            </label>

                            {fileName && <p className="file-name">Uploaded: {fileName}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
