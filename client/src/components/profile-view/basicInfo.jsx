import React, { useState } from "react";
import { Pencil } from "lucide-react";

const initialData = {
  Name: "Bharath Kumar M S",
  Gender: "Male",
  Phone: "9876543210",
  Location: {
    street: "2nd Avenue",
    city: "Chennai",
    state: "Tamil Nadu",
    postal_code: "600001",
    country: "India",
  },
  Birthday: "2005-06-22",
  Summary: "Here is my summary ........",
  Website: "www.projecttraders.com",
  Github: "github.com/bharath",
  Linkedin: "linkedin.com/in/bharath",
  Instagram: "instagram.com/bharath",
  Threads: "threads.net/bharath",
  Twitter: "twitter.com/bharath",
  Experience: {
    work: "2 years at TechCo",
    education: "B.Tech CSE - XYZ University",
  },
};

const BasicInfo = () => {
  const [profile, setProfile] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentKey, setCurrentKey] = useState("");
  const [editValue, setEditValue] = useState("");

  const openModal = (key) => {
    setCurrentKey(key);
    if (key === "Location") {
      setEditValue({ ...profile.Location });
    } else if (key === "Experience") {
      setEditValue({ ...profile.Experience });
    } else if (key === "Birthday") {
      const date = new Date(profile.Birthday);
      setEditValue(date.toISOString().split("T")[0]);
    } else {
      setEditValue(profile[key]);
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setProfile({ ...profile, [currentKey]: editValue });
    setIsModalOpen(false);
  };

  const renderLocation = (loc) =>
    `${loc.street}, ${loc.city}, ${loc.state}, ${loc.postal_code}, ${loc.country}`;

  const renderExperience = (exp) =>
    `Work: ${exp.work} | Education: ${exp.education}`;

  return (
    <div className="bg-zinc-900 p-6 rounded-xl text-white space-y-4 w-full max-w-5xl shadow-lg font-poppins">
      {Object.entries(profile).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center justify-between gap-4 bg-zinc-800 px-4 py-3 rounded-xl"
        >
          <div className="flex-1 flex items-center gap-6">
            <div className="min-w-[150px] text-sm text-gray-400 font-medium">{key}</div>
            <div className="flex-1 text-white text-sm font-normal">
              {key === "Location"
                ? renderLocation(value)
                : key === "Birthday"
                ? new Date(value).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : key === "Experience"
                ? renderExperience(value)
                : value}
            </div>
          </div>
          <button
            onClick={() => openModal(key)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
          >
            <Pencil size={16} />
            <span className="text-sm">Edit</span>
          </button>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-zinc-800 p-6 rounded-lg w-[90%] max-w-md space-y-4">
            <h2 className="text-xl font-bold text-white">Edit {currentKey}</h2>

            {currentKey === "Location" ? (
              ["street", "city", "state", "postal_code", "country"].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  value={editValue[field] || ""}
                  onChange={(e) =>
                    setEditValue({ ...editValue, [field]: e.target.value })
                  }
                  className="w-full p-2 mb-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))
            ) : currentKey === "Experience" ? (
              ["work", "education"].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  value={editValue[field] || ""}
                  onChange={(e) =>
                    setEditValue({ ...editValue, [field]: e.target.value })
                  }
                  className="w-full p-2 mb-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))
            ) : currentKey === "Birthday" ? (
              <input
                type="date"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
