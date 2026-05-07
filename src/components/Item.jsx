import { Link } from 'react-router-dom'

function Item({ post, onDelete }) {
  return (
    <li>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}>Visa detaljer</Link>
      <button onClick={() => onDelete(post.id)}>Ta bort</button>
    </li>
  )
}

export default Item