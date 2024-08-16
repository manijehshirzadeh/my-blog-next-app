export const DUMMYـPROJECTS = [
	{
		slug: "game-explorer",
		title: "Game Explorer",
		image: "index.png",
		excerpt: "The Game Lover app in which you can explore many games.",
		date: "2023-12-01",
		isFeatured: true,
		demoUrl: "https://game-lover-react-app-by-manijeh.vercel.app/",
		gitHubUrl:
			"https://github.com/manijehshirzadeh/my-new-game-lover-react-app",
		features: [
			"Search box to search among the games",
			"Infinite scrolling in the homepage for Games list",
			"Filtering by Platform type, and sorting",
			"The Grid component used for the list is optimized for different screens, for responsiveness of the page",
			"Click on a Game card, redirects to the Game info page which has games images and video trailer (if exits)",
			"If the critics score is less than 60, the badge is yellow and if higher it's green, indicating the popularity of the game",
			"Click on a Game card, redirects to the Game info page (the game info page is not yet implemented)",
			"If the rating of a game is less than 3, no emoji, if higher a specific emoji is shown depending on the value of 3, 4 or 5",
			"Deployed using vercel"
		],
		content:
			"Built by NextJS, Filtering by Platform type, and sorting\n			Search box to search among the games\n			Infinite scrolling in the homepage for Games list\n			The Grid component used for the list is optimized for different screens, for responsiveness of the page\n			Click on a Game card, redirects to the Game info page which has games images and video trailer (if exits)\n			If the critics scode is less than 60, the badge is yellow and if higher it's green, indicating the popularity of the game\n			Click on a Game card, redirects to the Game info page (the game info page is not yet implemented)\n			If the rating of a game is less than 3, no emoji, if higher a specific emoji is shown depending on the value of 3, 4 or 5",

		technologies: [
			"NextJs",
			" React",
			" JavaScript",
			" TypeScript",
			" chakra-UI",
			" axios",
			" zustand",
			" react-icons",
			"vercel"
		]
	},
	{
		slug: "movie-rental",
		title: "Movie Rental",
		image: "index.png",
		excerpt:
			"Movie rental app to view / add / edit / rate / delete / search movies.",
		date: "2022-06-02",
		isFeatured: true,
		content: "This is a sample content 2",
		technologies: [
			"React",
			" JavaScript",
			" React-Router-Dom",
			" prop-types",
			" font-awesome",
			" bootstrap",
			" joi",
			" lodash",
			"vercel"
		],
		demoUrl: "https://movie-rental-app-built-by-manijeh.vercel.app/movies",
		gitHubUrl: "https://github.com/manijehshirzadeh/vidly",
		features: [
			"Displays movies with filtering based on genre and sorting based on movie properties.",
			"Pagination on the table",
			"Seach box to search movies based on their names.",
			"Filtering based on the movies genre.",
			"Can create / delete / edit / like / dislike a movie.",
			"Form validation using Joi",
			"Routing and Navigation using react-router-dom",
			"Deployed using vercel"
		]
	},
	// {
	// 	slug: "food-recipe",
	// 	title: "Food Recipe",
	// 	image: "index.png",
	// 	excerpt:
	// 		"Ruby on Rails backend + React frontend app to create / view food recipes.",
	// 	date: "2023-09-10",
	// 	isFeatured: true,
	// 	content: "This is a sample content 3",
	// 	technologies: ["Ruby on Rails", " React", " JavaScript", " Render"],
	// 	demoUrl: "https://mysite-q91f.onrender.com/",
	// 	gitHubUrl: "https://github.com/manijehshirzadeh/rails_react_recipe",
	// 	features: [
	// 		"Integrated React for the Views into a Ruby on Rails application.",
	// 		"Created a recipe model based on MVC paradigm, and migrated into the db.",
	// 		"Added CRUD operations into the controller for the recipe endpoint.",
	// 		"Seeded initial data into the db.",
	// 		"Prepared and Deployed using Render"
	// 	]
	// },
	{
		slug: "hcard-builder",
		title: "hCard Builder",
		image: "index.png",
		excerpt: "Fully responsive in all screen sizes hCard builder.",
		date: "2023-11-15",
		isFeatured: true,
		content: "This is a sample content 4",
		technologies: [
			"NextJs",
			" React",
			" JavaScript",
			" formik",
			" Material-UI",
			" Redux",
			" TypeScript",
			" Cypress",
			" Prettier",
			"vercel"
		],
		demoUrl: "https://h-card-builder-manijeh.vercel.app/",
		gitHubUrl: "https://github.com/manijehshirzadeh/hCard-builder",
		features: [
			"Material_UI as component library.",
			"Form validation and submission handled by formik.",
			"Installed and configured prettier for consistent file formatting.",
			"Using useRef hook for handling hidden button for uploading image.",
			"The Grid component used for the list is optimized for different screen sizes.",
			"Optimized for different latest browsers using official configuartions.",
			"Have tests writen in cypress for e2e tests.",
			"Deployed using vercel"
		]
	}
]
