import React, { useEffect, useState } from "react";
import Card from "./Card";


const Header = () =>  {
    const [users, setUsers] = useState([]);
  
    const[loading, setLoading] = useState(false);
    const[errorm, setErrorm] = useState("");
  
    const apiUrl = ('https://reqres.in/api/users'); 
  
    useEffect(() => {
      setLoading(true);
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setLoading(false);
          setUsers(data.data); 
        })
        .catch(error => {
          setLoading(false);
          setErrorm(error.message);
          // console.log('Error fetching data:', error);
        });
    }, []); 
  console.log(users)
    return (
        <div>
          <div className='flex'>
          {loading ? <p>Loading...</p> : errorm ? <p>{errorm}</p> : !users?.length ? <p>No record found</p> : (
            users.map(user => (
                <Card />
            ))
          ) }

          </div>
        </div>
      );
  }

export default Header
