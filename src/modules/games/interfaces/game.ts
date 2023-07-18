export interface GameData {
  id: string,
  name: string
  min_players: number,
  max_players: number,
  started?: string,
  failed?: string,
  ended?:string
}

export interface GameDataPage {
  count: number,
  next: string,
  previous: string,
  results: Array<GameData>
}
