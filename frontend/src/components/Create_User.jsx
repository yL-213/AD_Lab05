import { useState } from "react";
import services from "../services";

function CreateUser() {
  const [form, setForm] = useState({
    username: "",
    birthday: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, birthday, email } = form;
    if (username && birthday && email) {
      services.user
        .create({ username, birthday, email })
        .then(() => {
          setStatus("User created!");
          setForm({ username: "", birthday: "", email: "" });
        })
        .catch(() => {
          setStatus("Failed to create user.");
        });
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Username</span>
            <input
              className="mt-1 block w-full"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Birthday</span>
            <input
              className="mt-1 block w-full"
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              className="mt-1 block w-full"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <input
            className="mt-1 block w-full bg-transparent hover:bg-blue-50 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
            type="submit"
            value="Create"
          />
        </div>
        {status && <p className="mt-4 text-gray-600">{status}</p>}
      </form>
    </div>
  );
}

export default CreateUser;