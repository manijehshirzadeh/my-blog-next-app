import { NextRequest } from "next/server"
import { MongoClient } from "mongodb"

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
				message: body.message,
				id: ""
			}
			const username = process.env.mongodb_username
				? encodeURIComponent(process.env.mongodb_username)
				: ""
			const password = process.env.mongodb_password
				? encodeURIComponent(process.env.mongodb_password)
				: ""

			let client
			try {
				client = await MongoClient.connect(
					`mongodb+srv://${username}:${password}@${process.env.mongodb_clustername}.aurgawe.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
				)
			} catch (error) {
				return new Response("Couldn't connect to the database!", {
					status: 500
				})
			}

			const db = client.db()
			try {
				const result = await db.collection("messages").insertOne(newMessage)
				newMessage.id = result.insertedId.toString()
				client.close()

				return Response.json(
					{ message: "Successfully stored message!", newMessage },
					{ status: 201 }
				)
			} catch (error) {
				client.close()
				return new Response("Couldn't store into the database!", {
					status: 500
				})
			}
		}
	} else {
		return new Response("No body request", {
			status: 422
		})
	}
}
