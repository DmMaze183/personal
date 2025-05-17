import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import SupportButton from './SupportButton';

export default function NavbarItemWrapper(props) {
  if (props.className === 'navbar-support-button') {
    return <SupportButton />;
  }
  return <NavbarItem {...props} />;
}