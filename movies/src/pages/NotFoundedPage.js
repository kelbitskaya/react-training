import React from 'react';
import Footer from '../components/footer/Footer';
import Logo from "../components/common/Logo";
import Button from "../components/common/button/Button";
import { NavLink } from 'react-router-dom';

export default function NotFoundedPage () {
  return (
    <>
      <div className="logo-wrap">
        <Logo />
      </div>
      <div className="content content_error-page">
        <h1 className="error-title">Page Not Found</h1>
        <img
          className="error-img"
          src="https://sun2.velcom-by-minsk.userapi.com/KCI0WIjwCzynKyh9j98sMC9k8_l4nsGU84l6xg/o2ketwoTJ5Q.jpg"/>
        <NavLink to="/">
          <Button
            className="button button_secondary"
            title="Go back to home"
          />
        </NavLink>
      </div>
      <Footer/>
     </>
  );
};
