import axios from "axios";

export const startGame = (gameAPIEndpoint: string, name: string) => {
  const url = gameAPIEndpoint + "/conductor/create_game/"
  const data = {
    "name": name,
    "min_players": 3,
    "max_players": 10
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
