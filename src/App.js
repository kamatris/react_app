import React, {Component} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import './css/App.css';

class App extends Component {
    state = {
        version: 2019,
        label: "Mak System",
        urlOfSite: "https://www.google.com"
    }

    render() {
        return (
            <div className="App">
                <Header name={this.state.version} label={this.state.label} version={this.state.version}/>
                <MainContent/>
                <Footer tel="+216 26 77 89 56" adresse="Tunis, Tunisia" email="maksystem10@gmail.com"/>
            </div>
        );
    }
}

class Footer extends React.Component {

    render() {
        const {tel, email, adresse} = this.props;

        return (
            <footer>
                <div>
                    <div>{tel}</div>
                    <div>{email}</div>
                    <div>{adresse}</div>
                </div>
            </footer>
        )
    }
}


export default App;
