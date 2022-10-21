import { ContainerPostHeader, ContentPostHeader } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faChevronLeft,
	faArrowUpRightFromSquare,
	faComment,
	faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

interface PostHeaderProps {
	title: string;
	html_url: string;
	comments: number;
	created_at: string;
	owner: string;
}

export function PostHeader({
	title,
	html_url,
	comments,
	created_at,
	owner,
}: PostHeaderProps) {
	return (
		<ContainerPostHeader>
			<ContentPostHeader>
				<header>
					<Link to="/">
						<FontAwesomeIcon icon={faChevronLeft} />
						<span>voltar</span>
					</Link>
					<a href={html_url}>
						<span>ver no github</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</header>

				<h2>{title}</h2>

				<footer>
					<div>
						<FontAwesomeIcon icon={faGithub} />
						<span>{owner}</span>
					</div>

					<div>
						<FontAwesomeIcon icon={faCalendarDay} />
						<span>{created_at}</span>
					</div>

					<div>
						<FontAwesomeIcon icon={faComment} />
						<span>{comments} comentários</span>
					</div>
				</footer>
			</ContentPostHeader>
		</ContainerPostHeader>
	);
}
