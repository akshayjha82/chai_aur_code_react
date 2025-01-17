import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Container,Logo,Logoutbtn} from '../index'

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status) // returns the status of the user whether it is logged in or not

  const navItems = [
    {
      name : 'Home',
      slug : '/',  // slug mtlb url  kaha jaa rha hai  
      active : true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'/>
          </Link>
          </div>

          <ul className='ml-auto flex'>
            {navItems.map((items) => 
            items.active ? (
              <li key={items.name}>
                <button 
                onClick={() => navigate(items.slug)}
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' >
                {items.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li><Logoutbtn/></li>
          )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header;