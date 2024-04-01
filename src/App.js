import { Routes, Route } from 'react-router-dom';
import TablesPage from './components/TablesPage';
import CreateFoodPage from './components/CreateFoodPage';
import NotFoundPage from './components/NotFoundPage';


function App() {

  return (
    <Routes>
      <Route path='/' element={<TablesPage />} />
      <Route path='/create' element={<CreateFoodPage />} />;
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
