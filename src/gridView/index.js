import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./index.css";

function GridView() {
    const [limit, setLimit] = useState(50);
    const [data, setData] = useState({});

    const fetchData = () => {
        let url = `https://api.unsplash.com/search/photos?client_id=MgllgRq7xd3TYgttzB1esqxfnFvC90sn9HLbUTRWclw&query=canada&per_page=${limit}`;
        axios.get(url).then((res) => {
            console.log(res);
            setData(res.data);
            limit+=limit;
        }).catch((error) => {
            console.error(error);
        }); 
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <InfiniteScroll
        next={fetchData}
        dataLength={limit}
        hasMore={true}
        loader={<div>Loading........</div>}
        endMessage={
            <p>
                You have seen it all!
            </p>
        }
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
            <div>
                pull down to refresh
            </div>
        }
        releaseToRefreshContent={
            <div>Release to refresh</div>
        }
        >
            <div className="gridWrap">
            {data.map((item) => {
                <img src={} alt="img" loading="lazy"/>
            })}
        </div>
        </InfiniteScroll>
    )
}

export default GridView
