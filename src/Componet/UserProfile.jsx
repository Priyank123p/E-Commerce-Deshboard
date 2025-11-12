import React, { useState } from 'react'
import "./UserProfile.css"
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram, FaPen, FaTwitter } from 'react-icons/fa6'

const UserProfile = () => {

  const [profileImage, setProfileImage] = useState("public/Img/IMG_20220224_123836_029.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className='container UserProfile-page'>
      <div className="d-flex justify-content-between align-items-center Transactions-heading">
        <h2>Profile</h2>
        <Link to="/" className="route-home">
          <button className="btn home-btn">Home</button>
        </Link>
      </div>

      <div className='Profile'>
        <h2>Profile</h2>

        {/* Profile-Details */}
        <div className='Profile-Details d-flex'>
          <div className='profile-card'>
            <div className="profile-left">
              {/* Hidden file input */}
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                <img
                  src={profileImage}
                  alt="User"
                  className="profile-image"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #ddd",
                  }}
                />
              </label>

              <div className="profile-info">
                <h4 className="profile-name">Priyank Patel</h4>
                <p className="profile-role">
                  Team Manager <span>|</span> Arizona, United States
                </p>
              </div>
            </div>

            <div className='profile-right'>
              <div className='social-icons'>
                <a href='https://www.facebook.com/' className='icon icon-facebook' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook />
                </a>
                <a href='https://twitter.com/' className='icon icon-twitter' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter />
                </a>
                <a href='https://www.linkedin.com/' className='icon icon-linkedin' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn />
                </a>
                <a href='https://www.instagram.com/' className='icon icon-instagram' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram />
                </a>
              </div>

              <Link to="/editprofile">
                <button className='edit-btn'>
                  <i className='fas fa-pen'><FaPen /></i> Edit
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className='Personal-Info-Card'>
          <div className='Personal-Info-Header'>
            <h3>Personal Information</h3>
          </div>

          <div className='Personal-Info-Body'>
            <div className='info-row'>
              <div className='info-item'>
                <label>First Name</label>
                <p>Priyank</p>
              </div>
              <div className='info-item'>
                <label>Last Name</label>
                <p>Patel</p>
              </div>
            </div>

            <div className='info-row'>
              <div className='info-item'>
                <label>Email address</label>
                <p>randomuser@pimjo.com</p>
              </div>
              <div className='info-item'>
                <label>Phone</label>
                <p>+09 363 398 46</p>
              </div>
            </div>

            <div className='info-row'>
              <div className='info-item'>
                <label>Bio</label>
                <p>Team Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className='Address'>
          <div className='Address-Header'>
            <h3>Address</h3>
          </div>

          <div className='Personal-Info-Body'>
            <div className='info-row'>
              <div className='info-item'>
                <label>Country</label>
                <p>United States.</p>
              </div>
              <div className='info-item'>
                <label>City/State</label>
                <p>Phoenix, Arizona, United States.</p>
              </div>
            </div>

            <div className='info-row'>
              <div className='info-item'>
                <label>Postal Code</label>
                <p>ERT 2489</p>
              </div>
              <div className='info-item'>
                <label>TAX ID</label>
                <p>AS4568384</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile