import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.tsx';
import TaskList from './components/task/TaskList.tsx';
import './index.css';
import AddTask from './components/task/AddTask.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/taskList' element={<TaskList />} />
      <Route path='/addTask' element={<AddTask />} />
    </Routes>
  </BrowserRouter>
)
