import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='my-10 flex'>
            <div className="btn btn btn-secondary">Breaking News</div>
            <Marquee pauseOnHover={true} speed={120}>
                Shakhawat srabon is the best software engineer in Bangladesh.           He would be join in Google
            </Marquee>
        </div>
    );
};

export default BreakingNews;