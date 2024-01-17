import Image from "next/image"

import classes from "./project-header.module.css"

function ProjectHeader(props) {
	const { title, image, demoUrl, gitHubUrl } = props
	console.log(image)
	return (
		<header className={classes.header}>
			<div>
				<h1>{title}</h1>
				<div className={classes.links}>
					<a target="_blank" href={demoUrl}>
						Live Demo
					</a>
					<a target="_blank" href={gitHubUrl}>
						Source Code on Github
					</a>
				</div>
			</div>
			<Image src={image} alt={title} width={200} height={150} />
		</header>
	)
}

export default ProjectHeader
