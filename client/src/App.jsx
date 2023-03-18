import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faImage } from '@fortawesome/free-solid-svg-icons'
import { Home, CreatePost } from './pages';

const App = () => {
  return (
     <BrowserRouter>
      <div className="bg-[#fff]">
        <header className='w-full flex justify-between items-center bg-[white] sm:px-8 px-4 py-4 border-b border-b-[#177eff]'>
          <Link to="/">            
            <FontAwesomeIcon icon={faImage} fontSize={"30px"}/>

              <h1 className='float-right text-[#222328] ml-2 text-[22px] font-[700] w-28 object-contain'>Imaginate</h1>

          </Link>
          <Link to="./create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
          </Link>
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#090e14] h-full'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/create-post" element={<CreatePost/>}></Route>
          </Routes>
        </main>
      </div>
     </BrowserRouter>
  )
}

export default App