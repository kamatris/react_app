import React, {Component} from 'react';

class MainContent extends React.Component {
    state = {
        version: 2019,
        title: "Khaireddine",

        items: [
            {
                id: 1,
                name: "Sawssen",
                post: "Integratrice"
            },
            {
                id: 2,
                name: "Ramy",
                post: "Chef d'equipe"
            },
            {
                id: 12,
                name: "Hassen",
                post: "Integrateur"
            },
            {
                id: 14,
                name: "Wolf",
                post: "Predator"
            }
        ]

    }

    changeState = () => {
        this.setState(
            {
                version: "2020"
            }
        )
    }

    changeName = () => {
        this.setState({
            title: "Hamdi Khaireddine"
        })
    }

    render() {
        return (
            <main className="main">
                <div className="top-main">
                    <h3>
                        {this.state.title} {this.state.version}
                    </h3>
                    <fieldset>
                        <legend>Change state</legend>
                        <button onClick={this.changeState}>Change version</button>
                        <hr/>
                        <button onClick={this.changeName}>Change name</button>
                    </fieldset>
                </div>
                <LeftContent/>
                <RightContent listing={this.state.items}/>

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
        const {listing} = this.props;
        const itemListing = listing.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.post}</td>
                </tr>
            )
        })
        return (
            <aside className="col-right">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Post</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemListing}
                    </tbody>
                </table>
            </aside>
        )
    }
}

export default MainContent