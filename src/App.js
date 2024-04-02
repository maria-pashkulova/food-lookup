import { Routes, Route } from 'react-router-dom';
import TablesPage from './components/TablesPage';
import CreateFoodPage from './components/CreateFoodPage';
import NotFoundPage from './components/NotFoundPage';
import { SelectedFoodItemsProvider } from './components/SelectedFoodItemsContext';

function App() {

  return (
    <SelectedFoodItemsProvider>
      <Routes>
        <Route path='/' element={<TablesPage />} />
        <Route path='/create' element={<CreateFoodPage />} />;
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </SelectedFoodItemsProvider>
  )
}

export default App;
