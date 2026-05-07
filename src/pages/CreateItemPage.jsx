import { useNavigate } from 'react-router-dom'
import { create } from '../api/dataApi'
import ItemForm from '../components/ItemForm'

function CreateItemPage() {
  const navigate = useNavigate()

  const handleCreate = async (formData) => {
    try {
      await create(formData)
      navigate('/posts')
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div>
      <h1>Skapa ny post</h1>
      <ItemForm onSubmit={handleCreate} />
    </div>
  )
}

export default CreateItemPage