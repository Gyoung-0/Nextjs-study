import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: Promise<{ id: string }>;
}

// ✅ generateMetadata - Promise 버전
export async function generateMetadata({ params }: IParams) {
  const { id } = await params;   // 🔥 Promise니까 여기서 await
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// ✅ MovieDetailPage - Promise 버전
export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params;   // 🔥 Promise니까 여기서 await

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
