import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ItemsPage from './pages/ItemsPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import CreateItemPage from './pages/CreateItemPage'
import EditItemPage from './pages/EditItemPage'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ItemsPage />} />
        <Route path="/posts/create" element={<CreateItemPage />} />
        <Route path="/posts/:id" element={<ItemDetailsPage />} />
        <Route path="/posts/:id/edit" element={<EditItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App