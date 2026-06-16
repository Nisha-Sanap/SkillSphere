import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineGlobeAlt } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white text-xl">
              <HiOutlineAcademicCap />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">SkillSphere</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-slate-600 font-semibold hover:text-primary-600">Login</Link>
            <Link to="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Learn anything, <br />
            <span className="text-primary-600">from anywhere.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empower your potential with SkillSphere. Join thousands of learners mastering new skills with our premium platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <Link to="/register" className="btn btn-primary text-lg">Create Account</Link>
            <Link to="/login" className="btn btn-outline text-lg">View Demo</Link>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
           <FeatureCard 
             icon={HiOutlineLightningBolt} 
             title="Fast Learning" 
             description="Master complex topics in weeks, not months, with our streamlined curriculum." 
           />
           <FeatureCard 
             icon={HiOutlineShieldCheck} 
             title="Certified Courses" 
             description="Every course you finish comes with a recognized certificate to boost your resume." 
           />
           <FeatureCard 
             icon={HiOutlineGlobeAlt} 
             title="Global Community" 
             description="Connect with learners and industry experts from around the world." 
           />
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="card bg-white"
  >
    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 text-2xl mb-6">
      <Icon />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default Home;
