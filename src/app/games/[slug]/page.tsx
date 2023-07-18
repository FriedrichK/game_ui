import React from "react";
import GamePage from "../../../modules/games/components/GamePage";
import {GameData} from "../../../modules/games/interfaces/game";
import {cookies} from "next/headers";

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async (props: PageProps) => {
  const gameAPIEndpoint: string = process.env.GAME_API_ENDPOINT || ""

  const gameID: string = props.params.slug;

  const cookieStore = cookies();
  const player = cookieStore.get(`player_${gameID}`);

  let data: GameData|null = null;
  try {
    const res = await fetch(
      gameAPIEndpoint + '/api/games/' + gameID,
      {next: {revalidate: 60}}
    );
    data = await res.json();
  } catch(err) {
    console.error(err);
  }
  return (
    <GamePage
      gameAPIEndpoint={gameAPIEndpoint}
      gameID={props.params.slug}
      gameData={data}
      player={player} />
  );
}

export default Page;
