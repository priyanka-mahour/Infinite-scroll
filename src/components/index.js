import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
// import "./index.css";

function Images() {
    const [limit, setLimit] = useState(50);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);

    const fetchData = () => {
        let url = `https://api.unsplash.com/search/photos?client_id=MgllgRq7xd3TYgttzB1esqxfnFvC90sn9HLbUTRWclw&query=canada&per_page=${limit}`;
        axios.get(url).then((res) => {
            console.log(res);
            setData([...res.data.results]);
            setLimit(limit => limit*count);
        }).catch((error) => {
            console.error(error);
        }); 
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refresh = () => {}

    debugger;
    return (
        <InfiniteScroll
        // next={fetchData}
        dataLength={limit}
        hasMore={true}
        // loader={<div>Loading........</div>}
         // below props only if you need pull down functionality
        refreshFunction={refresh}
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
            <div className="column">
            {data && data.length > 0 && data.map((item) => {
                <img key={item.id} src={item.urls.full} alt="img" loading="lazy"/>
            })}
        </div>
        </InfiniteScroll>
    )
}

export default Images
