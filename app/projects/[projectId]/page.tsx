import ProjectDetails from "@/components/projects/project-details"
import { DUMMYـPROJECTS } from "@/mock-data"

export default function ProjectDetailsPage({
	params
}: {
	params: { projectId: string }
}) {
	return <ProjectDetails projectSlug={params.projectId} />
}

export async function generateStaticParams() {
	return DUMMYـPROJECTS.map(project => ({
		slug: project.slug
	}))
}
