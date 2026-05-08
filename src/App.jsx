import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import ItemsPage from './pages/ItemsPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import CreateItemPage from './pages/CreateItemPage'
import EditItemPage from './pages/EditItemPage'
import { getAll } from './api/dataApi'
import './App.css'

function App() {
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

  const handleCreate = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }])
  }

  const handleUpdate = (id, updatedPost) => {
    setPosts(posts.map(post => post.id === id ? { ...post, ...updatedPost } : post))
  }

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ItemsPage posts={posts} loading={loading} error={error} onDelete={handleDelete} />} />
        <Route path="/posts/create" element={<CreateItemPage onCreate={handleCreate} />} />
        <Route path="/posts/:id" element={<ItemDetailsPage posts={posts} />} />
        <Route path="/posts/:id/edit" element={<EditItemPage posts={posts} onUpdate={handleUpdate} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App