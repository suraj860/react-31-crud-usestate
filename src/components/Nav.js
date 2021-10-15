import Posts  from './Posts';
import Post from './post';
import Home from './Home';
import About from './About';
import {BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import Header from "./Header"

function Nav (){
    return(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/posts/:id" component={Post}></Route>
            <Route path="/posts" exact component={Posts}></Route>
            <Route path="/home">
                <Redirect to ="/" />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export  default Nav;