import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error, Start, Login, SignUp } from '../views/index';

const AppRouter = () => {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = { <Start /> } />
            <Route path = "/error" element = { <Error /> } />
            <Route path = "/login" element = { <Login /> } />
            <Route path = '/sign-up' element = {<SignUp />}/>
            <Route path = "*" element = { <Error />} />
         </Routes>
      </Router>
  )
}

export default AppRouter