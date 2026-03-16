export default async function handler(req, res) {

const { message } = req.body

try {

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {

method: "POST",

headers: {
"Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type": "application/json"
},

body: JSON.stringify({
model: "mistralai/mistral-7b-instruct",
messages: [
{
role: "system",
content: "You are the AI assistant for THUGKEED TECH portfolio. Help visitors learn about THUGKEED, music, and tech projects."
},
{
role: "user",
content: message
}
]
})

})

const data = await response.json()

res.status(200).json({
reply: data.choices[0].message.content
})

} catch (error) {

res.status(500).json({
reply: "AI server error."
})

}

  }
