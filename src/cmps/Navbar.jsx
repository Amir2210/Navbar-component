import { HeaderLinks } from './HeaderLinks';
import { NavHeader } from './NavHeader';
import { HeaderSocial } from './headerSocial';

export function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <NavHeader />
        <HeaderLinks />
        <HeaderSocial />
      </div>
    </nav>
  )
}

