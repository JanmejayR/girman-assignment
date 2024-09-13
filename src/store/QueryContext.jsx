import { createContext, useState , useEffect } from "react";
import { useRouter } from "next/router";
export const QueryContext = createContext({});

export const QueryContextProvider = ({children})=>{
    const [queryState, setQueryState] = useState({
        query: '',
        isSearchPage: false,
    });

    const router = useRouter();

  useEffect(() => {
    const isSearchPage = router.pathname.startsWith('/search/');
    setQueryState(prevState => ({
      ...prevState,
      isSearchPage
    }));
  }, [router.pathname]);

    return (
       < QueryContext.Provider value={{queryState , setQueryState}}>
       {children}
       </QueryContext.Provider>
    )
}