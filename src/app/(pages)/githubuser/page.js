"use client";

import Heading from "@/app/components/githubUser/Heading";
import Search from "@/app/components/githubUser/Search";
import UserCard from "@/app/components/githubUser/UserCard";
import { useEffect, useState } from "react";

const GithubUser = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState("");
  const [error, setError] = useState(null);

  // handle search
  const handleSearch = (e) => {
    setSearchUser(e.target.value);
  };

  // handle effect
  useEffect(() => {
    const fetchDate = async () => {
      if (searchUser) {
        searchUser.trim();
      }
      try {
        const response = await fetch(
          `https://api.github.com/users/${searchUser}`
        );

        const user = await response.json();
        if (!user) {
          alert("User not found ?");
        }
        setUserData(user);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDate();
  }, [searchUser]);

  return (
    <div className="px-2 py-20 sm:px-20 bg-gradient-to-r from-neutral-300 to-stone-400">
      <div className="w-1/2 mx-auto p-2 rounded shadow-lg border">
        <div className="flex justify-between items-center">
          <Heading />
          <Search onSearch={handleSearch} />
        </div>
      </div>

      <div className="w-1/2 mx-auto p-4 rounded-lg shadow-xl border-slate-300 border-2 my-10">
        <UserCard onUserData={userData} />
      </div>
    </div>
  );
};

export default GithubUser;
