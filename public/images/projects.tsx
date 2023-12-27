import { Project } from "@/types"
import ProjectDetails from "./project-details"
import classes from "./projects.module.css"

interface Props {
	projects: Project[]
}
function Projects(props: Props) {
	const { projects } = props

	return (
		<ul className={classes.grid}>
			{projects.map(project => (
				<ProjectDetails key={project.slug} project={project} />
			))}
		</ul>
	)
}

export default Projects
