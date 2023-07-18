import React from "react";
import GamePage from "../../../modules/games/components/GamePage";
import {GameData} from "../../../modules/games/interfaces/game";

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({params}: PageProps) => {

  const gameAPIEndpoint: string = process.env.GAME_API_ENDPOINT || ""

  let data: GameData|null = null;
  try {
    const res = await fetch(gameAPIEndpoint + '/api/games/' + params.slug);
    data = await res.json();
  } catch(err) {
    console.error(err);
  }
  return (
    <GamePage
      gameAPIEndpoint={gameAPIEndpoint}
      gameID={params.slug}
      gameData={data} />
  );
}

export default Page;
