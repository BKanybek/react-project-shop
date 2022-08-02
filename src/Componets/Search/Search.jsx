import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css"


const Search = () => {
    const [showTest, setShowTest] = useState(true)

    return (
        <div className='search-wrapper'>
            <div className='icon'>
            <SearchIcon style={{fontSize: '30px'}} onClick={() => setShowTest(!showTest)}/>
            </div>
            <div className='search-test'>
                <div className={`search-input-test ${!showTest && 'search-input-test-active'}`}>
                    <input className='input-search-test' type="text" placeholder="Поиск"/>
                    <div className='cross-icon-test' onClick={() => setShowTest(!showTest)}>
                        <CloseIcon/>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Search;