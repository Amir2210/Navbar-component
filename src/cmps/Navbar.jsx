import { useState } from 'react';
import { HeaderLinks } from './HeaderLinks';
import { NavHeader } from './NavHeader';
import { HeaderSocial } from './headerSocial';

export function Navbar() {
  const [showLinks, setShowLinks] = useState(false)


  function onToggleLinks() {
    setShowLinks(!showLinks)
  }

  return (
    <nav>
      <div className="nav-center">
        <NavHeader onToggleLinks={onToggleLinks} />
        <HeaderLinks showLinks={showLinks} />
        <HeaderSocial />
      </div>
    </nav>
  )
}

