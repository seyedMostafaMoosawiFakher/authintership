import React from 'react'
import './AuthImage.css'
import IMAGE from '../../Assets/Images/auth.jpg'
const AuthImage = () => {
    return (
        <div className="image-container">
            <img className="auth-image" src={IMAGE} alt='image' />
        </div>
    )
}

export default AuthImage
