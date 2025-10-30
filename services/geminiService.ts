
import { GoogleGenAI, Modality } from "@google/genai";
import type { GeneratedImage } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const dataUrlToBlob = (dataUrl: string): { data: string, mimeType: string } => {
    const parts = dataUrl.split(',');
    const mimeType = parts[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const data = parts[1];
    return { data, mimeType };
};

export const generateImage = async (prompt: string, imageBlobs: { data: string, mimeType: string }[] = []): Promise<string> => {
    try {
        const parts = [
            ...imageBlobs.map(blob => ({
                inlineData: {
                    data: blob.data,
                    mimeType: blob.mimeType,
                },
            })),
            { text: prompt },
        ];

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: parts },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
        throw new Error("Nessuna immagine generata dall'API.");
    } catch (error) {
        console.error("Errore durante la generazione dell'immagine:", error);
        throw error;
    }
};

export const generateImageBatch = async (
    prompts: { title: string, description: string, prompt: string }[],
    baseImages: string[]
): Promise<GeneratedImage[]> => {
    const imageBlobs = baseImages.map(dataUrlToBlob);
    
    const imagePromises = prompts.map(p => 
        generateImage(p.prompt, imageBlobs).then(url => ({
            url,
            title: p.title,
            description: p.description
        })).catch(err => {
             console.error(`Errore nel generare l'immagine per: ${p.title}`, err);
             // Ritorna un'immagine segnaposto in caso di errore
             return {
                 url: `https://picsum.photos/seed/${p.title}/400/500`,
                 title: p.title,
                 description: "Errore durante la generazione"
             };
        })
    );

    return Promise.all(imagePromises);
};
