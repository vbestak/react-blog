import React, {useEffect, useState} from "react";

function BrowseTweetsView() {
  let [tweets, setTweets] = useState([])
  let body = "";

  useEffect(() => {
    fetch("/api/user-tweets", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.message);
        setTweets(data.data)
      });
  }, [tweets])

  let deleteTweet = (id) => {
    fetch(`/api/tweet/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.message);
        setTweets(tweets = [""]);
      });
  };

  if(tweets != undefined){
    body = tweets.map((tweet, index) => {
      return (
        <div key={index} style={tweetCSS}>
          <div>Created {tweet.created_at}</div>
          <div style={{ borderBottom: "2px solid lightgrey" }}>
            {" "}
            Status: {tweet.text}{" "}
          </div>
          <button onClick={()=>deleteTweet(tweet.id_str)}>Delete</button>
        </div>
      );
    })
  }

  return (
    <div>
      {body}
    </div>
  );
}

let tweetCSS = {
  padding: ".5em 5px",
};

export default BrowseTweetsView;
