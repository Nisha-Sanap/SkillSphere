import { motion } from 'framer-motion';
import { HiOutlineBookOpen, HiOutlineClock, HiOutlineTrendingUp, HiOutlineChartBar } from 'react-icons/hi';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Courses', value: '12', icon: HiOutlineBookOpen, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Hours Studied', value: '124', icon: HiOutlineClock, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Skill Level', value: 'Intermediate', icon: HiOutlineTrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Avg. Score', value: '92%', icon: HiOutlineChartBar, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      
      <main className="ml-64 flex-1 p-8">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}! 👋</h1>
            <p className="text-slate-500 mt-1">Here's what's happening with your learning journey.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-outline">My Schedule</button>
            <button className="btn btn-primary">Start New Course</button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card bg-white"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center text-2xl`}>
                  <stat.icon />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="card bg-white">
              <h2 className="font-bold text-xl mb-6">Recent Courses</h2>
              <div className="space-y-4">
                <CourseItem 
                  title="Advanced React Patterns" 
                  progress={75} 
                  image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop"
                />
                <CourseItem 
                  title="Node.js Microservices" 
                  progress={30} 
                  image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=200&fit=crop"
                />
                <CourseItem 
                  title="UI Design Fundamentals" 
                  progress={100} 
                  image="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?w=200&h=200&fit=crop"
                />
              </div>
            </section>
          </div>

          <aside className="space-y-8">
             <section className="card bg-primary-900 text-white">
               <h3 className="font-bold text-lg mb-2">Skill Upgrade Available</h3>
               <p className="text-primary-200 text-sm mb-6">Take our new assessment and unlock exclusive advanced courses.</p>
               <button className="w-full bg-white text-primary-900 btn py-2 font-bold hover:bg-primary-50">Take Assessment</button>
             </section>

             <section className="card bg-white">
                <h3 className="font-bold text-lg mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                   <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">21</div>
                      <div>
                        <p className="text-sm font-semibold">Final Project Submission</p>
                        <p className="text-xs text-slate-400">React Mastery Course</p>
                      </div>
                   </div>
                </div>
             </section>
          </aside>
        </div>
      </main>
    </div>
  );
};

const CourseItem = ({ title, progress, image }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
    <img src={image} className="w-16 h-16 rounded-xl object-cover" alt="" />
    <div className="flex-1">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-2 flex items-center gap-3">
        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-500 rounded-full transition-all duration-1000" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs font-bold text-slate-500">{progress}%</span>
      </div>
    </div>
  </div>
);

export default Dashboard;
