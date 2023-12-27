import ProjectHeader from "./project-header"
import classes from "./project-details.module.css"

const DUMMY_POST = {
	slug: "getting-started-with-nextjs",
	title: "Getting Started with NextJS  - by Manijeh",
	image: "getting-started-nextjs.png",
	date: "2022-02-10",
	content: "# This is a first post"
}

function ProjectDetails() {
	const imagePath = `/images/projects/${DUMMY_POST.slug}/${DUMMY_POST.image}`

	return (
		<article className={classes.content}>
			<ProjectHeader title={DUMMY_POST.title} image={imagePath} />
			{DUMMY_POST.content}
		</article>
	)
}

export default ProjectDetails
