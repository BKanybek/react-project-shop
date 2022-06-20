import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { useState } from 'react';

const Search = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='search'>
           
                {show &&
                    <div className='search-wrapper'>
                        <div className='searchInput'>
                            <input className='inputSearch' type="text" placeholder='Поиск'/>
                            <div onClick={() => setShow(!show)} className='crossIcon'>
                            <CloseIcon />
                            </div>
                        </div>
                    </div>
                }
                 <div onClick={() => setShow(!show)} className='searchIcon'>
                    <SearchIcon style={{fontSize: '30px'}}/>
                 </div>
            
            <div> 

            </div>
        </div>
    );
};

export default Search;