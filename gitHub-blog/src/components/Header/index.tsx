import { ContainerHeader, Logo } from "./styles";
import logoImg from "../../assets/logo.svg";
import effectRight from "../../assets/effectRight.png";
import effectLeft from "../../assets/effectLeft.png";

export function Header() {
	return (
		<ContainerHeader>
			<img src={effectLeft} alt="" />
			<Logo src={logoImg} />
			<img src={effectRight} alt="" />
		</ContainerHeader>
	);
}
