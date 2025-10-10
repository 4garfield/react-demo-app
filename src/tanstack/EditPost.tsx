import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (post: {
      title: string;
      body:string
    }) => apiClient.updatePost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      setTitle("");
      setBody("");
    },
  });

  const submitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isPending) {
    return <span>Updating...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  if (mutation.isSuccess) {
    return <span>Post updated!</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={submitData}>Update</button>
    </div>
  );
};

export default EditPost;
