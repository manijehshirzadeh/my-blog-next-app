export const DUMMYـPROJECTS = [
	{
		slug: "post-hub",
		title: "Post Hub",
		image: "index.png",
		excerpt:
			"The Post Hub app where you can share your post and see other posts.",
		date: "2024-06-24",
		isFeatured: true,
		demoUrl: "https://post-hub.onrender.com/",
		gitHubUrl: "https://github.com/manijehshirzadeh/post-hub",
		features: [
			"User authentication and authorization (Sign up, Sign in, Sign out)",
			"Each user can Create, Update, and Delete their own posts",
			"Each user can see ALL the posts in the website",
			"A guest user (user who doesn't sign in) can see ALL the post, as well as can comment on ALL the posts",
			"Each user who signed in can also comment on ALL the posts",
			"Deployed using Render"
		],
		technologies: [
			"Node.js",
			" Express.js",
			" express-session",
			" Cloudinary",
			" multer",
			" MongoDB",
			" Mongoose",
			" EJS",
			" Bootstrap",
			" bcrypt",
			" dotenv",
			" method-override",
			" morgan",
			" Render"
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
