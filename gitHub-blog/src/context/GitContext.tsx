import axios from "axios";
import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react";
import { GITHUB_BLOG_REPO, GITHUB_USER } from "../lib/axios";

interface issuesBlogType {
	number: number;
	title: string;
	created_at: string;
	body: string;
}

interface GitContextType {
	issuesBlog: issuesBlogType[];
	fetchIssues: (query?: string) => Promise<void>;
}

interface GitContextProviderProps {
	children: ReactNode;
}
export const GitContext = createContext<GitContextType>({} as GitContextType);

const searchUrl = "https://api.github.com/search/issues";

export function GitContextProvider({ children }: GitContextProviderProps) {
	const [issuesBlog, setIssuesBlog] = useState([]);

	const fetchIssues = useCallback(async (query?: string) => {
		const response = await axios.get(searchUrl, {
			params: {
				q: `repo:${GITHUB_USER}/${GITHUB_BLOG_REPO} is:issue ${
					query ? query : ""
				}`,
			},
		});
		const data = response.data;
		setIssuesBlog(data.items);
	}, []);

	useEffect(() => {
		fetchIssues();
	}, []);

	return (
		<GitContext.Provider
			value={{
				fetchIssues,
				issuesBlog,
			}}
		>
			{children}
		</GitContext.Provider>
	);
}
