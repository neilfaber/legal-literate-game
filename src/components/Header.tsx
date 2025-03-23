
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chat', href: '/chat' },
    { name: 'Templates', href: '/templates' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-subtle border-b border-gray-100' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-legalease-600 flex items-center justify-center transition-transform hover:scale-105">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className={cn(
            "font-semibold text-xl tracking-tight transition-colors",
            isScrolled ? "text-legalease-950" : "text-legalease-800"
          )}>
            <span className="font-bold">Legal</span>Ease
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium relative py-1 transition-all duration-300",
                isScrolled ? "text-gray-700 hover:text-legalease-700" : "text-gray-800 hover:text-legalease-600",
                "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-legalease-500 after:transition-all hover:after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <AuthButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8 mt-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-medium text-gray-800 hover:text-legalease-600 transition-colors w-full block"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = 'auto';
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <AuthButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
