import React from "react";
import GamePage from "../../../modules/games/components/GamePage";
import {GameData} from "../../../modules/games/interfaces/game";

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({params}: PageProps) => {
  let data: GameData|null = null;
  try {
    const res = await fetch('http://localhost:8000/api/games/' + params.slug);
    data = await res.json();
  } catch(err) {
    console.error(err);
  }
  return (
    <GamePage gameID={params.slug} gameData={data} />
  );
}

export default Page;
