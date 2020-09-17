import React from "react";

function BrowseTweetsView() {
  let retreiveTweets = () => {
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
      });
  };

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
      });
  };

  let tweets = {"message":"Successfully retreived user tweets","data":[{"created_at":"Tue Sep 15 12:55:08 +0000 2020","id":1305852652656431000,"id_str":"1305852652656431105","text":"pog","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]},"source":"<a href=\"https://google.hr\" rel=\"nofollow\">react-tweet-manager</a>","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":709452024564293600,"id_str":"709452024564293632","name":"ILikeTrainsx","screen_name":"ITrainsx","location":"","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":3,"friends_count":126,"listed_count":0,"created_at":"Mon Mar 14 18:51:58 +0000 2016","favourites_count":270,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":125,"lang":null,"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png","profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":true,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"und"},{"created_at":"Tue Apr 07 13:12:51 +0000 2020","id":1247512663099310000,"id_str":"1247512663099310080","text":"@pokimanelol ugly ass hoe, take a normal pic for a change","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"pokimanelol","name":"pokimane","id":2244953047,"id_str":"2244953047","indices":[0,12]}],"urls":[]},"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>","in_reply_to_status_id":1247285988507840500,"in_reply_to_status_id_str":"1247285988507840512","in_reply_to_user_id":2244953047,"in_reply_to_user_id_str":"2244953047","in_reply_to_screen_name":"pokimanelol","user":{"id":709452024564293600,"id_str":"709452024564293632","name":"ILikeTrainsx","screen_name":"ITrainsx","location":"","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":3,"friends_count":126,"listed_count":0,"created_at":"Mon Mar 14 18:51:58 +0000 2016","favourites_count":270,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":125,"lang":null,"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png","profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":true,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Sun Mar 01 21:19:25 +0000 2020","id":1234226763590447000,"id_str":"1234226763590447104","text":"@REALMizkif @BillGates","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"REALMizkif","name":"Mizkif","id":4699719036,"id_str":"4699719036","indices":[0,11]},{"screen_name":"BillGates","name":"Bill Gates","id":50393960,"id_str":"50393960","indices":[12,22]}],"urls":[]},"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>","in_reply_to_status_id":1233585379774693400,"in_reply_to_status_id_str":"1233585379774693377","in_reply_to_user_id":4699719036,"in_reply_to_user_id_str":"4699719036","in_reply_to_screen_name":"REALMizkif","user":{"id":709452024564293600,"id_str":"709452024564293632","name":"ILikeTrainsx","screen_name":"ITrainsx","location":"","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":3,"friends_count":126,"listed_count":0,"created_at":"Mon Mar 14 18:51:58 +0000 2016","favourites_count":270,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":125,"lang":null,"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png","profile_image_url_https":"https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":true,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"und"}]};


  return (
    <div>
      <button onClick={() => retreiveTweets()}>get user tweets</button>

      {tweets.data.map((tweet, index) => {
        return (
          <div key={index} style={tweetCSS}>
            <div>Created {tweet.created_at}</div>
            <div style={{ borderBottom: "2px solid lightgrey" }}>
              {" "}
              Status: {tweet.text}{" "}
            </div>
            <button onClick={()=>deleteTweet(tweet.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

let tweetCSS = {
  padding: ".5em 5px",
};

export default BrowseTweetsView;
