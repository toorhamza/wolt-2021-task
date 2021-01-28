/* import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import {Restaurant} from "../Types"

test('renders content', () => {
    const restaurant: Restaurant = {
        "blurhash": "U6T69eube;rHy,lNf%a3V5aOkUknu:ZTg1k-",
        "launch_date": "2020-09-25",
        "location": [
          24.95136,
          60.157142
        ],
        "name": "Rosemary",
        "online": false,
        "popularity": 0.8514554035262657
      }

      const component = render(
        <Card restaurant={restaurant} />
      )

      expect(component.container).toHaveTextContent(
        'Rosemary'
      )

});
 */