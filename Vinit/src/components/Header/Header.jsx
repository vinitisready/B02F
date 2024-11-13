import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    

      <Header >

      <div>
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/public/images/image 1.png')",
        }}
      
        
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative container mx-auto flex items-center justify-center h-full px-4">
          <div className="text-center text-white">
            
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Navigate Your Academic Journey with Confidence
            </h1>
      
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Providing high-quality and comprehensive assistance with assignments
              and thesis writing for students at all academic levels
            </h2>
          </div>
        </div>
      </div>
      </Header>
    

  )
}

export default Header