import { useParams, Link } from "react-router-dom";

export default function UserId() {
    const { userName } = useParams();

    return(
        <section>
            <p><Link to="/users">Back</Link></p>
            <p>User: {userName}</p>
        </section>
    )
}