export interface GameData {
  id: string,
  name: string
}

export interface GameDataPage {
  count: number,
  next: string,
  previous: string,
  results: Array<GameData>
}
