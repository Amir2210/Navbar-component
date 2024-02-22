import { social } from '../data'
export function HeaderSocial() {
  return (
    <ul className='social-icons'>
      {social.map(icon => <li key={icon.id}><a href={icon.url}>{icon.icon}</a></li>)}
    </ul>
  )
}