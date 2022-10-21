import { ContainerLoadind } from "./styles";

export function Loading() {
	return (
		<ContainerLoadind>
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</ContainerLoadind>
	);
}
