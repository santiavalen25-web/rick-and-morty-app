// app/episodes/page.tsx
import EpisodeCard from "../../components/EpisodeCard";
import Pagination from "../../components/Pagination";
import { getEpisodes } from "../../services/api";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function EpisodesPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const data = await getEpisodes(page);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-extrabold text-slate-800">Episodios</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.results.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      <Pagination totalPages={data.info.pages} />
    </div>
  );
}