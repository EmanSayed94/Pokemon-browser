import { Navigate, Route, Routes } from 'react-router-dom'
import PaginationView from './pages/PaginationView/PaginationView'
import LoadMoreView from './pages/LoadMoreView'
import LayoutWithTabs from './Layouts.tsx/TabsLayout'
import PokemonDetail from './pages/PokemonDetail/PokemonDetail'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWithTabs />}>
          <Route index element={<Navigate to="pagination" />} />
          <Route path="pagination" element={<PaginationView />} />
          <Route path="load-more" element={<LoadMoreView />} />
        </Route>
        <Route path="/pokemon/:name" element={<PokemonDetail />} />

      </Routes>
    </div>
  )
}

export default App
