export const routes = {
  posts: {
    base: "/posts",
    children: {
      getAllPosts: "/",
      getPost: "/:id",
      insertPost: "/",
      updatePost: "/",
      deletePost: "/",
    },
  },
  users: {
    base: "/user",
    children: {
      signup: "/signup",
      login: "/login",
    },
  },
};
