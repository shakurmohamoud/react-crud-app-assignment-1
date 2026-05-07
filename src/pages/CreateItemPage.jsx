import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { create } from '../api/dataApi'
import ItemForm from '../components/ItemForm'

function CreateItemPage() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleCreate = async (formData) => {
    try {
      await create(formData)
      navigate('/posts')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h1>Skapa ny post</h1>
      {error && <p>Fel: {error}</p>}
      <ItemForm onSubmit={handleCreate} />
    </div>
  )
}

export default CreateItemPage