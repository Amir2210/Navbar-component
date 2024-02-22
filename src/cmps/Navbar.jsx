import { HeaderLinks } from './HeaderLinks';
import { NavHeader } from './NavHeader';

export function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <NavHeader />
        <HeaderLinks />
      </div>
    </nav>
  )
}

