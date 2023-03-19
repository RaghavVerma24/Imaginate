import React from 'react';

import { download, chat, like } from '../assets';
import { downloadImage, getLikes, openChat } from '../utils';


const Card = ({ _id, name, prompt, photo, likes }) => (
  <div className="rounded-l group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
        <div className="">
          <p className="float-left text-[#fff]">{likes}</p>
          <button type="button" onClick={() => getLikes()} className="float-left outline-none bg-transparent border-none">
            <img src={like} alt="likes" className="ml-3 h-6 object-contain invert" />
          </button>
          <button type="button" onClick={() => openChat()} className="float-left outline-none bg-transparent border-none">
            <img src={chat} alt="chat" className="ml-3 h-6 object-contain invert" />
          </button>
          <button type="button" onClick={() => downloadImage(_id, photo)} className="float-left ml-3 outline-none bg-transparent border-none">
            <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
