import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppHooks';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAppSelector(state => state.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              🚀 Biznet
            </Link>
            
            <div className="flex gap-6 items-center">
              <Link to="/marketplace" className="text-gray-700 hover:text-blue-600">
                Marketplace
              </Link>
              <Link to="/organizations" className="text-gray-700 hover:text-blue-600">
                Organizations
              </Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600">
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-blue-600">
                    Login
                  </Link>
                  <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Biznet</h3>
              <p className="text-gray-400">B2B Platform for Business Growth</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Biznet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;