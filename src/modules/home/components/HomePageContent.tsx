"use client";

import CreateNewGameForm from "./CreateNewGameForm";
import {Card, Grid} from "@mui/material";
import JoinGameMenu from "./JoinGameMenu";
import {useState} from "react";
import WaitForGameDisplay from "./WaitForGameDisplay";
import {GameDataPage} from "../../games/interfaces/game";

interface JoinGamesMenuProps {
  className?: string,
  gameAPIEndpoint: string,
  gamePage: GameDataPage|null
}

const JoinGamesMenu = ({gameAPIEndpoint, gamePage}: JoinGamesMenuProps) => {
  if (!gamePage) {
    return null;
  }
  return (
    <Card style={{marginBottom: "16px", padding: "16px"}}>
      <JoinGameMenu gameAPIEndpoint={gameAPIEndpoint} gamePage={gamePage} />
    </Card>
  );
};

interface NewGameMenuProps {
  className?: string,
  gameAPIEndpoint: string
}

const NewGameMenu = ({className, gameAPIEndpoint}: NewGameMenuProps) => {
  const [gameID, setGameID] = useState<string|null>(null);

  const handleGameCreation = (gameID: string) => {
    setGameID(gameID);
  }

  const content = gameID ? (
    <WaitForGameDisplay
      gameAPIEndpoint={gameAPIEndpoint}
      gameID={gameID} />
  ) : (
    <CreateNewGameForm
      gameAPIEndpoint={gameAPIEndpoint}
      handleGameCreation={handleGameCreation} />
  );

  return (
    <Card className={className} style={{padding: "16px"}}>
      {content}
    </Card>
  );
};

interface HomePageContentProps {
  gameAPIEndpoint: string,
  gamePage: GameDataPage|null
}

const HomePageContent = ({gameAPIEndpoint, gamePage}: HomePageContentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} lg={4} />
      <Grid item xs={12} md={6} lg={4}>
        <JoinGamesMenu gameAPIEndpoint={gameAPIEndpoint} gamePage={gamePage} />
        <NewGameMenu gameAPIEndpoint={gameAPIEndpoint} />
      </Grid>
      <Grid item xs={12} md={3} lg={4} />
    </Grid>
  );
};

export default HomePageContent;
