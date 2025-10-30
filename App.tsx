
import React, { useState, useMemo, useCallback, useEffect } from 'react';
// FIX: Import NarrativeUniverse type to correctly type the groupedUniverses accumulator.
import type { Mode, RankedUniverse, GeneratedImage, NarrativeUniverse } from './types';
import { JEWELRY_TYPES, CHARACTER_SCENARIOS, NARRATIVE_UNIVERSES } from './constants';
import { generateImageBatch } from './services/geminiService';

// Helper function outside component to avoid re-creation
const getSimilarityScore = (text: string, tags: string[]): number => {
    const textLower = text.toLowerCase().trim();
    if (!textLower) return 0;
    let score = 0;
    tags.forEach(tag => {
        if (textLower.includes(tag)) score += 10;
    });
    const words = textLower.split(/\s+/).filter(w => w.length > 2);
    words.forEach(word => {
        tags.forEach(tag => {
            if (tag.includes(word)) score += 3;
        });
    });
    return score;
};

const Header: React.FC = () => (
    <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-3 bg-gradient-to-r from-brand-viola to-brand-oro text-transparent bg-clip-text">Magie Creative</h1>
        <h2 className="text-3xl md:text-4xl font-light font-serif mb-4 text-brand-viola">Atelier Digitale Intelligente</h2>
        <p className="text-lg max-w-3xl mx-auto text-brand-blu">
            Il tuo partner creativo che comprende l'anima di ogni gioiello e genera suite narrative complete.
        </p>
    </header>
);

const LoadingSpinner: React.FC = () => (
    <div className="text-center my-16">
        <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 border-4 border-brand-viola border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-xl font-medium mb-2 text-brand-viola">
            Il Direttore Artistico sta componendo la tua suite...
        </p>
        <p className="text-lg text-brand-verde">
            Questo processo richiederà qualche istante ✨
        </p>
    </div>
);

