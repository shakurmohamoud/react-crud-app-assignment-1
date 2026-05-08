import { useNavigate } from 'react-router-dom'
import { create } from '../api/dataApi'
import ItemForm from '../components/ItemForm'

function CreateItemPage({ onCreate }) {
  const navigate = useNavigate()

  const handleCreate = async (formData) => {
    try {
      await create(formData)
      onCreate(formData)
      navigate('/posts')
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="page">
      <h1>Create New Post</h1>
      <ItemForm onSubmit={handleCreate} />
    </div>
  )
}

export default CreateItemPage