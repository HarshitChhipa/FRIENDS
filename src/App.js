import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            friendsList: [
                {
                    id: 1,
                    friendsName: 'Jai'
                },
                {
                    id: 2,
                    friendsName: 'Prachi'
                },
                {
                    id: 3,
                    friendsName: 'Kirti'
                },
                {
                    id: 4,
                    friendsName: 'Shubham'
                }
            ]
        };

        this.handelChange = this.handelChange.bind(this);

    }

    handelChange() {

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <input
                        type="text"
                        className="my-4 form-control"
                        placeholder="Type the name of a friend"
                        onChange={this.handelChange}
                    />
                    <ul className="list-group">
                        {this.state.friendsList.map((item) => {
                            return <li key={item.id} className="list-group-item">{item.friendsName}</li>
                        })}
                    </ul>

                </div>
            </div>
        );
    }
}

export default App;
