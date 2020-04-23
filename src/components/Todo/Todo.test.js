import React from 'react';
import Todo from './Todo';
import {shallow} from 'enzyme'

const todo = {
  complete: false,
  id: 521,
  name: 'sdfsdaf'
}
it('renders without crashing', () => {
  shallow(<Todo todo={todo}/>)
})