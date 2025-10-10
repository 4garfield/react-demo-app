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
    if (!response.ok) {
      throw new Error('Network error');
    }
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
    if (!response.ok) {
      throw new Error('Network error');
    }
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
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  }

  // this api won't really delete the post
  async deletePost(postId: number): Promise<void> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  }

}

export const apiClient = new ApiClient()
