import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GITHUB_BLOG_REPO, GITHUB_USER } from "../../lib/axios";
import { PostHeader } from "./PostHeader";
import { ContainerPost } from "./styles";

import ReactMarkdown from "react-markdown";
import { Loading } from "./Loading";

interface OwnerPost {
	login: string;
	html_url: string;
}

interface PostType {
	title: string;
	body: string;
	comments: number;
	created_at: string;
	user: OwnerPost;
	html_url: string;
}

export function Post() {
	const { id } = useParams();
	const [post, setPost] = useState<PostType | undefined>();

	useEffect(() => {
		const FetchBlogPost = async () => {
			const response = await axios.get(
				`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_BLOG_REPO}/issues/${id}`
			);

			if (response.status === 200) {
				setPost(response.data);
				console.log(response.data);
			} else {
				console.error(response);
			}
		};

		FetchBlogPost();
	}, []);

	return (
		<ContainerPost>
			{post && (
				<PostHeader
					comments={post?.comments}
					created_at={post?.created_at}
					html_url={post?.html_url}
					owner={post?.user.login}
					title={post?.title}
				/>
			)}
			{post?.body ? (
				<ReactMarkdown className="markdown">{post.body}</ReactMarkdown>
			) : (
				<Loading />
			)}
		</ContainerPost>
	);
}
