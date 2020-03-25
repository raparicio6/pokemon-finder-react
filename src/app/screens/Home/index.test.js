import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LanguageButtons from '../../components/LanguageButtons';
import SearchBar from '../../components/SearchBar';
import PokemonList from '../../components/PokemonList';
import Footer from '../../components/Footer';

import Home from './layout';

configure({ adapter: new Adapter() });

describe('Home', () => {
  it('has LanguageButtons component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(LanguageButtons)).toHaveLength(1);
  });
  it('has SearchBar component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
  it('has PokemonList component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(PokemonList)).toHaveLength(1);
  });
  it('has Footer component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
