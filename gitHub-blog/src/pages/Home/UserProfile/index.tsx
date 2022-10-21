import {
	Avatar,
	ContainerBio,
	ContainerInfo,
	ContainerUserProfile,
	Content,
	ContentUserProfile,
	Info,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { api, GITHUB_USER } from "../../../lib/axios";

interface GitUserType {
	login: string;
	name: string;
	avatar_url: string;
	bio: string;
	company?: string;
	followers: string;
	html_url: string;
}

export function UserProfile() {
	const [userInfo, setUserInfo] = useState<GitUserType>({} as GitUserType);
	useEffect(() => {
		const fetchUser = async () => {
			const response = await api.get("/users/" + GITHUB_USER);
			if (response.status === 200) {
				const data = await response.data;
				setUserInfo({
					login: data.login,
					name: data.name,
					avatar_url: data.avatar_url,
					bio: data.bio,
					company: data.company,
					followers: data.followers,
					html_url: data.html_url,
				});
			}
		};
		fetchUser();
	}, []);
	return (
		<ContainerUserProfile>
			<Content>
				<Avatar src={userInfo.avatar_url} alt="" />
				<ContentUserProfile>
					<ContainerBio>
						<header>
							<strong>{userInfo.name}</strong>
							<a href={userInfo.html_url}>
								GITHUB
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									fontSize={14}
								/>
							</a>
						</header>
						<p>{userInfo.bio}</p>
					</ContainerBio>
					<ContainerInfo>
						<Info>
							<FontAwesomeIcon icon={faGithub} fontSize={18} className="icon" />
							<span>{userInfo.login}</span>
						</Info>
						<Info>
							<FontAwesomeIcon
								icon={faBuilding}
								fontSize={18}
								className="icon"
							/>
							<span>{userInfo.company ?? "não informado"}</span>
						</Info>
						<Info>
							<FontAwesomeIcon
								icon={faUserGroup}
								fontSize={18}
								className="icon"
							/>
							<span>{userInfo.followers}</span>
						</Info>
					</ContainerInfo>
				</ContentUserProfile>
			</Content>
		</ContainerUserProfile>
	);
}
