import axios from "axios";

export const startGame = (name: string) => {
  const url = "http://localhost:8000/conductor/create_game/"
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
