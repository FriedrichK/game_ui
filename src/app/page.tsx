import HomePageContent from "../modules/home/components/HomePageContent";
import {GameDataPage} from "../modules/games/interfaces/game";

export default async function Home() {
  let data: GameDataPage|null = null
  try {
    const res = await fetch('http://localhost:8000/api/games/?page_size=10', {next: {revalidate: 60}});
    data = await res.json();
  } catch(err) {
    console.error(err);
  }
  return (
    <main>
      <HomePageContent gamePage={data} />
    </main>
  )
}
