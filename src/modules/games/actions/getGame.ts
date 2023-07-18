import axios from "axios";

export const getGame = (gameID: string) => {
  const url = "http://localhost:8000/api/games/" + gameID
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
