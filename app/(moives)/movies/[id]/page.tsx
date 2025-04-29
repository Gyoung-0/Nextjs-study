import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovideInfo from "../../../../components/movie-info";
import MovideVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovideInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovideVideos id={id} />
      </Suspense>
    </div> 
  );
}
