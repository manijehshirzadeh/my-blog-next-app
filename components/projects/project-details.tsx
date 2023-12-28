import ProjectHeader from "./project-header"
import classes from "./project-details.module.css"
import { getProjectData } from "@/lib/projects-util"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface Props {
	projectSlug: string
}

function ProjectDetails({ projectSlug }: Props) {
	const project = getProjectData(projectSlug)
	if (!project) return <h1>There is no project with this name</h1>
	const imagePath = `/images/projects/${project.slug}/${project.image}`

	return (
		<article className={classes.content}>
			<ProjectHeader title={project.title} image={imagePath} />
			{project.content}
			{project.codeSnippet && (
				<SyntaxHighlighter
					style={atomDark}
					language={project.codeSnippet.language}
				>
					{project.codeSnippet.code}
				</SyntaxHighlighter>
			)}
		</article>
	)
}

export default ProjectDetails
