import HomePageClient from "@/components/HomePageClient";
import { fetchTotalCommits } from "@/lib/commits";

export default async function Home () {
  const totalCommits = await fetchTotalCommits();

  return <HomePageClient totalCommits={totalCommits}/>
}