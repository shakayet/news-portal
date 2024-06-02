import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('categori.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    return (
        <div>
            <h2 className='text-2xl font-semibold'>All Caterogy</h2>
            <div>
                <h2 className='text-center items-center p-4 bg-slate-100 mt-3 text-2xl font-semibold rounded-lg'>National News</h2>
            </div>
            <div>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className='block text-center pt-3 text-xl' key={category.id}>P{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;