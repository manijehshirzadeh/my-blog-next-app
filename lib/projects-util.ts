import { DUMMYـPROJECTS } from "@/mock-data"

import { Project } from "@/types"

export function getProjectData(projectSlug: string): Project | undefined {
	return DUMMYـPROJECTS.find(project => project.slug === projectSlug)
}

export function getAllProjects(): Project[] | [] {
	const sortedProjects = DUMMYـPROJECTS.sort((projectA, projectB) =>
		projectA.date > projectB.date ? -1 : 1
	)

	return sortedProjects
}

export function getFeaturedProjects(): Project[] | [] {
	const allProjects = getAllProjects()

	const featuredProjects = allProjects?.filter(project => project.isFeatured)

	return featuredProjects
}
