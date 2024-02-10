import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/d3a7ea3eae38852ccc3740090e25f214.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  const [toogleMenu, setToogleMenu] = useState("hidden")

  return (
    <div className='flex flex-row mt-[43px] px-[16px] py-[8px] justify-center items-center'>
      <div className='Frame36 flex flex-row justify-center w-[60%] max-lg:w-[95%] bg-white bg-opacity-[37] py-[16px] rounded-lg'>
        <nav className='flex flex-row w-[80%]'>
          <div className='logo flex-none'>
            <img src={logo} alt="logo" className='h-[45px]' />
          </div>
          <div className='Frame34 grow flex flex-row justify-end items-center gap-3 max-md:gap-1'>
            <div className='Frame32'>
              <div className='toggle inline-block'>
                <FontAwesomeIcon icon={faGlobe} className='toggle text-[#007BFF]' />
                <lable className="text-[16px] font-[600]">EN</lable>
              </div>
            </div>
            <div className='max-sm:hidden Frame3 flex flex-row gap-3 items-center'>
              {/* <Link to="" className='link rounded-[9px] border p-[10px] text-[16px] font-[600] font-[Text md/Semibold] text-[#007BFF]'>Create Account</Link> */}
              <Link className="text-[#007BFF] font-bold p-[10px] border-2 rounded-lg shadow-lg">
                Create Account
              </Link>
              <Link className='Frame2' to="">
                <button className='link2 px-[12px] py-[10px] border rounded-[8px] border-[#66B1FF] bg-[#007BFF] font-[600] text-[16px] text-white'>Login</button>
              </Link>
            </div>
            <div className="relative text-left hidden max-sm:inline-block" onClick={() => { setToogleMenu(toogleMenu === "hidden" ? "" : "hidden") }}>
              <div className='p-[10px] border rounded-md shadow hover:bg-gray-100'>
                <FontAwesomeIcon icon={faBars}/>
              </div>

              <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${toogleMenu}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <Link href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Login</Link>
                  <Link href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-1">Create Account</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav;