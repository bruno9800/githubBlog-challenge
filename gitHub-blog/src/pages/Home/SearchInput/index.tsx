import { ContainerSearch, InputSearchForm } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GitContext } from "../../../context/GitContext";

const inputSearchSchema = z.object({
	query: z.string(),
});

type InputSearchFormType = z.infer<typeof inputSearchSchema>;

export function SearchInput() {
	const { fetchIssues, issuesBlog } = useContext(GitContext);

	const { handleSubmit, register, reset } = useForm<InputSearchFormType>({
		resolver: zodResolver(inputSearchSchema),
	});

	function handleInputSearchSubmit(data: InputSearchFormType) {
		fetchIssues(data.query);

		reset();
	}

	return (
		<ContainerSearch>
			<header>
				<strong>Publicações</strong>
				<span>{issuesBlog.length + 1} publicações</span>
			</header>
			<InputSearchForm onSubmit={handleSubmit(handleInputSearchSubmit)}>
				<input
					type="text"
					placeholder="Buscar conteúdo"
					{...register("query")}
				/>
				<button type="submit" hidden />
			</InputSearchForm>
		</ContainerSearch>
	);
}
