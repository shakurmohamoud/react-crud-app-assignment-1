import { Link } from 'react-router-dom'

function Item({ post, onDelete }) {
  return (
    <li>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}>View Details</Link>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </li>
  )
}

export default Item