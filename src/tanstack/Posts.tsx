import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

function Posts() {
  const {
    data: posts,
    error,
    isPending,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => apiClient.fetchPosts()
  })

  if (isPending) return <div>Loading...</div>
  if (error) return <div>An error has occurred: {error.message}</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
