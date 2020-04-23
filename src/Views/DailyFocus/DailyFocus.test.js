import React from 'react';
import DailyFocus from './DailyFocus';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<DailyFocus/>)
})