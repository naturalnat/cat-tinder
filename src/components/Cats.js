import React, { Component } from 'react';
import cats from '../cats-data'
import CatCard from './CatCard'

class Cats extends React.Component {

    constructor() {
        super()
        this.state = {
            cats: []
        }
    }

    //mocking fetch req
    componentDidMount() {
        //fetch 
        //then => json 
        //then => setstate 
        this.setState({
            cats: cats
        })
    }


    render() {
        const catCards = this.state.cats.map(cat => <CatCard key={cat.name} cat={cat}/>)
        return (
            <div>
                { catCards }
            </div>
        )
    }

}

export default Cats;