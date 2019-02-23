import React, {Component} from 'react';
//import Header from 'header';
import './App.css';

class App extends Component {
    state = {
        version : 2019,
        label : "Mak System",
        urlOfSite : "https://www.google.com"
    }
    render() {
        return (
            <div className="App">
                <Header name={this.state.version} label={this.state.label} version={this.state.version}/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}


class Header extends Component {
    state = {
        siteUrl: "https://www.google.com"
    }

    render() {
        return (
            <div className="header">
                <h2>
                    <a href={this.state.siteUrl} target="_blank">{this.props.label} </a> {this.props.version}
                </h2>
            </div>
        )
    }
}

class MainContent extends React.Component {
    state = {
        version: 2019
    }

    render() {
        return (
            <main className="main">
                <h3>
                    This is Main component for this site {this.state.version}
                </h3>
                <LeftContent/>
                <RightContent/>

            </main>
        )
    }
}

class LeftContent extends React.Component {
    render() {
        return (
            <aside className="col-left">
                <h3>
                    Left aside
                </h3>
            </aside>
        )
    }
}

class RightContent extends React.Component {
    render() {
        return (
            <aside className="col-left">
                <h3>
                    Right aside
                </h3>
            </aside>
        )
    }
}


class Footer extends React.Component {
    render() {
        return (
            <footer>
                This footer for our site
            </footer>
        )
    }
}


export default App;
