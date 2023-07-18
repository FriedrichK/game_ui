import {Card} from "@mui/material";
import JoinGamePageMenuForm from "./JoinGamePageMenuForm";
import {useState} from "react";
import {createPlayerCookie} from "../../players/utils";

interface JoinGamePageMenuProps {
  gameAPIEndpoint: string,
  gameID: string
}

const JoinGamePageMenu = ({gameAPIEndpoint, gameID}: JoinGamePageMenuProps) => {
  const [playerID, setPlayerID] = useState<string|null>(null);

  const handlePlayerCreation = (newPlayerID: string, name: string) => {
    setPlayerID(newPlayerID);
    createPlayerCookie(gameID, newPlayerID, name);
  }

  if (playerID) {
    return null;
  }

  return (
    <Card style={{marginTop: "16px", padding: "16px"}}>
      <JoinGamePageMenuForm
        gameAPIEndpoint={gameAPIEndpoint}
        gameID={gameID}
        handlePlayerCreation={handlePlayerCreation} />
    </Card>
  );
}

export default JoinGamePageMenu;
