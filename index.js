import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });


app.get("/api/suggest", async (req, res) => {
    try {
        const prompt = `Create ONE specific and concrete task to practice React.
    The task should be up to 65 characters, clear, and achievable in under 30 minutes.
    Respond only with the task description, without additional explanations.`;

        const result = await model.generateContent(prompt);

        const text = result.response.text();

        res.json({ suggestion: text });
    } catch (error) {
        console.error("Error calling Gemini:", error);
        res.status(500).json({ error: "Error en Gemini" });
    }
});


app.listen(3001, () => {
    console.log("Backend running on http://localhost:3001");
});