const OutputDisplay: React.FC<{ images: GeneratedImage[], onReset: () => void }> = ({ images, onReset }) => {
    const handleDownload = (url: string, title: string) => {
        const link = document.createElement('a');
        link.href = url;
        const fileName = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <h3 className="text-4xl font-bold font-serif text-center mb-12 bg-gradient-to-r from-brand-viola to-brand-oro text-transparent bg-clip-text">
                La Tua Suite Creativa Magie Creative
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {images.map((image, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                        <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                            <img src={image.url} alt={image.title} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="font-bold text-lg text-brand-blu">{image.title}</h4>
                            <p className="text-sm text-brand-verde mb-4 flex-grow">{image.description}</p>
                            <button
                                onClick={() => handleDownload(image.url, image.title)}
                                className="w-full mt-auto text-center py-2 px-4 bg-brand-verde text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                                aria-label={`Download ${image.title}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                <span>Scarica</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-16">
                <button onClick={onReset} className="btn-secondary text-white font-bold py-4 px-12 rounded-full text-xl bg-gradient-to-r from-brand-verde to-brand-oro shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    🎨 Crea una Nuova Suite
                </button>
            </div>
        </div>
    );
};


const App: React.FC = () => {
    const [view, setView] = useState<'input' | 'loading' | 'output'>('input');

    const [jewelryImage, setJewelryImage] = useState<string | null>(null);
    const [jewelryFileName, setJewelryFileName] = useState('Clicca per scegliere l\'immagine del tuo gioiello');
    const [selectedJewelryTypes, setSelectedJewelryTypes] = useState<string[]>([]);
    const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
    const [selectedUniverse, setSelectedUniverse] = useState<string | null>(null);
    const [modelImage, setModelImage] = useState<string | null>(null);
    const [modelFileName, setModelFileName] = useState('Carica foto modella');
    const [characterScenario, setCharacterScenario] = useState('');
    const [generativeNotes, setGenerativeNotes] = useState('');
    const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

    const [activeTab, setActiveTab] = useState<'auto' | 'manual'>('auto');
    const [searchText, setSearchText] = useState('');
    const [debouncedSearchText, setDebouncedSearchText] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchText(searchText);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchText]);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<string | null>>, setFileName: React.Dispatch<React.SetStateAction<string>>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target?.result as string);
                setFileName(file.name);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleJewelryTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelectedJewelryTypes(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleModeSelect = (mode: Mode) => {
        setSelectedMode(mode);
        setSelectedUniverse(null);
        setCharacterScenario('');
        setModelImage(null);
    };
    
    const handleUniverseSelect = (key: string) => {
        setSelectedUniverse(key);
    };

    const isFormValid = useMemo(() => {
        if (!jewelryImage || selectedJewelryTypes.length === 0 || !selectedMode) return false;
        if (selectedMode === 'suite' && !selectedUniverse) return false;
        if (selectedMode === 'character' && (!modelImage || !characterScenario)) return false;
        return true;
    }, [jewelryImage, selectedJewelryTypes, selectedMode, selectedUniverse, modelImage, characterScenario]);
    
    const handleGenerate = useCallback(async () => {
        if (!isFormValid) return;

        setView('loading');

        let prompts: { title: string, description: string, prompt: string }[] = [];
        const baseImages: string[] = [];
        if(jewelryImage) baseImages.push(jewelryImage);

        const jewelryTypeString = selectedJewelryTypes.join(', ');
        const finalNotes = generativeNotes ? ` Additional notes: ${generativeNotes}.` : '';

        if (selectedMode === 'suite' && selectedUniverse) {
            const universe = NARRATIVE_UNIVERSES[selectedUniverse];
            if (universe) {
                 prompts = [
                    { title: "E-commerce Frontale", description: "Vista frontale pulita per catalogo.", prompt: `Professional e-commerce product photo of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. Front view. Ensure realistic lighting and shadows.` + finalNotes },
                    { title: "E-commerce Dettaglio", description: "Macro shot per mostrare i dettagli.", prompt: `Macro detail shot of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. Focus on craftsmanship and materials.` + finalNotes },
                    { title: "Ritratto Indossato", description: "Modella indossa il gioiello.", prompt: universe.portrait_prompt.replace('{JEWELRY_TYPE}', jewelryTypeString) + ` The provided image is the ${jewelryTypeString} to feature.` + finalNotes },
                    { title: "Gesto", description: "Mani che interagiscono con l'ambiente.", prompt: universe.gesture_prompt.replace('{JEWELRY_TYPE}', jewelryTypeString) + ` The provided image is the ${jewelryTypeString} to feature.` + finalNotes },
                    { title: "Atmosfera", description: "Il gioiello nel suo universo narrativo.", prompt: universe.atmosphere_prompt.replace('{JEWELRY_TYPE}', jewelryTypeString) + ` The provided image is the ${jewelryTypeString} to feature.` + finalNotes },
                    { title: "Still Life Artistico 1", description: "Composizione artistica con elementi a tema.", prompt: universe.still_life_1_prompt.replace('{JEWELRY_TYPE}', jewelryTypeString) + ` The provided image is the ${jewelryTypeString} to feature.` + finalNotes },
                    { title: "Still Life Artistico 2", description: "Seconda composizione artistica materica.", prompt: universe.still_life_2_prompt.replace('{JEWELRY_TYPE}', jewelryTypeString) + ` The provided image is the ${jewelryTypeString} to feature.` + finalNotes },
                    { title: "Scatto Social", description: "Immagine accattivante per i social media.", prompt: `An eye-catching, vibrant social media shot of a model wearing the provided ${jewelryTypeString} in the style of '${universe.name}'. Lifestyle, engaging, bright lighting.` + finalNotes }
                ];
            }
        } else if (selectedMode === 'prospettiva') {
            prompts = [
                { title: "Vista Frontale", description: "Prospettiva classica a 0°.", prompt: `Professional e-commerce product photo of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. Front view (0 degrees).` + finalNotes },
                { title: "Vista a 45°", description: "Prospettiva dinamica a tre quarti.", prompt: `Professional e-commerce product photo of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. 45-degree angle view.` + finalNotes },
                { title: "Vista Laterale", description: "Profilo del gioiello a 90°.", prompt: `Professional e-commerce product photo of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. Side view (90 degrees).` + finalNotes },
                { title: "Vista dall'Alto", description: "Scatto flatlay dall'alto.", prompt: `Professional e-commerce product photo of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. Top-down flatlay view.` + finalNotes },
                { title: "Dettaglio Macro", description: "Close-up sui dettagli.", prompt: `Macro close-up shot of the provided ${jewelryTypeString} on a clean, neutral background #FCFCF9. Focus on texture and details.` + finalNotes }
            ];
        } else if (selectedMode === 'character' && modelImage) {
            baseImages.push(modelImage);
            prompts = [
                { title: "Ritratto Classico", description: `Modella in scenario: ${characterScenario}.`, prompt: `Classic portrait of the provided model wearing the provided ${jewelryTypeString}. Scenario: ${characterScenario}.` + finalNotes },
                { title: "Scatto a Mezzo Busto", description: `Modella in scenario: ${characterScenario}.`, prompt: `Medium shot of the provided model wearing the provided ${jewelryTypeString}. Scenario: ${characterScenario}.` + finalNotes },
                { title: "Interazione", description: `Modella in scenario: ${characterScenario}.`, prompt: `The provided model interacting naturally with the environment, wearing the provided ${jewelryTypeString}. Scenario: ${characterScenario}.` + finalNotes },
                { title: "Dettaglio sul Gioiello", description: `Modella in scenario: ${characterScenario}.`, prompt: `Close-up on the provided ${jewelryTypeString} as worn by the provided model. Scenario: ${characterScenario}.` + finalNotes },
                { title: "Scatto Lifestyle", description: `Modella in scenario: ${characterScenario}.`, prompt: `Candid lifestyle shot of the provided model wearing the provided ${jewelryTypeString}. Scenario: ${characterScenario}.` + finalNotes }
            ];
        }
        
        try {
            const images = await generateImageBatch(prompts, baseImages);
            setGeneratedImages(images);
            setView('output');
        } catch (error) {
            console.error("Failed to generate images:", error);
            setView('input'); // Or show an error view
        }
    }, [isFormValid, jewelryImage, selectedJewelryTypes, generativeNotes, selectedMode, selectedUniverse, modelImage, characterScenario]);

    const handleReset = () => {
        setView('input');
        setJewelryImage(null);
        setJewelryFileName('Clicca per scegliere l\'immagine del tuo gioiello');
        setSelectedJewelryTypes([]);
        setSelectedMode(null);
        setSelectedUniverse(null);
        setModelImage(null);
        setModelFileName('Carica foto modella');
        setCharacterScenario('');
        setGenerativeNotes('');
        setGeneratedImages([]);
        setSearchText('');
    };
    
    const rankedUniverses = useMemo<RankedUniverse[]>(() => {
        if (debouncedSearchText.length < 3) return [];
        return Object.entries(NARRATIVE_UNIVERSES)
            .map(([key, universe]) => ({
                key,
                universe,
                score: getSimilarityScore(debouncedSearchText, universe.tags)
            }))
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score);
    }, [debouncedSearchText]);

    const groupedUniverses = useMemo(() => {
        // FIX: By defining the type of the initial accumulator, we help TypeScript correctly infer the types
        // throughout the reduce operation, resolving the issue where `items` was of type `unknown`.
        const initialValue: Record<string, ({key: string} & NarrativeUniverse)[]> = {};
        return Object.entries(NARRATIVE_UNIVERSES).reduce((acc, [key, universe]) => {
            (acc[universe.category] = acc[universe.category] || []).push({ key, ...universe });
            return acc;
        }, initialValue);
    }, []);

    const renderContent = () => {
        switch(view) {
            case 'loading':
                return <LoadingSpinner />;
            case 'output':
                return <OutputDisplay images={generatedImages} onReset={handleReset} />;
            case 'input':
            default:
                return (
                 <div className="max-w-5xl mx-auto mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-brand-oro">
                    {/* Step 1 */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold font-serif mb-4 text-center text-brand-viola">1. Carica il tuo Gioiello</h3>
                             <label htmlFor="image-upload" className="flex flex-col items-center justify-center p-6 md:p-10 border-2 border-dashed border-brand-oro rounded-2xl cursor-pointer bg-gradient-to-br from-brand-oro/5 to-brand-verde/5 hover:border-brand-viola hover:bg-brand-oro/10 transition-all duration-300">
                                <svg className="w-16 h-16 mb-4 text-brand-oro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                                <span className="text-lg font-medium text-brand-blu text-center">{jewelryFileName}</span>
                                <span className="text-sm mt-2 text-brand-verde">Sfondo neutro consigliato</span>
                            </label>
                            <input type="file" id="image-upload" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setJewelryImage, setJewelryFileName)} />
                            {jewelryImage && <img src={jewelryImage} alt="Anteprima" className="mt-6 max-h-48 mx-auto rounded-xl shadow-lg border-2 border-brand-oro" />}
                        </div>
                        {/* Step 2+ */}
                        {jewelryImage && (
                            <div className="space-y-8">
                                {/* Step 2 */}
                                <div>
                                    <h3 className="text-2xl font-semibold font-serif mb-4 text-center text-brand-viola">2. Definisci il Tipo</h3>
                                    <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
                                        {JEWELRY_TYPES.map(type => (
                                            <label key={type.value} className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${selectedJewelryTypes.includes(type.value) ? 'border-brand-viola border-3 bg-gradient-to-br from-brand-viola/5 to-brand-oro/5' : 'border-brand-oro/30'}`}>
                                                <input type="checkbox" name="jewelry_type" value={type.value} checked={selectedJewelryTypes.includes(type.value)} onChange={handleJewelryTypeChange} className="h-5 w-5 rounded accent-brand-viola" />
                                                <span className={`font-medium ${selectedJewelryTypes.includes(type.value) ? 'text-brand-viola font-bold': ''}`}>{type.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Step 3 */}
                                {selectedJewelryTypes.length > 0 && (
                                     <div>
                                        <h3 className="text-2xl font-semibold font-serif mb-6 text-center text-brand-viola">3. Scegli il tuo Atelier Creativo</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {/* Mode cards */}
                                            <ModeCard id="suite" title="Suite Narrativa Estesa" description="8 immagini: e-commerce, indossato, ritratti e still life." onSelect={handleModeSelect} selectedMode={selectedMode} icon={<svg className="w-14 h-14 text-brand-viola" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>} />
                                            <ModeCard id="prospettiva" title="Studio Prospettiva" description="5 scatti e-commerce da angolazioni diverse." onSelect={handleModeSelect} selectedMode={selectedMode} icon={<svg className="w-14 h-14 text-brand-viola" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>} />
                                            <ModeCard id="character" title="Consistent Character" description="5 scatti con la stessa modella." onSelect={handleModeSelect} selectedMode={selectedMode} icon={<svg className="w-14 h-14 text-brand-viola" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>} />
                                        </div>
                                    </div>
                                )}
                                
                                {/* Step 4 */}
                                {selectedMode === 'suite' && (
                                     <div>
                                         <h3 className="text-2xl font-serif font-semibold mb-6 text-center text-brand-viola">4. Trova l'Universo Narrativo</h3>
                                         <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
                                            <TabButton active={activeTab === 'auto'} onClick={() => setActiveTab('auto')}>🎨 Direttore Creativo</TabButton>
                                            <TabButton active={activeTab === 'manual'} onClick={() => setActiveTab('manual')}>📚 Libreria Completa</TabButton>
                                         </div>
                                        {activeTab === 'auto' && (
                                            <div>
                                                <label className="block text-lg font-semibold mb-3 text-brand-blu">Inserisci il nome o descrizione:</label>
                                                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="search-input" placeholder='Es: "Anello Dea del Mare"' />
                                                <p className="text-sm mt-2 text-brand-verde">💡 L'IA analizzerà il nome e suggerirà gli scenari più adatti</p>
                                                {debouncedSearchText.length > 2 && (
                                                    <div className="mt-6">
                                                        <h4 className="text-xl font-serif font-semibold mb-4 text-brand-viola">✨ Universi Consigliati:</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {rankedUniverses.slice(0, 4).map((item, index) => (
                                                                <SuggestionCard key={item.key} item={item} index={index} selectedUniverse={selectedUniverse} onSelect={handleUniverseSelect} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {activeTab === 'manual' && (
                                             <div>
                                                 {Object.entries(groupedUniverses).map(([category, items]) => (
                                                     <div key={category} className="bg-white rounded-2xl p-6 mb-6 border border-brand-viola/10">
                                                        <h4 className="text-xl font-bold font-serif mb-4 text-brand-viola">{category}</h4>
                                                        {items.map(item => (
                                                             <div key={item.key} onClick={() => handleUniverseSelect(item.key)} className={`p-4 rounded-xl cursor-pointer transition-all duration-300 mb-3 border-2 ${selectedUniverse === item.key ? 'border-brand-viola border-3 bg-gradient-to-br from-brand-viola/5 to-brand-oro/10 shadow-lg translate-x-2' : 'border-brand-oro/30 hover:border-brand-oro hover:shadow-md hover:translate-x-1'}`}>
                                                                {item.name}
                                                            </div>
                                                        ))}
                                                     </div>
                                                 ))}
                                             </div>
                                        )}
                                    </div>
                                )}
                                {selectedMode === 'prospettiva' && (
                                    <div>
                                         <h3 className="text-xl font-serif font-semibold mb-4 text-center text-brand-viola">4. Scelta Automatica delle Angolazioni</h3>
                                         <div className="p-6 rounded-xl text-center bg-gradient-to-br from-brand-viola/5 to-brand-oro/5">
                                             <p className="mb-4 text-brand-blu">Il sistema genererà 5 prospettive professionali:</p>
                                             <ul className="text-left max-w-md mx-auto space-y-2 text-brand-verde">
                                                 <li>📐 Vista frontale (0°)</li>
                                                 <li>📐 Vista 45° destra</li>
                                                 <li>📐 Vista laterale (90°)</li>
                                                 <li>📐 Vista dall'alto (top view)</li>
                                                 <li>📐 Vista macro dettaglio</li>
                                             </ul>
                                         </div>
                                     </div>
                                )}
                                {selectedMode === 'character' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-serif font-semibold mb-4 text-center text-brand-viola">4. Carica la foto della Modella</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                                <div>
                                                    <label htmlFor="model-upload" className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-brand-oro rounded-xl cursor-pointer hover:border-brand-viola transition-colors">
                                                        <svg className="w-12 h-12 mx-auto mb-3 text-brand-viola" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                                                        <span className="font-medium text-brand-blu text-center">{modelFileName}</span>
                                                        <input type="file" id="model-upload" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setModelImage, setModelFileName)} />
                                                    </label>
                                                    {modelImage && <img src={modelImage} alt="Modella" className="mt-4 max-h-40 mx-auto rounded-lg"/>}
                                                </div>
                                                <div className="p-6 rounded-xl bg-gradient-to-br from-brand-viola/5 to-brand-oro/5">
                                                    <p className="text-sm font-semibold mb-3 text-brand-viola">Consigli:</p>
                                                    <ul className="text-sm space-y-2 text-brand-blu">
                                                        {['✓ Volto ben visibile', '✓ Buona illuminazione', '✓ Sfondo neutro', '✓ Postura naturale'].map(tip => <li key={tip}>{tip}</li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-lg font-semibold mb-3 text-brand-viola">Scegli lo Scenario:</label>
                                            <select value={characterScenario} onChange={e => setCharacterScenario(e.target.value)} className="search-input">
                                                <option value="" disabled>Seleziona uno scenario...</option>
                                                {CHARACTER_SCENARIOS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                )}
                                {/* Final Step */}
                                {selectedMode && (
                                    <div>
                                        <label className="block text-lg font-semibold mb-3 text-brand-viola">Note Generative (Opzionale):</label>
                                        <textarea value={generativeNotes} onChange={e => setGenerativeNotes(e.target.value)} rows={3} className="search-input" placeholder="Es: gli orecchini sono lunghi 8cm e molto delicati..."></textarea>
                                    </div>
                                )}
                                {/* Generate Button */}
                                <div className="text-center pt-6">
                                    <button onClick={handleGenerate} disabled={!isFormValid} className="btn-primary text-white font-bold py-4 px-12 rounded-full text-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg bg-gradient-to-r from-brand-viola to-brand-blu shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        ✨ Crea la Magia
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                )
        }
    }

    return (
        <div className="min-h-screen container mx-auto p-4 sm:p-6 lg:p-8">
            <Header />
            <main>
                {renderContent()}
            </main>
        </div>
    );
};


const ModeCard: React.FC<{id: Mode, title: string, description: string, onSelect: (id: Mode) => void, selectedMode: Mode | null, icon: React.ReactNode}> = ({id, title, description, onSelect, selectedMode, icon}) => (
    <div onClick={() => onSelect(id)} className={`p-6 rounded-2xl text-center cursor-pointer border-2 transition-all duration-300 ${selectedMode === id ? 'border-brand-viola bg-gradient-to-br from-brand-viola/5 to-brand-oro/10 shadow-2xl -translate-y-2' : 'bg-white border-transparent hover:border-brand-oro hover:-translate-y-1 hover:shadow-xl'}`}>
        <div className="flex justify-center mb-4">{icon}</div>
        <h4 className="text-xl font-bold font-serif mb-2 text-brand-blu">{title}</h4>
        <p className="text-sm text-brand-verde">{description}</p>
    </div>
);

const TabButton: React.FC<{active: boolean, onClick: () => void, children: React.ReactNode}> = ({active, onClick, children}) => (
    <button onClick={onClick} className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${active ? 'bg-gradient-to-r from-brand-viola to-brand-blu text-white border-transparent shadow-lg' : 'bg-transparent text-brand-viola border-transparent hover:border-brand-oro'}`}>
        {children}
    </button>
);

const SuggestionCard: React.FC<{item: RankedUniverse, index: number, selectedUniverse: string | null, onSelect: (key: string) => void}> = ({item, index, selectedUniverse, onSelect}) => (
    <div onClick={() => onSelect(item.key)} className={`p-5 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${selectedUniverse === item.key ? 'border-brand-viola border-3 bg-gradient-to-br from-brand-viola/5 to-brand-oro/10 shadow-lg' : `border-brand-oro ${index === 0 ? 'border-3 border-yellow-400' : ''} hover:scale-102 hover:shadow-xl`}`}>
        <div className="flex items-start justify-between mb-2">
            <h5 className="font-bold text-lg font-serif text-brand-viola">{index === 0 ? '🏆 ' : ''}{item.universe.name}</h5>
            <span className="text-xs px-2 py-1 rounded bg-brand-verde text-white">{item.score} punti</span>
        </div>
        <p className="text-sm mb-2 text-brand-blu">{item.universe.category}</p>
        <div className="flex flex-wrap gap-1">
            {item.universe.tags.slice(0, 4).map(tag => <span key={tag} className="text-xs px-2 py-1 rounded bg-brand-viola/10 text-brand-viola">{tag}</span>)}
        </div>
    </div>
);


export default App;
