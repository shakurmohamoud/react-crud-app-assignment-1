import { useState } from 'react'

function ItemForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '')
  const [body, setBody] = useState(initialData.body || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !body) return alert('Please fill in all fields!')
    onSubmit({ title, body })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default ItemForm