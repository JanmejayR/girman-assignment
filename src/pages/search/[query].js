import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import UserCard from "@/components/ui/UserCard";

import toast from "react-hot-toast";
const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);

      const fetchUserData = async () => {
        try {
          const response = await fetch(`/api/search?query=${query}`);
          const userData = await response.json();
          setResults(userData);
          
          if( userData.length === 0){
            toast.error("No user found for given input")
          }

          
          setLoading(false);
        } catch (error) {
          console.log("Error occurred during fetching data from api");
          toast.error("Error occured while fetching data")
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [query]);
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white to-blue-300">
      <Navbar />

      {results.length === 0 ? (
        <div className="flex justify-center mt-16">
             <Image
          src="/notFound.png"
          width={473}
          height={403}
          className=" h-72 w-72 sm:w-[30rem] sm:h-[30rem]"
        />
        </div>
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center mt-16  sm:px-64 gap-8 ">
          {results.map((user) => (
            <UserCard
               key={user._id}
              firstName={user.first_name}
              lastName={user.last_name}
              city={user.city}
              phoneNumber={user.contact_number}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default SearchResults;
