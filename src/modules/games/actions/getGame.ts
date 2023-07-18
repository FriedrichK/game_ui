import axios from "axios";

export const getGame = (gameAPIEndpoint: string, gameID: string) => {
  const url = gameAPIEndpoint + "/api/games/" + gameID
  const headers = {
    "accept": "application/json",
    "content-type": "application/json",
  };
  const instance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: headers,
  });
  return instance.get(url);
}
