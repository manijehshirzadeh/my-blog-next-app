import Hero from "@/components/hero"
import FeaturedProjects from "./featured-projects"
import { getFeaturedProjects } from "@/lib/projects-util"

export default function Home() {
	const featuredProjects = getFeaturedProjects()
	return (
		<>
			<Hero />
			{featuredProjects && <FeaturedProjects projects={featuredProjects} />}
		</>
	)
}
