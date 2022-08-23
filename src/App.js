import { authRoutes,mainRoutes } from './routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const getRoutes=(routes)=>{
    console.log(routes)
return   routes.map((e,i)=>{
   return <Route key={i}  path={e.path} element={e.component}/>
    })
  }
  
  return (
  <Router>
    <Routes>
      {getRoutes(authRoutes)}
      {getRoutes(mainRoutes)}
    </Routes>
  </Router>
  );
}

export default App;
