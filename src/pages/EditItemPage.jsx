import { useParams, useNavigate } from 'react-router-dom'
import { update } from '../api/dataApi'
import ItemForm from '../components/ItemForm'

function EditItemPage({ posts, onUpdate }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === parseInt(id))

  if (!post) return <p>Post not found!</p>

  const handleUpdate = async (formData) => {
    try {
      await update(id, formData)
      onUpdate(parseInt(id), formData)
      navigate('/posts')
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="page">
      <h1>Edit Post</h1>
      <ItemForm onSubmit={handleUpdate} initialData={post} />
    </div>
  )
}

export default EditItemPage