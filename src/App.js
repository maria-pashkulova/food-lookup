import { Routes, Route } from 'react-router-dom';
import TablesPage from './components/TablesPage';
import CreateFoodPage from './components/CreateFoodPage';
import EditFoodPage from './components/EditFoodPage';
import NotFoundPage from './components/NotFoundPage';
import { SelectedFoodItemsProvider } from './components/SelectedFoodItemsContext';

function App() {

  return (
    <SelectedFoodItemsProvider>
      <Routes>
        <Route path='/' element={<TablesPage />} />
        <Route path='/create' element={<CreateFoodPage />} />;
        <Route path='/edit/:foodId' element={<EditFoodPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </SelectedFoodItemsProvider>
  )
}

export default App;
