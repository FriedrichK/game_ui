"use client";

import {Card, Grid, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import {GameData} from "../interfaces/game";

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

interface GamePageProps {
  gameData: GameData|null,
  gameID: string
}

const GamePage = ({gameData, gameID}: GamePageProps) => {
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
      </Grid>
      <Grid item xs={12} md={3} lg={4} />
    </Grid>
  );
};

export default GamePage;
