import HomePageContent from "../modules/home/components/HomePageContent";

export default async function Home() {
  const res = await fetch('http://localhost:8000/api/games/?page_size=10', { next: { revalidate: 60 } });
  const data = await res.json();
  return (
    <main>
      <HomePageContent gamePage={data} />
    </main>
  )
}
