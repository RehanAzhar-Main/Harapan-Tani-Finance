'use client';

import { Dropdown } from 'flowbite-react';

export default function DropdownButton(props) {
  return (
    <Dropdown label={props.label} dismissOnClick={false}>
      <Dropdown.Item>Kecil (10kg)</Dropdown.Item>
      <Dropdown.Item>Sedang (20kg)</Dropdown.Item>
      <Dropdown.Item>Besar (50kg)</Dropdown.Item>
      {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
    </Dropdown>
  )
}


