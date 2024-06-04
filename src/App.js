import logo from './logo.svg';
import './App.css';
import SideBar from './components/side-bar';
import NavBar from './components/nav-bar';
import DashBoard from './components/dashboard';
import Movies from './components/Movies';
import WebSeries from './components/Web-series';
import { Routes,Route } from 'react-router-dom';


function App() {
  const ROUTES = [
    {
      name:'DashBoard',
      path:'/',
      component:<DashBoard/>
    },
    {
      name:'Movies',
      path:'/movies',
      component:<Movies/>
    },
    
    {
      name:'Series',
      path:'/series',
      component:<WebSeries/>
    },
    
  ]
  return (
      <>
    <NavBar/>
    <SideBar/>
    <div id='container'>
      <Routes>
        { ROUTES?.map((route,index) => (
          <Route key={index} path={route?.path} element={route?.component}></Route>)

          )}
      </Routes>

    </div>



      </>
    
  );
}

export default App;
