import {Chip, Pagination} from "@mui/material";
import {useState} from "react";
import Link from "next/link";
import {GameData, GameDataPage} from "../../games/interfaces/game";

interface GamesListItemProps {
  id: string,
  key?: any,
  name: string
  started?: string,
  failed?: string,
  ended?: string
}

interface ChipStyleProps {
  backgroundColor?: string,
  color?: string
  cursor?: string,
  width?: string
}

const GamesListItem = ({id, key, name, started, failed, ended}: GamesListItemProps) => {
  const chipStyle: ChipStyleProps = {
    cursor: "pointer",
    width: "100%"
  };
  if (failed) {
    chipStyle.backgroundColor = "#8B0000";
    chipStyle.color = "#fff";
  }

  const link = `/games/${id}`;
  return (
    <div style={{paddingBottom: "4px", paddingTop: "4px"}}>
      <Link href={link}>
        <Chip label={name} style={chipStyle} />
      </Link>
    </div>
  );
}

interface GamesListProps {
  games: Array<GameData>
}

const GamesList = ({games}: GamesListProps) => {
  const gameItems = (games || []).map(item => (
    <GamesListItem
      key={item.id}
      id={item.id}
      name={item.name}
      started={item.started}
      failed={item.failed}
      ended={item.ended}
    />
  ))
  return (
    <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
      {gameItems}
    </div>
  );
}

interface JoinGameMenuProps {
  gameAPIEndpoint: string,
  gamePage: GameDataPage
}

const JoinGameMenu = ({gameAPIEndpoint, gamePage}: JoinGameMenuProps) => {
  const [dataPage, setDataPage] = useState<GameDataPage>(gamePage)

  if (!gamePage) {
    return null;
  }

  const handleChange = (evt: any, page: Number) => {
    fetch(
      gameAPIEndpoint + "/api/games/?page_size=10&format=json" + `&page=${page}`,
      {cache: "no-store"}
    )
      .then(response => response.json())
      .then(data => setDataPage(data));
  }

  const {count, results} = dataPage;
  const total = count > 0 ? Math.ceil(count / 10) : 0;

  return (
    <div>
      <GamesList games={results} />
      <Pagination
        count={total || 0}
        onChange={handleChange}
        variant="outlined"
      />
    </div>
  );
};

export default JoinGameMenu;
