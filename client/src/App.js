import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SinglePost from './components/SinglePost';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Container>
                    <MenuBar />
                    <Route exact path='/' component={Home} />
                    <AuthRoute exact path='/login' component={Login} />
                    <AuthRoute exact path='/register' component={Register} />
                    <Route exact path='/posts/:postId' component={SinglePost} />
                </Container>
            </Router>
        </AuthProvider>
    );
}

export default App;
