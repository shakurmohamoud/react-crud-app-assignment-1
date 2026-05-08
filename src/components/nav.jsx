import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/posts/create">Create Post</NavLink>
    </nav>
  )
}

export default Nav