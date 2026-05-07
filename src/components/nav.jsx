import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/posts/create">Skapa post</NavLink>
    </nav>
  )
}

export default Nav