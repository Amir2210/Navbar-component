import logo from '../logo.svg'
import { FaBars } from 'react-icons/fa'
export function NavHeader({ onToggleLinks }) {


  return (
    <div className="nav-header">
      <img className='logo' src={logo} alt="logo" />
      <button onClick={onToggleLinks} className='nav-toggle'><FaBars /></button>
    </div>
  )
}