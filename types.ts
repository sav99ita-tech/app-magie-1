
export type Mode = 'suite' | 'prospettiva' | 'character';

export interface NarrativeUniverse {
    name: string;
    category: string;
    tags: string[];
    worn_detail_hint: string;
    portrait_prompt: string;
    gesture_prompt: string;
    atmosphere_prompt: string;
    still_life_1_prompt: string;
    still_life_2_prompt: string;
}

export interface NarrativeUniverses {
    [key: string]: NarrativeUniverse;
}

export interface RankedUniverse {
    key: string;
    universe: NarrativeUniverse;
    score: number;
}

export interface GeneratedImage {
    url: string;
    title: string;
    description: string;
}
