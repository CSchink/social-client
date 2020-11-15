import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'

import MenuBar from "./components/menubar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import ProfilePage from './pages/ProfilePage';

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/authroute";
import SinglePost from "./pages/SinglePage";

function App() {
  return (

      <Router>
      <Container>
      <MenuBar/>
      <Route exact path="/" component={Home} />
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/register" component={Register} />
      <AuthRoute exact path="/profile" component={ProfilePage} />
      <Route exact path="/posts/:postId" component={SinglePost} />
      <Route exact path="/users/:userId" component={ProfilePage} />
      </Container>
    </Router>

  );
}

export default App;
