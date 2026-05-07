import { useState } from 'react'

function ItemForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '')
  const [body, setBody] = useState(initialData.body || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !body) return alert('Fyll i alla fält!')
    onSubmit({ title, body })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titel:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Innehåll:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Spara</button>
    </form>
  )
}

export default ItemForm