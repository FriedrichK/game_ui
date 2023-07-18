"use client";

import CreateNewGameForm from "./CreateNewGameForm";
import {Card, Grid} from "@mui/material";
import JoinGameMenu from "./JoinGameMenu";
import {useState} from "react";
import WaitForGameDisplay from "./WaitForGameDisplay";
import {GameDataPage} from "../../games/interfaces/game";

interface JoinGamesMenuProps {
  className?: string,
  gamePage: GameDataPage
}

const JoinGamesMenu = ({gamePage}: JoinGamesMenuProps) => {
  return (
    <Card style={{marginBottom: "16px", padding: "16px"}}>
      <JoinGameMenu gamePage={gamePage} />
    </Card>
  );
};

interface NewGameMenuProps {
  className?: string
}

const NewGameMenu = ({className}: NewGameMenuProps) => {
  const [gameID, setGameID] = useState<string|null>(null);

  const handleGameCreation = (gameID: string) => {
    setGameID(gameID);
  }

  const content = gameID ? (
    <WaitForGameDisplay gameID={gameID} />
  ) : (
    <CreateNewGameForm handleGameCreation={handleGameCreation} />
  );

  return (
    <Card className={className} style={{padding: "16px"}}>
      {content}
    </Card>
  );
};

interface HomePageContentProps {
  gamePage: GameDataPage
}

const HomePageContent = ({gamePage}: HomePageContentProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} lg={4} />
      <Grid item xs={12} md={6} lg={4}>
        <JoinGamesMenu gamePage={gamePage} />
        <NewGameMenu />
      </Grid>
      <Grid item xs={12} md={3} lg={4} />
    </Grid>
  );
};

export default HomePageContent;
