import React ,{ useState,useEffect} from, useEffect 'react';

const Home = () => {

  const getsUsers = async () => {
    const res = await fetch("https://fakestoreapi.com/users");
    const resJetson = res.json();
    setUsers(resJson);
  };

  useEffect (() => {
    getUsers();
  },[]);

  return (
    <div className="d-flex flex-wrap">
    {user.map((item)) => {
      return (
        <Card 
        title = {item.description}
        imageUrl={item.image}        
      />
      );
      })}
    }
    </div>
  );
}

export default Home