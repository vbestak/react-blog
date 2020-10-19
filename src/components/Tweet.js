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
      <input type="text" onChange={handleTweetChange} value={statusText} style={{borderTop:'none', borderRight:'none', borderLeft:'none', borderBottom:'2px solid #0f8b8d', marginRight:'4px', height:'32px', boxSizing:'border-box', outline:'none'}} />
      <button onClick={()=>tweet()} style={{backgroundColor:'#0f8b8d', border:'none', color:'white', padding:'8px 22px', fontSize:'18px', fontWeight:200}}>Post</button>
    </div>
  );
}

export default Tweet;
