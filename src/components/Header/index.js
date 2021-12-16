// import
import { useState } from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';
import './header.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <header>
      <Menu
        stack
        right
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <a onClick={closeSideBar} className="menu-item" href="#home">Accueil</a>
        <a onClick={closeSideBar} className="menu-item" href="#cv">Mon CV</a>
        <a onClick={closeSideBar} className="menu-item" href="#one">Mon parcours</a>
        <a onClick={closeSideBar} className="menu-item" href="#two">Ma reconversion</a>
        <a onClick={closeSideBar} className="menu-item" href="#three">Mes compéthences</a>
        <a onClick={closeSideBar} className="menu-item" href="#four">Et maintenant ?</a>
      </Menu>

      <nav className="nav">
        <div className="left-nav">
          <HashLink smooth className="left-link" to="#home">
            Portfolio
          </HashLink>
        </div>
        <div className="right-nav">
          <NavHashLink
            smooth
            to="/#cv"
            className="nav-link"
            activeClassName="nav-active"
          >
            Mon CV
          </NavHashLink>
          <NavHashLink
            smooth
            to="#one"
            className="nav-link"
          >
            Mon parcours
          </NavHashLink>
          <NavHashLink
            smooth
            to="#two"
            className="nav-link"
          >
            Ma reconversion
          </NavHashLink>
          <NavHashLink
            smooth
            to="#three"
            className="nav-link"
          >
            Mes compéthences
          </NavHashLink>
          <NavHashLink
            smooth
            to="#four"
            className="nav-link"
          >
            Et maintenant ?
          </NavHashLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
