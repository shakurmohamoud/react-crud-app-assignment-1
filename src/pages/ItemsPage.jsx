import { useState, useEffect } from 'react'
import { getAll, deletePost } from '../api/dataApi'
import ItemList from '../components/ItemList'

function ItemsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAll()
        setPosts(data.slice(0, 10))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>All Posts</h1>
      <ItemList posts={posts} onDelete={handleDelete} />
    </div>
  )
}

export default ItemsPage