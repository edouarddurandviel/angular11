export interface Localization {
    codePostal: string;
    codeCommune: string;
    nomCommune: string;
    libelleAcheminement: string;
}

// 1
export interface Adresse {
    type: string;
    version: string;
    features: Feature[];
    attribution: string;
    licence: string;
    query: string;
    limit: number;
}

// 2
export interface Feature {
    type: string;
    geometry: Geometry;
    properties: Properties;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

// 3
export interface Properties {
    label: string;
    score: number;
    housenumber: string;
    id: string;
    type: string;
    name: string;
    postcode: string;
    citycode: string;
    x: number;
    y: number;
    city: string;
    context: string;
    importance: number;
    street: string;
}

