import React, { useEffect, useState } from "react";


function App() {
  let[holdButton, setHoldButton] = useState([]);
  let[loading, setLoading] = useState(false);


useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3700/post/allpost');
      const data = await response.json();
      setHoldButton(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);


  return (
    <div>
      <table className="border-collapse border border-blue-300">
        <thead className="bg-blue-200">
          <tr className="border border-blue-300">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Snippet</th>
            <th className="p-2 text-left">Content</th>
            <th className="p-2 text-left">Author</th>
          </tr>
        </thead>
        <tbody className="divided-y divide-blue-300">
          {loading ? (
            <tr>
              <td colSpan="4" className="p-2 text-center">Loading...</td>
            </tr>
          ) : (
            holdButton.map((item, index) => (
              <tr key={item._id} className="border border-blue-300">
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.snippet}</td>
                <td className="p-2">{item.content}</td>
                <td className="p-2">{item.author?.fullname}</td>
              </tr>
            ))
          )}

        </tbody>
      </table>

    </div>
  )
}

export default App
