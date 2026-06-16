//Gemini text insights for the api response serverless func
import axios from "axios";

export async function handler (req, res){

    const { temperature, weatherCode, windSpeed } = req.body;

    try{

        const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent', 
            {
             headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": process.env.GEMINI_API_KEY,
            },
          }, 
          {
            contents: [{
            parts: [{ text:`Give a one-sentence insight for: ${temperature}°C, weather code ${weatherCode}, wind ${windSpeed}km/h.` }]
            }],
        },
        )
         
        console.log(response)
         const insight = response.data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No insight available.";
         return res.status(200).json({ insight });

    }catch(error){
    if (error.response) {
      console.error("Gemini error:", error.response.data);
      return res.status(error.response.status).json({ error: "Failed to generate insight" });
    }else{
        return res.status(500).json({error: 'server failed'})
    }
    }

}