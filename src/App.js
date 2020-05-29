import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import About from './Components/About'
import Blog from './Components/Blog'
import Poem from './Components/Poem'
import Contact from './Components/Contact'
import Common from './Components/Common'
class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div class="w3-bar w3-black">
                        <a href="https://www.facebook.com/mohitjaincoolmj/" class="w3-bar-item w3-button"><i class="fa fa-facebook-official"></i></a>
                        <a href="https://www.instagram.com/jeny_memories/" class="w3-bar-item w3-button"><i class="fa fa-instagram"></i></a>
                        <a href="https://www.twitter.com" class="w3-bar-item w3-button"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com" class="w3-bar-item w3-button"><i class="fa fa-linkedin"></i></a>

                        <div className="nav-bar">
                            <NavLink className="nav-links" to="/contact">Contact Us</NavLink>
                            <NavLink className="nav-links" to="/blog">Blogs</NavLink>
                            <NavLink className="nav-links" to="/Poems">Poems</NavLink>
                            <NavLink className=" nav-links" to="/">Home</NavLink>
                        </div>
                    </div>

                    <Common></Common>


                    {/* <ul className="header"> */}
                    {/* <ul>
                            <li><NavLink className="nav-link" to="/home">Home</NavLink></li>
                            <li><NavLink className="nav-link" to="/Poems">Poems</NavLink></li>
                            <li><NavLink className="nav-link" to="/blog">Blogs</NavLink></li>
                            <li><NavLink className="nav-link" to="/contact">Contact Us</NavLink></li>
                        </ul> */}
                    {/* </ul> */}
                    <div className="links">
                        <Route exact path="/" component={About} />
                        <Route exact path="/poems" component={Poem} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={Contact} />
                    </div>


                </BrowserRouter>
            </div >
        )
    }

}

export default App;