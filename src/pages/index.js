import { Suspense, lazy } from 'react'; 
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));

function PageRoutes () {
  return (
    <Suspense fallback={
      <div><p>Loading...</p></div>
    }>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default PageRoutes;