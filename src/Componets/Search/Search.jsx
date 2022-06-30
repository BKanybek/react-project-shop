import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { useState } from 'react';

const Search = () => {

    return (

        <div className='search'>
            <div className='search-wrapper'>
                <div className='search-input'>
                    <input className='input-search' type="text" placeholder="Поиск"/>
                    <div className='cross-icon'>
                        <CloseIcon/>
                    </div>
                </div>
                <div className='search-icon'>
                    <SearchIcon style={{fontSize: '30px'}}/>
                </div>
            </div>
        </div>






        // <div className='search'>
        //     <div className='search-wrapper'>
        //         <div className='searchInput'>
        //             <input className='inputSearch' type="text" placeholder='Поиск'/>
        //             <div className='crossIcon'>
        //                 <CloseIcon />
        //             </div>
        //         </div>
        //     </div>
        //     <div className='searchIcon'>
        //         <SearchIcon style={{fontSize: '30px'}}/>
        //     </div>
        //     <div> 
        //     </div>
        // </div>
    );
};

export default Search;