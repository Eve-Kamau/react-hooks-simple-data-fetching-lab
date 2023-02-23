// create your App component here
import React, { useState, useEffect } from "react";

function App() {
 const [dogPics, setPics] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/dogs") 
        .then((res) => res.json())
        .then((data) => {
        setPics(data.message);
        setIsLoading(true); 
     });

}, []);

if(!isLoading) {
return <p>Loading.....</p>;
} else {
return (
    <div>
    {dogPics.map((dog => (
    <img src={dog} key={dog} alt="A Random Dog"/> 
    )))}
    </div>
 );
}
}

export default App;