import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

const Home = () => (
    <div>
        <text>Home page</text>
    </div>
)

const About = () => (
    <div>
        <text>About page</text>
    </div>
)

const Blog = () => (
    <div>
        <text>Blog page</text>
    </div>
)

const Projects = () => (
    <div>
        <text>Projects page</text>
    </div>
)

const Contact = () => (
    <div>
        <text>Contact page</text>
    </div>
)

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </main>
        )
    }
}