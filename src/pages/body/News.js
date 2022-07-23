import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import NewsCard from '../../components/NewsCard'
import Nav from '../navbar/Nav'

const News = () => {
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [images, setImages] = useState([])
    const itemsPerPage = 6
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        console.log(`Loading items from ${itemOffset} to ${endOffset}`)
        setCurrentItems(images.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(images.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, images])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((res) => res.json())
            .then((data) => setImages(data))
    }, [])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % images.length
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        )
        setItemOffset(newOffset)
    }
    return (
        <>
            <Nav />
            <section className="flex max-w-7xl mx-auto ">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
                <div className="mx-5  lg:max-w-[300px]">
                    <img
                        className="mt-10 "
                        src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
                        alt=""
                    />
                    <img
                        className="mt-10"
                        src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
                        alt=""
                    />
                    <img
                        className="mt-10"
                        src="https://trickbd.com/wp-content/uploads/2020/02/24/5e53cb86d908f.jpg"
                        alt=""
                    />
                </div>
            </section>
            <div>
                <div>
                    {currentItems.map((card) => {
                        return <img src={card?.url} alt={card.title} />
                    })}
                </div>
                <>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName="page-num"
                        previousLinkClassName="page-num"
                        nextLinkClassName="page-num"
                        activeLinkClassName="active"
                    />
                </>
            </div>
        </>
    )
}

export default News
