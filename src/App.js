import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { routes } from './routes';
import { authRoutes } from 'routes/helper';
import './App.test.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
function App() {
  const loggedIn = useSelector((state) => state.appState.authState);
  const otpVerified = useSelector((state) => state.appState.otpVerified);
  // const userData = useSelector((state) => state.user.userData);
  console.log('logged', loggedIn);
  console.log('otpVerified', otpVerified);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (loggedIn) {
  //     dispatch(getUserReduxData());
  //   }
  // }, [loggedIn]);
  console.log('loggedIn', loggedIn);
  return (
    <BrowserRouter>
      {!loggedIn ? (
        <Routes>
          {authRoutes?.map(({ path, component }, index) => (
            <Route path={path} element={component} key={index} />
          ))}
          <Route path="*" element={<Navigate to={'/login'} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes}
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
