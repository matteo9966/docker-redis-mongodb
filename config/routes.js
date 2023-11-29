export const routes = {
  base:'/api/v1',
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
