import { useRef } from 'react'
import { links } from '../data'
export function HeaderLinks({ showLinks }) {

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }
  return (
    <div className="links-container" style={linkStyles} ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        {links.map(link => <li key={link.id}><a href={link.url}>{link.text}</a></li>)}
      </ul>
    </div>
  )
}