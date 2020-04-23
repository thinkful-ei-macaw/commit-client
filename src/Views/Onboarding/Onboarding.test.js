import React from 'react';
import Onboarding from './Onboarding';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Onboarding/>)
})