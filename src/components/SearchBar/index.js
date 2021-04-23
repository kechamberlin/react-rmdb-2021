import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Content } from './SearchBar.styles';
import searchIcon from '../../images/search-icon.svg';

export default function SearchBar({ setSearchTerm }) {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(event) => setState(event.currentTarget.value)}
            value={state}
          />
        </Content>
      </Wrapper>
    </div>
  );
}
