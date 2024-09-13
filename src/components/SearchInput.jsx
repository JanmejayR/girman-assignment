import React , { useState , useContext } from "react";
import { QueryContext } from "@/store/QueryContext";
import { Input } from "./ui/input";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
const SearchInput = () => {

    const { queryState , setQueryState }= useContext(QueryContext);
    const query = queryState.query;
    const router = useRouter();

    function handleSubmit(e){

        e.preventDefault();

        
        if (query.trim()) {
            setQueryState({...queryState , isSearchPage: true})
            router.push(`/search/${encodeURIComponent(query.trim())}`);
          }
          else {
            toast.error('Please Enter some input')
          }

    }
  return (
    <div className={`relative ${queryState.isSearchPage ? " " : ""}`}>
        <form onSubmit={handleSubmit} >      
            <Input/>
      <img
        src="/magnifying-glass.svg"
        alt="Search"
        className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6 text-gray-500"
      />
      </form>

    </div>
  );
};

export default SearchInput;
