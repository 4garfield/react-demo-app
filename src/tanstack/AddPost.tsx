import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost: {
      title: string;
      body: string
    }) => apiClient.addPost(newPost),
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
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  if (mutation.isSuccess) {
    return <span>Post submitted!</span>;
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
      <button onClick={submitData}>Submit</button>
    </div>
  );
};

export default AddPost;
