import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, LayoutDashboard, BookOpen, Award, User, LogOut } from 'lucide-react';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Courses' },
    { icon: <Award className="w-5 h-5" />, label: 'Grades' },
    { icon: <User className="w-5 h-5" />, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 bg-white border-r border-gray-200`}
      >
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="mb-8 px-4">
            <h1 className="text-2xl font-bold text-purple-600">AcademicHub</h1>
          </div>
          
          <nav className="flex-1 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
          </nav>

          <button className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;