"use client";

import {Card, Grid, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";

export interface GameHeaderProps {
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
  gameData: GameHeaderProps,
  gameID: string
}

const GamePage = ({gameData, gameID}: GamePageProps) => {
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
