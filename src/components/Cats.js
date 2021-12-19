import React, { Component } from 'react';
// import cats from '../cats-data'
import CatCard from './CatCard'


const cats = ({ cats }) => {
        const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)
        return (
            <div>
                { catCards }
            </div>
        )

}

export default Cats;