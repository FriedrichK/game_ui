import React from "react";
import GamePage from "../../../modules/games/components/GamePage";

interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({params}: PageProps) => {
  const res = await fetch('http://localhost:8000/api/games/' + params.slug);
  const data = await res.json();
  return (
    <GamePage gameID={params.slug} gameData={data} />
  );
}

export default Page;
