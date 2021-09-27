import React from 'react';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



const Newscards = ({ category }) => {

    // state for headlines 
    const [headlines, setHeadlines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResluts, setTotalResults] = useState(0);
    const [limit] = useState(20);
    const [offset, setoffset] = useState(0)

    useEffect(() => {
        const url = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_API}&categories=${category}&countries=au,us,in&limit=${limit}&offset=${offset}`;
        async function fetchheadlines() {
            const response = await fetch(url);
            const data = await response.json();
            setHeadlines(data?.data)
            setTotalResults(data?.pagination.total)
            setLoading(false)
            return data
        }

        fetchheadlines()
        // eslint-disable-next-line
    }, []);

    function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    };

    document.title = `${capitaliseFirstLetter(category)} - News Worldwide`




    async function fetchData() {
        const url = `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_API}&categories=${category}&countries=au,us,in&limit=${limit}&offset=${offset + limit}`;
        setoffset(offset + limit)
        const response = await fetch(url);
        const data = await response.json();
        setHeadlines(headlines.concat(data?.data))
        setTotalResults(data?.pagination.total)
        return data

    }
    

    return (
        <>
            <h1 className="font-medium sm:text-2xl  my-2 mt-5 max-w-4xl text-center mx-auto">News Worldwide - <span className="font-bold">Top {capitaliseFirstLetter(category)} Headlines</span></h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={headlines?.length} //This is important field to render the next data
                next={fetchData}
                hasMore={headlines?.length !== totalResluts}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>{`${!loading ? "Yay! You have seen all the news." : ""}`}</b>
                    </p>}
            >
                <div className="sm:grid sm:grid-cols-3 items-center grid grid-cols-1 my-3 mt-5 max-w-5xl mx-auto place-items-center">
                    {headlines?.map((element, index) => (

                        <div className="flex flex-col w-72  border  my-5  rounded-md flex-wrap " key={index}>
                            <img src={element.image ? element.image : 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} className="rounded-t-md" alt="Default" />
                            <h2 className="mt-1 text-sm font-medium tracking-wide p-2">{element.title ? element.title : "News Title"}</h2>
                            <p className=" p-2 text-xs -mt-1 tracking-wide">{element.description ? element.description : "Description"}</p>
                            <p className=" p-2 text-xs -mt-1 text-gray-500">By {element.author ? element.author : "Unknown Author"} on {element.published_at ? new Date(element.published_at).toUTCString() : "Unknown Date"}</p>
                            <button className="bg-black text-white p-2 rounded-b-md text-sm tracking-wide mt-1 cursor-pointer"><a href={element.url} target="_blank" rel="noreferrer"> Read Full News </a></button>
                        </div>

                    )
                    )}
                </div>
            </InfiniteScroll>
        </>
    )

}

export default Newscards



