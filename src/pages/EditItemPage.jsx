import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getById, update } from '../api/dataApi'
import ItemForm from '../components/ItemForm'

function EditItemPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getById(id)
        setPost(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [id])

  const handleUpdate = async (formData) => {
    try {
      await update(id, formData)
      navigate('/posts')
    } catch (err) {
      console.error(err.message)
    }
  }

  if (loading) return <p>Laddar...</p>
  if (error) return <p>Fel: {error}</p>

  return (
    <div>
      <h1>Redigera post</h1>
      <ItemForm onSubmit={handleUpdate} initialData={post} />
    </div>
  )
}

export default EditItemPage