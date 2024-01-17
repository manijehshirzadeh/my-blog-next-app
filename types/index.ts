export type Project = {
	title: string
	image: string
	excerpt: string
	date: string
	slug: string
	isFeatured: boolean
	content: string
	codeSnippet?: {
		language: string
		code: string
		description?: string
	}
	features?: [string]
	demoUrl?: string
	gitHubUrl?: string
	technologies?: [string]
}
