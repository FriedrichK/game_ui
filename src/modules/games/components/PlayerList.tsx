import {Chip, Pagination} from "@mui/material";
import {useState} from "react";
import {PlayerData, PlayerDataPage} from "../../players/interfaces/player";

interface PlayerListItemProps {
  id: string,
  key?: any,
  name: string
}

const PlayerListItem = ({id, key, name}: PlayerListItemProps) => {
  const chipStyle: object = {
    width: "100%"
  };

  return (
    <div style={{paddingBottom: "4px", paddingTop: "4px"}}>
      <Chip label={name} style={chipStyle} />
    </div>
  );
}

interface PlayerListViewProps {
  players: Array<PlayerData>
}

const PlayerListView = ({players}: PlayerListViewProps) => {
  const playerItems = (players || []).map(item => (
    <PlayerListItem
      key={item.id}
      id={item.id}
      name={item.name}
    />
  ))
  return (
    <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
      {playerItems}
    </div>
  );
}

interface PlayerListProps {
  gameAPIEndpoint: string,
  gameID: string,
}

const PlayerList = ({gameAPIEndpoint, gameID}: PlayerListProps) => {
  const [dataPage, setDataPage] = useState<PlayerDataPage|null>(null);

  const updateDisplay = (page: number) => {
    fetch(
      gameAPIEndpoint + "/api/game_users/?game=" + gameID + "&page_size=10&format=json" + `&page=${page}`,
      {cache: "no-store"}
    )
      .then(response => response.json())
      .then(data => setDataPage(data));
  }

  if (!dataPage) {
    updateDisplay(1);
  }

  const handleChange = (evt: any, page: number) => {
    updateDisplay(page);
  }

  const {count, results} = (dataPage || {count: 0, results: []});
  const total = count > 0 ? Math.ceil(count / 10) : 0;

  return (
    <div>
      <PlayerListView players={results} />
      <Pagination
        count={total || 0}
        onChange={handleChange}
        variant="outlined"
      />
    </div>
  );
};

export default PlayerList;
