import React from 'react'
import NewsCard from '../../components/NewsCard'
import Nav from '../navbar/Nav'

const Tutorial = () => {
    return (
        <>
            <Nav />
            <div className="max-w-7xl grid grid-cols-3 gap-10 mx-auto my-10">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </>
    )
}

export default Tutorial
