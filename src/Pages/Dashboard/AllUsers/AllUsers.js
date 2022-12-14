import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const url = `https://a12-server.vercel.app/users`;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://a12-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Made admin successfully");
          refetch();
        }
      });
  };

  const handleDeleteUser = (id) => {
    // const url = `https://a12-server.vercel.app/users/${id}`;
    // console.log(url);
    fetch(`https://a12-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`User deleted successfully`);
          refetch();
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl text-center text-primary font-bold py-10">
        All Users
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verfication Status</th>
              <th>Admin</th>
              <th>Delet</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user?.email}</td>
                <td>{user.role}</td>
                <td>Not Verified</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <Link
                    onClick={() => {
                      handleDeleteUser(user._id);
                    }}
                    className="btn btn-xs btn-secondary"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
