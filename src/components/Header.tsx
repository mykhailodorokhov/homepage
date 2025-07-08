import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header() {
    return (
        <header>
            <div className="row">
                <Link to="/" className="nav-link">M.D.</Link>
                <nav className="row">
                    <Link to="/cv" className="nav-link">CV</Link>
                    <Link to="/culture" className="nav-link">Culture</Link>

                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

export default Header;