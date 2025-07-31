import React, { useEffect, useState } from "react";

function Users() {
  let [holdUsers, setHoldUsers] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3700/user/allusers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setHoldUsers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3700/user/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      const data = await response.json();
      console.log( data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }


return (
    <div>
      <table className="border-collapse border border-blue-300 w-full">
        <thead className="bg-blue-200">
          <tr className="border border-blue-300">
            <th className="p-2 text-left">Fullname</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Del.</th>
          </tr>
        </thead>
        <tbody className="divided-y divide-blue-300">
          {loading ? (
            <tr>
              <td colSpan="4" className="p-2 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            holdUsers.map((users, index) => (
              <tr key={users.index} className="border border-blue-300">
                <td className="p-2">{users.fullname}</td>
                <td className="p-2">{users.email}</td>
                <td className="p-2">{users.role}</td>
                <td className="p-2">
                    <button onClick={()=>handleDelete(users,_id)} className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-500 ">
                    del.
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      
    </div>
  );
}

export default Users;
