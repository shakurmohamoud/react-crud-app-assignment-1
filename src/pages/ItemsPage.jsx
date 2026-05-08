import ItemList from '../components/ItemList'

function ItemsPage({ posts, loading, error, onDelete }) {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="page">
      <h1>All Posts</h1>
      <ItemList posts={posts} onDelete={onDelete} />
    </div>
  )
}

export default ItemsPage