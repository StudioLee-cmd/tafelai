export interface IComparisonItem {
    role: string;
    cost: number;
    description: string;
}

export const comparisonData: IComparisonItem[] = [
    {
        role: "Social Media Manager",
        cost: 500,
        description: "Voor dagelijkse posts en engagement"
    },
    {
        role: "Marketing Strateeg",
        cost: 650,
        description: "Voor advertenties en strategie"
    },
    {
        role: "SEO Specialist",
        cost: 500,
        description: "Voor blogs en ranking onderhoud"
    },
    {
        role: "Professionele Fotograaf",
        cost: 550,
        description: "Voor 1 shoot per maand"
    },
    {
        role: "Video & Content Creator",
        cost: 550,
        description: "Voor video's en reels"
    },
    {
        role: "Reserveringssysteem & Email",
        cost: 200,
        description: "Vervangt Formitable, TheFork & Mailchimp"
    },
    {
        role: "Website & Menu Builder",
        cost: 100,
        description: "Vervangt Wix, WordPress & Hosting"
    },
    {
        role: "Review & Social Tools",
        cost: 100,
        description: "Vervangt dure planners & reputatie software",
    }
];

// Comparison values
export const totalTraditionalCost = 3000;
export const tafelAICost = 297;
