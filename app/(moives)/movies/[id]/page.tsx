import { API_URL } from "../../../(home)/page";


export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return <div></div>
}
