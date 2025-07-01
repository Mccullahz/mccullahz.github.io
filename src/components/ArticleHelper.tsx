{/* this is the default layout component for all of the article pages, making formatting easier adn reducing repeated code where possible*/}
import React from "react";

type ArticleHelperProps = {

	title?: string;
	subtitle?: string;
	technologies?: string[];
	links?: {
		github?: string;
	};
};

export const ArticleHelper: React.FC<ArticleHelperProps> = ({
	title,
	subtitle,
	technologies = [],
	links = {},
}) => {
	return (
		<div className="article-helper">
			{title && <h1 className="article-title">{title}</h1>}
			{subtitle && <h2 className="article-subtitle">{subtitle}</h2>}
			{technologies.length > 0 && (
				<p className="article-technologies">
					Using: {technologies.join(", ")}
				</p>
			)}
			{links.github && (
				<p className="article-links">
					Repository: <a href={links.github}>{links.github}</a>
				</p>
			)}
		</div>
	);
}
