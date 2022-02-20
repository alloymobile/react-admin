import React from 'react'
import AppIconLink from './AppIconLink'

function AppNavbar({appNavbar}) {
  return (
    <>  
        <div className="container-fluid sticky-top bg-light">
            <header
                className=" 
                d-flex
                flex-wrap
                align-items-center
                justify-content-center justify-content-md-between
                border-bottom"
            >
                <AppIconLink appIconLink={appNavbar.brand}/>
                <div className="col-md-3 text-center">
                    {appNavbar.actionLinks.map((link,index)=><AppIconLink key={index} appIconLink={link}/>)}
                </div>
            </header>
        </div>
    </>    
  )
}

export default AppNavbar