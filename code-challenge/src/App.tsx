import { createContext, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Overview from './components/overview/Overveiw';
import { GlobalContext, IGlobalData } from './context/GlobalData';

function App() {
  const defaultGlobalData = {
    genres: [
      "action",
      "comedy",
      "Thriller",
      "War",
      "Romance",
      "Drama",
      "Crime",
      "Documentary",
      "Horror"
    ]
  }
  
  const [globalData, setGlobalData] = useState<IGlobalData>(defaultGlobalData)

  return (
    <GlobalContext.Provider value={{ copy: globalData, setCopy: setGlobalData }}> {/* Becuase we use the variables from the useState hook, we can change the global context from any nested components */}
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Overview />} />
          </Routes>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
