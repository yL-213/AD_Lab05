/** @param {import("axios").AxiosInstance} instance */
export const makeUser = (instance) => ({
  getAll() {
    return instance.get("/users");
  },
  /** @param {{ id: number, username: string }} */
  patch({ id, username }) {
    return instance.patch(`/users/${id}`, { username });
  },
  /** @param {{ username: string, birthday: string, email: string }} */
  create({ username, birthday, email }) {
    return instance.post("/users", { username, birthday, email });
  },
});