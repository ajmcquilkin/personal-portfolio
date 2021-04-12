import NavMenuItem from 'components/layout/NavMenuItem';
import { mailtoLink, resumeFileName } from 'utils';

export interface MenuProps {

}

const Menu = (): JSX.Element => (
  <nav>
    <NavMenuItem content="Home" href="/" />
    <NavMenuItem content="About Me" href="/about" />
    <NavMenuItem content="My Resume" href={`/${resumeFileName}`} />
    <NavMenuItem content="Contact" href={mailtoLink} />
  </nav>
);

export default Menu;
