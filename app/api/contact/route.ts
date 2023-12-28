import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
	const body = await request.json()
	if (
		body &&
		"email" in body &&
		typeof body.email === "string" &&
		"name" in body &&
		typeof body.name === "string" &&
		"message" in body &&
		typeof body.message === "string"
	) {
		if (
			!body.email ||
			!body.email.includes("@") ||
			!body.name ||
			body.name.trim() === "" ||
			!body.message ||
			body.message.trim() === ""
		) {
			return new Response("invalid input", {
				status: 422
			})
		} else {
			const newMessage = {
				email: body.email,
				name: body.name,
				message: body.message
			}
			//TODO: Store it in a database
			console.log(newMessage)
			return Response.json(
				{ message: "Successfully stored message!", newMessage },
				{ status: 201 }
			)
		}
	} else {
		return new Response("No body request", {
			status: 422
		})
	}
}
