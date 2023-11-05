import React from 'react'

export default function Banner() {
  return (
    <div>
     <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xmdMnTY/Assignment-banner.webp)' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Assignment Assist</h1>
      <p className="mb-5">Welcome to our friendly assignment hub, where we come together to support each other's academic journey.   Let's make our assignments the best they can be!</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    </div>

  )
}
