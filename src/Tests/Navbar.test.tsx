import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/Navbar';

test('renders navbar', () => {
 
      const component = render(
        <NavBar />
      )

      const NavbarButton = component.container.querySelector('.makeStyles-root-1 > header > div > button')

      expect(component.container).toHaveTextContent(
        'Discovery Page'
      )

      expect(NavbarButton).toHaveTextContent(
        'Github'
      )

});
