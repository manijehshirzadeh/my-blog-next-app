import FeaturedProjects from "../featured-projects"
import { getAllProjects } from "@/lib/projects-util"

export default async function AllProjectsPage() {
	const allProjects = await getAllProjects()
	return <FeaturedProjects projects={allProjects} />
}
