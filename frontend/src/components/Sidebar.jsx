import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineLogout,
  HiOutlineAcademicCap,
  HiOutlineViewGrid
} from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { logout, user } = useAuth();

  const navItems = [
    { name: 'Dashboard', icon: HiOutlineViewGrid, path: '/dashboard' },
    { name: 'Profile', icon: HiOutlineUser, path: '/profile' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 p-4 transition-all duration-300">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white text-xl">
          <HiOutlineAcademicCap />
        </div>
        <span className="font-bold text-xl tracking-tight">SkillSphere</span>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
              ${isActive 
                ? 'bg-primary-50 text-primary-600 font-medium' 
                : 'text-slate-600 hover:bg-slate-50'}
            `}
          >
            <item.icon className="text-xl" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <div className="p-4 bg-slate-50 rounded-xl mb-4">
           <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Logged in as</p>
           <p className="text-sm font-semibold truncate">{user?.name}</p>
           <p className="text-xs text-slate-400 truncate">{user?.email}</p>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <HiOutlineLogout className="text-xl" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
