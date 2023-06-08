import React from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"
import "./LandingPage.css"
function LandingPage() {
    
  return (
    <div>
        <header>
            <img src="/images/project-logo.png" alt="" />
        </header>
        <div className='Hero'>
            <div className="txt"><h1>We connect influencers with relevant businesses that offer commissions and rewards for promoting their items to the proper audiences.</h1>
           
            <div className="btn">
            <button className='first'>Are You a Influencer?</button>
            <button className='second'>Are You a Business?</button>
            </div>
            </div>
           <div className="img"><img src="/images/—Pngtree—illustration women influencer social media_6443906.png" alt="Influencer Marketing" /></div>
        </div>
    </div>
  )
}

export default LandingPage