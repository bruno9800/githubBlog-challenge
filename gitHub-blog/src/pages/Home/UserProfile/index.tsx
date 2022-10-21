import {
	Avatar,
	ContainerBio,
	ContainerInfo,
	ContainerUserProfile,
	Content,
	ContentUserProfile,
	Info,
} from "./styles";

export function UserProfile() {
	return (
		<ContainerUserProfile>
			<Content>
				<Avatar
					src="https://avatars.githubusercontent.com/u/82674117?v=4"
					alt=""
				/>
				<ContentUserProfile>
					<ContainerBio>
						<div>
							<strong>Bruno Matheus</strong>
							<a href="#">GITHUB</a>
						</div>
						<p>
							Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
							viverra massa quam dignissim aenean malesuada suscipit. Nunc,
							volutpat pulvinar vel mass.
						</p>
					</ContainerBio>
					<ContainerInfo>
						<Info>
							<span>sadasdasdasdas</span>
						</Info>
						<Info>
							<span>sadasdasdasdas</span>
						</Info>
						<Info>
							<span>sadasdasdasdas</span>
						</Info>
					</ContainerInfo>
				</ContentUserProfile>
			</Content>
		</ContainerUserProfile>
	);
}
