import React, { useState } from 'react';
import BottomNav from '../common/header';
import { User, Code, Share2, Check } from 'lucide-react';
import { useSelector } from 'react-redux';

function AccelerateHeader() {
  const { user } = useSelector((state) => state.auth);
  const userRole = user?.role || "";

  const [selectedRole, setSelectedRole] = useState(userRole); // track active role locally

  const roles = [
    {
      name: "subscriber",
      icon: <User size={18} />,
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      name: "collaborator",
      icon: <Code size={18} />,
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      name: "contributor",
      icon: <Share2 size={18} />,
      color: "bg-cyan-500 hover:bg-cyan-600",
    },
  ];

  const handleRoleClick = (roleName) => {
    setSelectedRole(roleName);
    // Optional: update backend or redux store here if needed
    // dispatch(updateUserRole(roleName));
  };

  return (
    <div className='custom-bg w-full flex flex-col items-center justify-center min-h-[35rem] relative overflow-hidden gap-10'>
      <BottomNav />
      <h1 className="text-5xl font-bold mb-4 text-center text-white">Accelerate Your Impact</h1>

      <div className="text-6xl mb-6 animate-bounce">🚀</div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {roles.map((role) => {
          const isActive = selectedRole === role.name;
          return (
            <div key={role.name} className="flex flex-col items-center">
              <button
                onClick={() => handleRoleClick(role.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium shadow-lg capitalize transition duration-200 ${role.color} ${
                  isActive ? 'ring-4 ring-white/30 scale-105' : ''
                }`}
              >
                {role.icon}
                {role.name}
              </button>
              {isActive && (
                <span className="text-green-400 text-sm mt-1 flex items-center gap-1">
                  <Check size={14} />
                  Active
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccelerateHeader;
