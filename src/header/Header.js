import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <h1>Usage of react-router-dom v6.2.1</h1>
            <nav>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </nav>
        </header>
    );
}
