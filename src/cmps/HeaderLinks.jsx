import { links } from '../data'
export function HeaderLinks() {
  return (
    <div className="links-container">
      <ul className='links'>
        {links.map(link => <li key={link.id}><a href={link.url}>{link.text}</a></li>)}
      </ul>
    </div>
  )
}