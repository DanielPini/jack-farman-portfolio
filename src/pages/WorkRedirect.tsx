import { Navigate, useParams } from "react-router-dom";

export default function WorkRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/film-practice${slug ? `/${slug}` : ""}`} replace />;
}
