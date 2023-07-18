import Cookies from "universal-cookie";

export const createPlayerCookie = (gameID: string, playerID: string, name: string) => {
  const cookies: Cookies = new Cookies();
  const data = JSON.stringify({
    playerID: playerID,
    name: name
  })
  cookies.set("game_" + gameID, data, {path: "/"});
};