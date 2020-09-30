import React, { useState } from "react";

function Tweet() {
  const [statusText, setStatusText] = useState("")

  const handleTweetChange = (e)=>{
    setStatusText(e.target.value);
  }

  let tweet = () => {
    fetch("/api/tweet", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: statusText}),    
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.message);
        setStatusText("")
      });
  };

  return (
    <div>
      <input type="text" onChange={handleTweetChange} value={statusText}/>
      <button onClick={()=>tweet()}>Tweet Hello world!</button>
    </div>
  );
}

export default Tweet;
