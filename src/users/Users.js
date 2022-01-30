import { useLocation, Link } from "react-router-dom";

export default function Users() {
    const location = useLocation();

    return(
        <article>
            <h2>All the users here:</h2>
            <ul>
                <li><Link to={`${location.pathname}/user1`}>User 1</Link></li>
                <li><Link to={`${location.pathname}/user2`}>User 2</Link></li>
                <li><Link to={`${location.pathname}/user3`}>User 3</Link></li>
            </ul>
        </article>
    );
}
