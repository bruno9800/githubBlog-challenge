import { Link } from "react-router-dom";
import { ContainerCardPost, ContentCardPost } from "./styles";

interface CardPostProps {
	title: string;
	body: string;
	created_at: string;
	number: number;
}

export function CardPost({ title, body, created_at, number }: CardPostProps) {
	return (
		<ContainerCardPost>
			<Link
				to={`/post/${number}`}
				style={{
					textDecoration: "none",
				}}
			>
				<ContentCardPost>
					<header>
						<strong>{title}</strong>
						<span>{created_at}</span>
					</header>

					<p>{body}</p>
				</ContentCardPost>
			</Link>
		</ContainerCardPost>
	);
}
