import React from 'react';
import ToDoForm from './ToDoForm';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<ToDoForm/>)
})