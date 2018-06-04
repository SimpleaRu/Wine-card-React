import React, { Component } from 'react'
import WineList from './WineList/WineList'
import Filter from './Filter/Filter'
import { connect } from 'react-redux'
import { ICard } from '../types'

interface IState {
    isChecked: boolean
}

interface IProps {
    cards: ICard[],
    isSparkling: boolean
}

class App extends Component<IProps, IState> {
    constructor(props: IProps) {
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
        const {cards, isSparkling} = this.props
        const cardsResult = isSparkling ? cards.filter((card: ICard) => card.sparkling !== null) : cards
        return (
            <React.Fragment>
                <Filter isChecked={this.state.isChecked} setCheck={this.setCheck} />
                <WineList wines={cardsResult} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        cards: state.cards,
        isSparkling: state.isSparkling
    }
}

export default connect(mapStateToProps)(App)
