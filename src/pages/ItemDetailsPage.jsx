import { useParams } from 'react-router-dom'

function ItemDetailsPage({ posts }) {
  const { id } = useParams()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) return <p>Post not found!</p>

  return (
    <div className="page">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default ItemDetailsPage