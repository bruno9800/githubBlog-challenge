import { useContext, useEffect } from "react";
import { GitContext } from "../../context/GitContext";
import { CardPost } from "./CardPost";
import { SearchInput } from "./SearchInput";
import { ContainerCardList, ContainerHome } from "./styles";
import { UserProfile } from "./UserProfile";

export function Home() {
	const { issuesBlog } = useContext(GitContext);
	console.log(issuesBlog);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<ContainerHome>
			<UserProfile />
			<main>
				<SearchInput />

				<ContainerCardList>
					{issuesBlog.map((post) => {
						return (
							<CardPost
								key={post.number}
								body={post.body}
								title={post.title}
								created_at={post.created_at}
								number={post.number}
							/>
						);
					})}
				</ContainerCardList>
			</main>
		</ContainerHome>
	);
}
