import axios from "axios";

export const createPlayer = (
  gameAPIEndpoint: string,
  gameID: string,
  name: string,
  password: string
) => {
  const url = gameAPIEndpoint + "/conductor/join_game/"
  const data = {
    "game_id": gameID,
    "name": name,
    "password": password,
  };
  const headers = {
    "accept": "application/json",
    "content-type": "application/json"
  };
  const instance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: headers
  });
  return instance.post(url, data);
}
