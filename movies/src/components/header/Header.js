import React from 'react';
import Logo from '../common/Logo';
import Search from '../search/Search';
import AddButton from '../addButton/AddButton';

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header-line">
          <Logo />
          <AddButton />
        </div>
        <div className="movie-search">
          <h1 className="header__title">find your movie</h1>
          <Search
            placeholder="What do you want to watch?"
          />
        </div>
      </div>
    </header>
  );
}
