"use client";
import { useState} from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const [randomLoading, setRandomLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }
    async function RandomeSearch() {
      setRandomLoading(true);
      const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then(res=>res.json()).then(data=>data[0]);
      console.log(response);
      if(!response.trim()) return;
        router.push(`/search/web?searchTerm=${response}`);
        setRandomLoading(false);
    }
  return (
    <>
    <form onSubmit={handleSubmit}
    className="flex w-full mx-auto mt-5 max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
    <AiOutlineSearch className="text-lg text-gray-500 mr-3"/>
    <input type="text" className="flex-grow focus:outline-none"
    onChange={(e)=>setInput(e.target.value)} value={input}/>
    <BsFillMicFill className="text-lg text-gray-500 mr-3"/>
    </form>
    <dev className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-9">
        <button className="btn" onClick={handleSubmit}>Google Search</button>
        <button disabled={randomLoading}
        className="btn flex items-center justify-center disabled:opacity-80" onClick={RandomeSearch}>
          {randomLoading ? (
          <img src="spinner.svg" alt="Loading..."
          className="h-10 text-center"/>)
          :("I am Feeling Lucky")}
          </button>
    </dev>
    </>
  )
}
