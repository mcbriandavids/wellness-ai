import openai from "../config/openai.js";
import logger from "../utils/logger.js";

const openaiDevController = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt || "Say hello from dev controller!" },
      ],
      max_tokens: 100,
      temperature: 0.7,
    });
    const result = response.choices[0].message.content.trim();
    logger.info("OpenAI Dev Controller success");
    res.status(200).json({ result });
  } catch (err) {
    logger.error("OpenAI Dev Controller error:", err);
    res.status(500).json({ error: "OpenAI dev test failed." });
  }
};

export default openaiDevController;
