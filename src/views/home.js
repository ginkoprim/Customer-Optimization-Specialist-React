import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Optimization Specialist</title>
        <meta property="og:title" content="Customer Optimization Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
