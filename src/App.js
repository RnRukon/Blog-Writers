import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AuthProvider from './Components/Contexts/AuthProvider';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import DetailsBlog from './Components/Home/BlogsWrting/DetailsBlog/DetailsBlog';

import AllBlogs from './Components/AllBlogs/AllBlogs';
import Chats from "./Components/Home/Chats/Chats";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Sharesed/Footer";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/allBlogs">
              <AllBlogs></AllBlogs>
            </Route>
            <Route path="/detailsBlog/:id">
              <DetailsBlog></DetailsBlog>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/chats">
              <Chats></Chats>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
