import * as React from "react"

import { cn } from "@/lib/utils"
import { useContext } from "react";
import { QueryContext } from "@/store/QueryContext";
const Input = React.forwardRef(({ className, type, ...props }, ref) => {

  const { queryState , setQueryState } = useContext(QueryContext);

  function handleChange(e){
    setQueryState({...queryState , query: e.target.value})
  }
  return (
    (<input
      type={type}
      value = {queryState.query}
        onChange={handleChange}
       placeholder='Search'
       
      className={cn(
        `${queryState.isSearchPage ? " mr-8 w-[8rem] md:mr-24 md:w-[20rem]  lg:mr-64 lg:w-[28rem]" : " w-full  "} flex h-12 rounded-xl border-1  border-input bg-transparent px-3 py-1 pl-12 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-white`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
