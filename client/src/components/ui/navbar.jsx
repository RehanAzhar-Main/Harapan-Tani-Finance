// 'use client';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';

import { CapitalizeWord } from '../../utils/FormatWord';

export default function NavbarWithDropdown(props) {

  return (
    <Navbar
      fluid 
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://image.similarpng.com/very-thumbnail/2020/12/Lorem-ipsum-logo-design-on-transparent-PNG.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Harapan Tani Finance
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-md font-medium">
              {CapitalizeWord(props.profile.name)}
            </span>
            <span className="block truncate text-sm ">
              {props.profile.email}
            </span>
          </Dropdown.Header>
          <p className='text-sm font-medium px-4 py-1'>
            Your Profile
          </p>
          <p className='text-sm font-medium px-4 py-1'>
            Settings
          </p>
          <Dropdown.Divider />
          <p className='text-sm font-medium px-4 py-1  px-4'>
            Sign out
          </p>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Beranda
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Monitor
        </Navbar.Link>
        <Navbar.Link href="#">
          Kas
        </Navbar.Link>
        <Navbar.Link href="#">
          Penjualan
        </Navbar.Link>
        <Navbar.Link href="#">
          Produk
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


