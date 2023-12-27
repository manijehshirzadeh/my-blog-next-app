import Hero from "@/components/hero"
import FeaturedProjects from "./featured-projects"
import { DUMMYـPROJECTS } from "@/mock-data"

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedProjects projects={DUMMYـPROJECTS} />
		</>
	)
}
