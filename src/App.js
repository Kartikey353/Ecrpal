import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionPage from './Pages/TransactionPage'; 
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/transaction" element={<TransactionPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
