import Projects from "@/public/images/projects"
import classes from "./featured-projects.module.css"
import { Project } from "@/types"
interface Props {
	projects: Project[]
}
function FeaturedProjects(props: Props) {
	return (
		<section className={classes.latest}>
			{props.projects.length === 0 ? (
				<h2>There is no Featured Projects</h2>
			) : (
				<>
					<h2>Featured Projects</h2>
					<Projects projects={props.projects} />
				</>
			)}
		</section>
	)
}

export default FeaturedProjects
