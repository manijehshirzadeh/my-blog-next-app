import Link from "next/link"
import Image from "next/image"

import classes from "./project-details.module.css"
import { Project } from "@/types"

interface Props {
	project: Project
}

export default function ProjectDetails(props: Props) {
	const { title, image, excerpt, date, slug } = props.project

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})

	const imagePath = `/images/projects/${slug}/${image}`

	return (
		<li className={classes.project}>
			<Link href={`/projects/${slug}`}>
				<div className={classes.image}>
					<Image
						src={imagePath}
						alt={title}
						width={300}
						height={200}
						layout="responsive"
					/>
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	)
}
