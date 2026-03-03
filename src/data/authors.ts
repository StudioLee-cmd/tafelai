export interface IAuthor {
    slug: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

export const authors: IAuthor[] = [
    {
        slug: 'tim-van-der-lee',
        name: 'Tim van der Lee',
        role: 'Founder & AI Expert',
        bio: 'Tim is de oprichter van VerhuizerAI en specialist in AI-automatisering voor verhuisbedrijven. Met jarenlange ervaring in technologie en ondernemerschap helpt hij ondernemers om efficiënter te werken door slimme automatisering.',
        image: '/images/authors/tim-van-der-lee.jpg',
        social: {
            email: 'tim@verhuizerai.nl'
        }
    }
];

export function getAuthorBySlug(slug: string): IAuthor | undefined {
    return authors.find(author => author.slug === slug);
}
