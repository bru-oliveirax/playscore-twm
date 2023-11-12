import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error, Start, Login, SignUp } from '../views/index';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Start /> }>
          <Route path = "/error" element = { <Error /> } />
          <Route path = "/login" element = { <Login /> } />
          <Route path = '/sign-up' element = {<SignUp />}/>
          <Route path = "*" element = { <Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter