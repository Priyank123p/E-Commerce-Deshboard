import React from 'react'
import "./UserProfile.css"
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram, FaPen, FaTwitter } from 'react-icons/fa6'

const UserProfile = () => {
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
            <div className='profile-left'>
              <img
                src="public/Img/IMG_20220224_123836_029.jpg"
                alt="User"
                className="profile-image"
              />
              <div className='profile-info'>
                <h4 className='profile-name'>Musharof Chowdhury</h4>
                <p className='profile-role'>Team Manager <span>|</span> Arizona, United States</p>
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

              <button className='edit-btn'>
                <i className='fas fa-pen'><FaPen /></i> Edit
              </button>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className='Personal-Info-Card'>
          <div className='Personal-Info-Header'>
            <h3>Personal Information</h3>
            <button className='edit-btn'>
              <i className='fas fa-pen'><FaPen /></i> Edit
            </button>
          </div>

          <div className='Personal-Info-Body'>
            <div className='info-row'>
              <div className='info-item'>
                <label>First Name</label>
                <p>Musharof</p>
              </div>
              <div className='info-item'>
                <label>Last Name</label>
                <p>Chowdhury</p>
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
            <button className='edit-btn'>
              <i className='fas fa-pen'><FaPen /></i> Edit
            </button>
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