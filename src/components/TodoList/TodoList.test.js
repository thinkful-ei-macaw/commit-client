import React from 'react';
import TodoList from './TodoList';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<TodoList/>)
})