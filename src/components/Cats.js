import React, { Component } from 'react';
// import cats from '../cats-data'
import CatCard from './CatCard'

class Cats extends Component {


    render() {
        const catCards = this.props.cats.map(cat => <CatCard key={cat.name} cat={cat}/>)
        return (
            <div>
                { catCards }
            </div>
        )
    }

}

export default Cats;