import React, { useState } from "react";

const InboxPage = () => {
  const [query, setQuery] = useState([
    {
      name: "Albert",
      email: "albertauhis@gmail.com",
      time: generateRandomDate().toLocaleDateString("en-US"),
    },
    {
      name: "Fiona",
      email: "ffiona@gmail.com",
      time: generateRandomDate().toLocaleDateString("en-US"),
    },
    {
      name: "Ming",
      email: "ming41528@yahoo.com",
      time: generateRandomDate().toLocaleDateString("en-US"),
    },
  ]);

  function generateRandomDate() {
    return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
  }

  return (
    <div className="w-full h-full">
      <h1 className="card-title text-xl"> Query List</h1>
      <div className="flex flex-col gap-4 py-6 mr-4">
        {query.map((data, dataIdx) => (
          <div
            key={data.name}
            className="card w-full bg-base-100 shadow-xl border-b border-base-300 flex flex-row items-center justify-between px-6 py-4 cursor-pointer hover:bg-base-200"
          >
            <div className="flex flex-row items-center gap-10">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <h1 className="text-lg font-medium">{data.name}</h1>
              <h1 className="text-lg font-light">{data.email}</h1>
            </div>
            <div>
              <h1 className="text-lg font-light">{data.time}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
