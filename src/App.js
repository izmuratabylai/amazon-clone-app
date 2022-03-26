
import './App.css';
import Header from './components/Header/Header';
import Login from './components/login/Login';
import Home from './components/home/home';
import Chekout from './components/basket/Chekout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from 'react';
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import { useStateValue } from './contexts/StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    

   auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
        </Routes>
        <Routes>
          <Route  path="/login" element={<Login />} />
          <Route  path="/" element={<Home />} />
          <Route path="/checkout" element={<Chekout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
