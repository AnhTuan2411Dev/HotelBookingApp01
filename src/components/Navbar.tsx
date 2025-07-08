import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

interface NavLink {
    name: string;
    path: string;
}

const Navbar: React.FC = () => {
    const navLinks: NavLink[] = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 py-4 md:py-6 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            {/* Logo */}
            <Link to="/">
                <img
                    src={assets.logo}
                    alt="logo"
                    className={`h-9 transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-100'}`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                        {link.name}
                        <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'}`} />
                    </Link>
                ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img 
                    alt="search" 
                    className="h-7 transition-all duration-500" 
                    src={isScrolled ? 
                        "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.114%2016.1133L20.0001%2019.9999'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.531%2017.183C17.0779%2016.1006%2018.265%2013.1585%2017.1827%2010.6117C16.1003%208.06491%2013.1582%206.87774%2010.6114%207.96011C8.06461%209.04249%206.87744%2011.9845%207.95981%2014.5313C9.04218%2017.0782%2011.9842%2018.2653%2014.531%2017.183Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                        :
                        "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.114%2016.1133L20.0001%2019.9999'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.531%2017.183C17.0779%2016.1006%2018.265%2013.1585%2017.1827%2010.6117C16.1003%208.06491%2013.1582%206.87774%2010.6114%207.96011C8.06461%209.04249%206.87744%2011.9845%207.95981%2014.5313C9.04218%2017.0782%2011.9842%2018.2653%2014.531%2017.183Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                    }
                />
                <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer">
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <img 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    alt="" 
                    className="h-4 cursor-pointer" 
                    src={isScrolled ? 
                        "data:image/svg+xml,%3csvg%20width='21'%20height='15'%20viewBox='0%200%2021%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='21'%20height='1.5'%20rx='0.75'%20fill='black'/%3e%3crect%20x='8'%20y='6'%20width='13'%20height='1.5'%20rx='0.75'%20fill='black'/%3e%3crect%20x='6'%20y='13'%20width='15'%20height='1.5'%20rx='0.75'%20fill='black'/%3e%3c/svg%3e"
                        :
                        "data:image/svg+xml,%3csvg%20width='21'%20height='15'%20viewBox='0%200%2021%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='21'%20height='1.5'%20rx='0.75'%20fill='white'/%3e%3crect%20x='8'%20y='6'%20width='13'%20height='1.5'%20rx='0.75'%20fill='white'/%3e%3crect%20x='6'%20y='13'%20width='15'%20height='1.5'%20rx='0.75'%20fill='white'/%3e%3c/svg%3e"
                    }
                />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img 
                        alt="close-menu" 
                        className="h-6.5" 
                        src="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m19.5%206.5-13%2013m0-13%2013%2013'%20stroke='%23000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                    />
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
