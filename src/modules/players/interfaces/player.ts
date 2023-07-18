export interface PlayerData {
  id: string,
  name: string
}

export interface PlayerDataPage {
  count: number,
  next: string,
  previous: string,
  results: Array<PlayerData>
}
