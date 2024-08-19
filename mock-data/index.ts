export const DUMMYـPROJECTS = [
	{
		slug: "local-market",
		title: "Local Market",
		image: "index.png",
		excerpt: "The Local Market is where you list your stuff and sell them.",
		date: "2024-07-12",
		isFeatured: true,
		demoUrl: "https://project-3-local-market-react.onrender.com/",
		gitHubUrl:
			"https://github.com/manijehshirzadeh/project-3-local-market-express",
		features: [
			"All the routes are protected , and only requests with a valid token from a signed in user is passed to the corresponding route",
			"/signup and /signin with POST method is to sign in and sign up a new user",
			"GET to /sign-token and POST to /verify-token are to sign and verify a recieved token",
			"GET to /:userId will give the Profile of a User",
			"/listings: Supports all CRUD operations for listings",
			"/listings/:id: Supports all CRUD operations for a specific listing",
			"/listings/:listingId/bids: Using POST to create a new BID for a specific listing",
			"On this application, the users can list their items to sell them in the market. And others can make a bid on any listing to buy a listing",
			"User authentication and authorization (Sign up, Sign in, Sign out)",
			"Each user can create a Listing and upload image for the listing. They can also edit and delete their own listings.",
			"Only singed in user can see ALL the listings in the website.",
			"A guest user (user who doesn't sign in) can't see ALL the listings.",
			"Display Date and Time for the Bids and Listings",
			"Each user who is signed in, can also bid on other users' listings"
		],
		content:
			"Built by NextJS, Filtering by Platform type, and sorting\n			Search box to search among the games\n			Infinite scrolling in the homepage for Games list\n			The Grid component used for the list is optimized for different screens, for responsiveness of the page\n			Click on a Game card, redirects to the Game info page which has games images and video trailer (if exits)\n			If the critics scode is less than 60, the badge is yellow and if higher it's green, indicating the popularity of the game\n			Click on a Game card, redirects to the Game info page (the game info page is not yet implemented)\n			If the rating of a game is less than 3, no emoji, if higher a specific emoji is shown depending on the value of 3, 4 or 5",
		technologies: [
			"React.js",
			" Vite",
			" React Router Dom",
			" Cloudinary",
			" Node.js",
			" Express.js",
			" MongoDB",
			" JSON Web Token (JWT)",
			" Mongoose",
			" bcrypt",
			" dotenv",
			" cors",
			"Render",
			"Bootstrap"
		]
	},
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
		content:
			"Built by NextJS, Filtering by Platform type, and sorting\n			Search box to search among the games\n			Infinite scrolling in the homepage for Games list\n			The Grid component used for the list is optimized for different screens, for responsiveness of the page\n			Click on a Game card, redirects to the Game info page which has games images and video trailer (if exits)\n			If the critics scode is less than 60, the badge is yellow and if higher it's green, indicating the popularity of the game\n			Click on a Game card, redirects to the Game info page (the game info page is not yet implemented)\n			If the rating of a game is less than 3, no emoji, if higher a specific emoji is shown depending on the value of 3, 4 or 5",

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
