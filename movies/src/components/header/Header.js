import React from 'react';
import Logo from '../common/Logo';
import Button from '../common/button/Button';

export default function Header() {
  return (
    <header>
      <div>
        <div className="header-line">
          <Logo />
          <Button className="button" title="+ Add movie" />
        </div>
        <div className="movie-search">
          <h1>find your movie</h1>
          <div className="movie-search__line">
            <input type="text" name="movie" className="movie-search__input" placeholder="What do you want to watch?" />
            <Button className="button button_search" title="Search" />
          </div>
        </div>
      </div>
    </header>
  );
}
