import React, { Component } from 'react'
import ReviewList from './Review'
import { Provider } from 'react-redux'
import store from '../store'
import WinesBase from '../WinesBase'
import WineList from './WineList/WineList'
import Filter from './Filter/Filter'

interface IState {
    isChecked: boolean
}

class App extends Component<{}, IState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isChecked: false,
        }
    }

    public setCheck = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        })
    }

    // public componentDidMount() {
    //     fetch('http://www.mocky.io/v2/5b07c8b43200008e00700034', {
    //         method: 'GET',
    //     })
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 return Promise.reject(new Error(response.statusText))
    //             }
    //             return Promise.resolve(response)
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('fetch', data)
    //         })
    //         .catch(error => {
    //             console.warn(error)
    //         })
    // }

    public render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <ReviewList />
                </Provider>
                <Filter isChecked={this.state.isChecked} setCheck={this.setCheck} />
                <WineList wines={WinesBase} isSparkling={this.state.isChecked} />
            </React.Fragment>
        )
    }
}

export default App
