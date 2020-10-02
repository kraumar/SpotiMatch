import React, { useEffect, useState } from "react";
import axios from "axios";

export const spotiAuthEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "d72d75d93c8b4a45ba5f1910c5ba2f12";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-recently-played", "user-read-currently-playing"];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    if (item) {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

const App = () => {
  const [token, setToken] = useState(null);
  // const [data, setData] = useState(null);

  useEffect(() => {
    console.log("here");
    const token = hash.access_token;
    if (token) {
      setToken(token);
    }
  }, [setToken]);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: { Authorization: "Bearer " + token }
        }
      );

      console.log(data);
      // setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!token && (
        <a
          href={`${spotiAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {token && <button onClick={getData}>GET DATA</button>}
    </div>
  );
};

export default App;