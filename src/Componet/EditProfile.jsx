import React, { useState } from 'react';

const EditProfile = () => {
    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        bio: '',
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile:", profile);
        alert("Profile updated! (Check console)");
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-light">
            <div className="bg-white shadow rounded-4 p-4" style={{ width: "500px" }}>
                <h2 className="text-center mb-4 fw-bold fs-3">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">FirstName</label>
                        <input
                            type="text"
                            name="firstname"
                            value={profile.firstname}
                            onChange={handleChange}
                            placeholder="Enter your firstname"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">LastName</label>
                        <input
                            type="text"
                            name="lastname"
                            value={profile.lastname}
                            onChange={handleChange}
                            placeholder="Enter your lastname"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-secondary fw-bold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-secondary fw-bold">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-secondary fw-bold">Bio</label>
                        <input
                            type="text"
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            placeholder="Enter your Bio"
                            className="form-control"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>

    );
};

export default EditProfile;
