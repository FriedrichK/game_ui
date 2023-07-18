"use client";

import {Card, Grid, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import {GameData} from "../interfaces/game";
import JoinGamePageMenu from "./JoinGamePageMenu";
import {PlayerData} from "../../players/interfaces/player";
import PlayerList from "./PlayerList";

interface GameHeaderProps {
  id: string,
  name: string
}

const GameHeader = ({id, name}: GameHeaderProps) => {
  return (
    <Card style={{padding: "16px"}}>
      <Link href="/">
        <HomeIcon />
      </Link>
      <Typography variant="h3" style={{textAlign: "center"}}>
        {name}
      </Typography>
    </Card>
  );
};

interface GameErrorProps {
  failed: string | undefined
}

const GameError = ({failed}: GameErrorProps) => {
  if (!failed) {
    return null;
  }
  return (
    <Card style={{backgroundColor: "#8B0000", color: "#fff", marginTop: "16px", padding: "16px"}}>
      Unfortunately, this game could not be completed successfully.
    </Card>
  );
}

interface GamePageProps {
  gameAPIEndpoint: string,
  gameData: GameData|null,
  gameID: string,
  player: any
}

const GamePage = ({gameAPIEndpoint, gameData, gameID, player}: GamePageProps) => {
  if (!gameData) {
    return (
      <div>game not found</div>
    );
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} lg={4} />
      <Grid item xs={12} md={6} lg={4}>
        <GameHeader {...(gameData || {})} />
        <GameError failed={gameData.failed} />
        {!gameData?.failed && !player && <JoinGamePageMenu gameAPIEndpoint={gameAPIEndpoint} gameID={gameID} />}
        {!gameData?.failed && <PlayerList gameAPIEndpoint={gameAPIEndpoint} gameID={gameID} />}
      </Grid>
      <Grid item xs={12} md={3} lg={4} />
    </Grid>
  );
};

export default GamePage;
