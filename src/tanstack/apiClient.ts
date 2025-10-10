export interface IPost {
  id: number;
  title: string;
  body: string;
}

class ApiClient {

  private baseUrl: string;
  
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com/posts"
  }

  async fetchPosts(): Promise<IPost[]> {
    const response = await fetch(this.baseUrl);
    return response.json();
  }

  // this api won't really create the post
  async addPost(newPost: Omit<IPost, 'id'>): Promise<IPost> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  }

  // this api won't really update the post
  async updatePost(updatedPost: Omit<IPost, 'id'>): Promise<IPost> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  }

  // this api won't really delete the post
  async deletePost(postId: number): Promise<void> {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    });
  }

}

export const apiClient = new ApiClient()
