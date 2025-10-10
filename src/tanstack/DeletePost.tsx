import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

function DeletePost() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (postId: number) => apiClient.deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const deleteData = () => {
    mutation.mutate(1);
  };

  if (mutation.isPending) {
    return <span>Deleting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  if (mutation.isSuccess) {
    return <span>Post deleted!</span>;
  }

  return (
    <div>
      <button onClick={deleteData}>Delete Post</button>
    </div>
  );
};

export default DeletePost;
