import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {

            newFreiends: '',

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
        this.addFriend = this.addFriend.bind(this);
        this.enterPressed = this.enterPressed.bind(this);

    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if (code === 13) {
            this.addFriend()
        }
    }

    handelChange(event) {
        this.setState({
            newFreiends: event.target.value
        });
    }

    addFriend() {

        const newFriend = {
            name: this.state.newFreiends,
            id: this.state.friendsList[this.state.friendsList.length - 1].id + 1
        };

        const tempFriendList = this.state.friendsList;

        tempFriendList.push(newFriend);

        this.setState({
            friendsList: tempFriendList
        })

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <input
                        type="text"
                        name="friendsEntry"
                        className="my-4 form-control"
                        placeholder="Type the name of a friend"
                        onChange={this.handelChange}
                        onKeyPress={this.enterPressed}
                        value={this.setState.newFreiends}
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
