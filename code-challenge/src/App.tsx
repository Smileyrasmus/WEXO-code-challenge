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
      "thriller",
      "war",
      "romance",
      "drama",
      "crime",
      "documentary",
      "horror"
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
            <Route path='/categories/:genreName' element={"a category"}/>
            <Route path='/wishlist' element={"wishlist"}/>
          </Routes>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
