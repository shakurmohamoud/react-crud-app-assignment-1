import Item from './Item'

function ItemList({ posts, onDelete }) {
  return (
    <ul>
      {posts.map(post => (
        <Item key={post.id} post={post} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default ItemList