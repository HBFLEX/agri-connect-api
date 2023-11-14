import React from 'react'
import logo from '../assets/react.svg'
import userLogo from '../assets/user.jpg'

const Navbar = () => {
  return (
    <div className='mb-5'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={logo} width={50} height={50} />
                <form className="d-flex m-auto justify-center">
                    <div className='form-outline'>
                        {/* <i className='fa fa-search'></i> */}
                        <input className="search-input form-control me-2" type="search" placeholder="Search for groups, friends, posts, e.t.c" aria-label="Search" size={50} />
                    </div>
                </form>
                <div className='link' title='inbox'>
                    <i className='navbar-icons me-4 fa fa-comment-alt'></i>
                </div>

                <div className='link' title='notifications'>
                    <i className='navbar-icons me-4 fa fa-bell'></i>
                </div>

                <div className='link' title='profile settings'>
                    <img src={userLogo} width={58} height={58} className='user-profile img-thumbnail' />
                </div>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar