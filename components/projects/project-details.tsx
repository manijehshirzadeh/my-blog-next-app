import ProjectHeader from "./project-header"
import classes from "./project-details.module.css"
import { getProjectData } from "@/lib/projects-util"

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
		</article>
	)
}

export default ProjectDetails
