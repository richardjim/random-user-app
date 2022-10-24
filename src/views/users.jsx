import React, { useState, useEffect } from "react";
import { GrLocation, GrLocationPin } from "react-icons/gr";
import moment from "moment";
import { AiOutlineMail } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";
// import Card from "../components/card";
import Pagination from "../components/paginate";

const baseApi = `https://randomuser.me/api?results=50`;

const User = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const fetchUserData = async () => {
    const res = await fetch(baseApi);
    const users = await res.json();
    setUsers(users.results);
    console.log(users.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {currentUsers.map((user) => {
          const {
            login: { uuid, username },
            name: { title, first, last },
            gender,
            location: {
              street: { number, name },
              city,
              state,
              country,
              postcode,
              coordinates: { latitude, longitude },
              timezone: { offset, description },
            },
            email,
            dob: { date, age },
            phone,
            cell,
            picture: { large },
          } = user;

          return (
            <div
              key={uuid}
              className="bg-white shadow-lg py-4 px-8 rounded-lg xl:w-9/12 xl:px-0 xl:pb-0"
            >
              <img
                src={large}
                alt={first}
                className="block mx-auto rounded-full mb-5"
              />
              <div className="text-center">
                <h2 className="text-3xl">
                  {title}. {first} {last}
                </h2>
                <p className="capitalize text-xl">{gender}</p>
              </div>

              <div className="xl:flex xl:justify-between xl:mt-10 xl:bg-gray-800 xl:text-white xl:px-8 xl:py-5">
                <div className="my-5 xl:my-0">
                  <h4 className="text-2xl mb-3">Personal Details:</h4>
                  <small className="flex items-center text-xl">
                    <AiOutlineMail className="mr-2" /> {email}
                  </small>
                  <small className="block mt-2 text-xl">
                    DOB: {moment(`${date}`).format("MMMM Do YYYY")}
                  </small>
                  <small className="block mt-2 text-xl">{age} Years</small>
                  <small className="block mt-2 text-xl">@{username}</small>
                </div>
            
                {/* <div className="my-10 xl:my-0">
                  <p className="flex items-center mt-1">
                    <FaMobileAlt className="mr-2" /> {phone}
                  </p>
                  <p className="flex items-center mt-1">
                    <FcCellPhone className="mr-2" /> {cell}
                  </p>
                </div> */}

                {/* <ul className="my-20 xl:my-0">
                  <GrLocationPin className="text-4xl" />
                  <li>Country: {country}</li>
                  <li>City: {city}</li>
                  <li>State: {state}</li>
                  <li>Postal Code: {postcode}</li>
                  <li>
                    Street: {number}, {name}
                  </li>
                </ul> */}

                {/* <div>
                  <GrLocation className="text-4xl" />
                  <p>Latitude: {latitude}</p>
                  <p>Longitude: {longitude}</p>
                </div> */}
              </div>

              {/* <div className="xl:bg-gray-800 xl:text-white xl:px-8 xl:rounded-b-lg xl:pb-8">
                <p>
                  Timezone: {offset}, {description}
                </p>
              </div> */}
            </div>
          );
        })}
        
      </section>
      <Pagination
                  usersPerPage={usersPerPage}
                  totalUsers={users.length}
                  paginate={paginate}
                />
    </>
  );
};

export default User;
