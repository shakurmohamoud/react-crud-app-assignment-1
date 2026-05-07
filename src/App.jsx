import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ItemsPage from './pages/ItemsPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import CreateItemPage from './pages/CreateItemPage'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ItemsPage />} />
        <Route path="/posts/:id" element={<ItemDetailsPage />} />
        <Route path="/posts/create" element={<CreateItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App