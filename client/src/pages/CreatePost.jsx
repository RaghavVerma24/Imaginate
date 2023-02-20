import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',

   })

   const [generatingImg, setgeneratingImg] = useState(false);
   const [loading, setloading] = useState(false);

   const handleSubmit = () => {

   }

   const handleChange = (e) => {

   }

   const handleSurpriseMe = () => {

   }

  return (
    <section className="max-w-7xl mx-auto">
      <div className="">
      <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#6666e75] text-[16px] max-w-[500px]">
          Create imaginative and visually stunning
          images through DALL-E AI and share them with the community
        </p>
      </div>

      <form action="" className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A man standing in front of a stargate to another dimension"
            value={form.prompt}
            handleChange={handleChange}
            isSurpiseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost