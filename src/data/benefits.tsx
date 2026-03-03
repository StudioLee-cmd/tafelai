import { FiMessageSquare, FiCalendar, FiVideo, FiCamera, FiEdit3, FiShare2, FiMail, FiFileText, FiStar, FiBell, FiImage, FiPhoneMissed, FiLayout, FiPenTool, FiUsers, FiClipboard, FiSmartphone, FiCpu, FiTrendingUp, FiCheckCircle, FiLifeBuoy, FiClock, FiTarget, FiCoffee, FiThumbsUp, FiGlobe, FiPlayCircle, FiTool, FiShield, FiZap, FiAward, FiMapPin, FiLayers, FiRefreshCw, FiCreditCard, FiUserCheck, FiPieChart, FiInbox, FiBarChart2, FiLink } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    // 1. AI Telefoniste
    {
        title: "AI Telefoniste",
        tier: 'basis',
        description: "Configureert de spraakassistent en instellingen direct in het dashboard.",
        bullets: [
            {
                title: "Meertalig & Intelligent",
                description: "Spreekt vloeiend Nederlands, Engels & meer. Herkent direct de taal van de gast.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Klantgeheugen & Historie",
                description: "Herkent terugkerende gasten en heeft direct inzicht in alle eerdere reserveringen en dieetwensen.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Slimme Routing",
                description: "Verbind door naar de keuken of manager op basis van specifieke vragen.",
                icon: <FiZap size={26} />
            },
            {
                title: "Zelfstandig Uitbellen",
                description: "Kan zelf gasten bellen voor bevestigingen of het verzetten van reserveringen.",
                icon: <FiPhoneMissed size={26} />
            },
            {
                title: "Multi-Agenda Beheer",
                description: "Real-time sync met je reserveringssysteem. Boekt direct zonder dubbele tafels te maken.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Alles Inbegrepen",
                description: "Alle geavanceerde features en koppelingen zijn standaard inbegrepen.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/voice-ai.png"
    },

    // 2. Social Media Planner
    {
        title: "Social Media Planner",
        tier: 'basis',
        description: "De krachtige Social Media Scheduler in app.TafelAI.nl. Connecteert met FB, IG, LinkedIn, TikTok en X.",
        bullets: [
            {
                title: "Posting Engine",
                description: "Dit is de motor voor het plaatsen; creatie doe je met 'Social Media Content'.",
                icon: <FiShare2 size={26} />
            },
            {
                title: "Automatisering",
                description: "Plan en publiceer je menu en specials automatisch op al je kanalen.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Visuele Kalender",
                description: "Houd overzicht met een handige drag-and-drop kalender.",
                icon: <FiLayout size={26} />
            },
            {
                title: "Cross-Platform",
                description: "Beheer Facebook, Instagram, LinkedIn, TikTok en Twitter vanuit één plek.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Gratis Inbegrepen",
                description: "Deze krachtige tool is standaard onderdeel van je licentie.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/social-media-planner.png"
    },

    // 3. Reputatie Manager
    {
        title: "Reputatie Manager",
        tier: 'basis',
        description: "Automatiseert je Reputatie Management.",
        bullets: [
            {
                title: "Automatisering",
                description: "Verstuurt automatische SMS/Emails voor Google Reviews na een diner.",
                icon: <FiStar size={26} />
            },
            {
                title: "Review Widget",
                description: "Toont je laatste 5-sterren reviews direct op je website.",
                icon: <FiLayout size={26} />
            },
            {
                title: "Google Ranking",
                description: "Meer reviews = betere vindbaarheid in Google Maps.",
                icon: <FiMapPin size={26} />
            },
            {
                title: "Feedback Shield",
                description: "Vangt negatieve feedback af voordat het online komt.",
                icon: <FiShield size={26} />
            },
            {
                title: "Reputatie",
                description: "Bouw een 5-sterren reputatie op de automatische piloot.",
                icon: <FiThumbsUp size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/reputatie-manager.png"
    },

    // 4. Factuur AI & Sales Deck AI -> Menu & Offerte AI
    {
        title: "Menu & Offerte AI",
        tier: 'basis',
        description: "Creëer professionele offertes voor groepen en events binnen minuten. Volledig automatisch.",
        bullets: [
            {
                title: "Event Voorstellen",
                description: "Maak in 5 minuten een compleet voorstel voor bruiloften of bedrijfsfeesten.",
                icon: <FiImage size={26} />
            },
            {
                title: "Slimme Facturen",
                description: "Vul je arrangementen in, krijg direct een professionele factuur.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Betalingsherinneringen",
                description: "Automatische herinneringen voor aanbetalingen.",
                icon: <FiBell size={26} />
            },
            {
                title: "Online Betalingen",
                description: "Klanten betalen aanbetalingen direct via iDEAL.",
                icon: <FiCreditCard size={26} />
            },
            {
                title: "Meer Omzet",
                description: "Professionele voorstellen zorgen voor meer groepsreserveringen.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],


        imageSrc: "/images/benefits/factuur-ai.png",
        videoSrc: "/videos/benefits/sales-deck-ai.mp4"
    },

    // 5. Afspraak Herinneringen
    {
        title: "Reservering Herinneringen",
        tier: 'basis',
        description: "Update de Reservering Herinnering workflows.",
        bullets: [
            {
                title: "No-Show Reductie",
                description: "Bewezen SMS/Email sequenties om no-shows te voorkomen.",
                icon: <FiBell size={26} />
            },
            {
                title: "Sequenties",
                description: "Standaard 24u, 2u en 30min herinneringen.",
                icon: <FiClock size={26} />
            },
            {
                title: "Bevelliging",
                description: "Zorgt dat gasten hun reservering niet vergeten.",
                icon: <FiShield size={26} />
            },
            {
                title: "Wachtlijst",
                description: "Kan geannuleerde tafels opvullen via wachtlijst.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Volle Zaal",
                description: "Maximaliseer je bezetting.",
                icon: <FiCalendar size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/reminder-ai.png"
    },

    // 6. Gemiste Oproep Service
    {
        title: "Gemiste Oproep Service",
        tier: 'basis',
        description: "Configureert de 'Missed Call Text Back' workflow.",
        bullets: [
            {
                title: "Direct Contact",
                description: "SMS gasten direct als je niet kunt opnemen (tijdens piekuren).",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "Red de Reservering",
                description: "Voorkom dat gasten naar een ander restaurant bellen.",
                icon: <FiLifeBuoy size={26} />
            },
            {
                title: "Gespreksstarter",
                description: "Start automatisch een conversatie om de reservering alsnog te maken.",
                icon: <FiShare2 size={26} />
            },
            {
                title: "Altijd Aan",
                description: "Werkt 24/7, ook als je gesloten bent.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Omzetbehoud",
                description: "Elke geredde reservering is extra omzet.",
                icon: <FiTrendingUp size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/call-back-ai.png"
    },

    // 7. Slimme Website Chat
    {
        title: "Slimme Website Chat",
        tier: 'basis',
        description: "Past de Website Chat Widget instellingen aan.",
        bullets: [
            {
                title: "24/7 Q&A",
                description: "Antwoordt vragen over menu, allergenen en openingstijden.",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "Reserveringen",
                description: "Neemt reserveringen aan direct in de chat.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Design",
                description: "Pas de kleuren en begroeting aan op jouw huisstijl.",
                icon: <FiPenTool size={26} />
            },
            {
                title: "Conversie",
                description: "Zet websitebezoekers om in gasten.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Altijd Bereikbaar",
                description: "Je restaurant is online nooit gesloten.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/chatbot-ai.png"
    },

    // 8. Workflow Automatisering
    {
        title: "Workflow Automatisering",
        tier: 'basis',
        description: "Het 'Brein' dat apps verbindt. Oneindige mogelijkheden via Marketing Automations.",
        bullets: [
            {
                title: "If This, Then That",
                description: "Triggers complexe acties over apps heen (Reservering -> Email -> Keuken).",
                icon: <FiCpu size={26} />
            },
            {
                title: "Review Vragen",
                description: "Vraag automatisch om reviews na een bezoek.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Cross-Platform",
                description: "Sync Agenda, Email, Socials en Facturatie.",
                icon: <FiRefreshCw size={26} />
            },
            {
                title: "Email Outreach",
                description: "Automatische nurturing sequenties voor vaste gasten.",
                icon: <FiMail size={26} />
            },
            {
                title: "Automatisering",
                description: "Bespaar uren werk door saaie taken te automatiseren.",
                icon: <FiZap size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/workflow-ai.png"
    },

    // 9. SEO Tekstschrijver
    {
        title: "SEO Tekstschrijver",
        tier: 'basis',
        description: "Genereert hoog scorende Google artikelen door slim gebruik van AI.",
        bullets: [
            {
                title: "Slimme Ideeën",
                description: "Genereert onderwerpen gebaseerd op de Horeca.",
                icon: <FiTool size={26} />
            },
            {
                title: "Elite Editor",
                description: "Geavanceerde tools voor perfectie en Interne Links.",
                icon: <FiEdit3 size={26} />
            },
            {
                title: "Zoekwoord Exploratie",
                description: "Vindt kansen zoals 'Beste Restaurant [Stad]'.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Auto-Publishing",
                description: "Publiceert direct naar WordPress of jouw website.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Google Dominantie",
                description: "Wordt de nummer #1 in jouw regio.",
                icon: <FiTrendingUp size={26} />,
                isHighlighted: true
            }
        ],


        videoSrc: "/videos/benefits/seo-blog-writer.mp4"
    },



    // 11. Social Media Content
    {
        title: "Social Media Content",
        tier: 'basis',
        description: "Genereert smakelijke visuals en captions voor al je kanalen.",
        bullets: [
            {
                title: "Multi-Format",
                description: "Instagram (1:1, 4:5), TikTok (9:16), LinkedIn (16:9).",
                icon: <FiLayout size={26} />
            },
            {
                title: "Visuele Stijlen",
                description: "Kies uit Food Photography, Sfeervol, Modern of Artistiek.",
                icon: <FiImage size={26} />
            },
            {
                title: "Video Generatie",
                description: "Zet je menu om in korte video's met AI voiceovers.",
                icon: <FiVideo size={26} />
            },
            {
                title: "Captions & Hashtags",
                description: "Schrijft direct pakkende teksten en hashtags.",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "Content Machine",
                description: "Nooit meer zonder content zitten.",
                icon: <FiCamera size={26} />,
                isHighlighted: true
            }
        ],


        videoSrc: "/videos/benefits/reclame-ai.mp4"
    },

    // 11. Offertes & Contracten -> Event Voorstellen
    {
        title: "Event Voorstellen",
        tier: 'basis',
        description: "Genereert visuele voorstellen die indruk maken op groepen en bedrijven.",
        bullets: [
            {
                title: "Dynamische Prijzen",
                description: "Ondersteunt verschillende arrangementen en opties.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Visuele Presentaties",
                description: "Maak een visuele slide deck van je menu i.p.v. een saaie lijst.",
                icon: <FiImage size={26} />
            },
            {
                title: "Digitale Handtekening",
                description: "Ingebouwde Digitale Handtekening en validatie voor snelle akkoorden.",
                icon: <FiPenTool size={26} />
            },
            {
                title: "Niche Pitching",
                description: "Schrijft voorstellen op maat voor jouw gast.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Conversie",
                description: "Sluit meer events met professionele presentaties.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],

        imageSrc: "/images/benefits/factuur-ai.png"
    },

    // 12. AI Email Assistent
    {
        title: "AI Email Assistent",
        tier: 'basis',
        description: "Leest en labelt inkomende mails en zet concepten klaar via workflows.",
        bullets: [
            {
                title: "Slim Labelen",
                description: "AI herkent of een mail een lead, spam of vraag is.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Auto-Drafting",
                description: "Zet automatisch een concept antwoord klaar in je drafts.",
                icon: <FiEdit3 size={26} />
            },
            {
                title: "Workflow Triggers",
                description: "Start specifieke acties op basis van de inhoud van de email.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Tijdbesparing",
                description: "Bespaar uren per week aan email beheer.",
                icon: <FiClock size={26} />
            },
            {
                title: "Inbox Zero",
                description: "Houd je inbox schoon en georganiseerd.",
                icon: <FiInbox size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/email-draft-ai.png"
    },

    // 13. Centrale Inbox
    {
        title: "Centrale Inbox",
        tier: 'basis',
        description: "Bespaar tijd en mis nooit meer een lead. Al je communicatie en data slim op één plek.",
        bullets: [
            {
                title: "Alles-in-1",
                description: "Email, SMS, WhatsApp, FB Messenger, IG DM in één scherm.",
                icon: <FiInbox size={26} />
            },
            {
                title: "Team Chat",
                description: "Wijs gesprekken toe aan specifieke teamleden.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Mobile App",
                description: "Reageer onderweg via de Native Mobile App.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Templates & Snippets",
                description: "Gebruik snelle antwoorden op veelgestelde vragen.",
                icon: <FiZap size={26} />
            },
            {
                title: "Zero Missed",
                description: "Nooit meer inloggen op 5 verschillende platformen.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/centrale-inbox.png"
    },

    // 13. Advertentie Dashboard
    {
        title: "Advertentie Dashboard",
        tier: 'basis',
        description: "Beheer en analyseer je Google & Facebook campagnes.",
        bullets: [
            {
                title: "Rapportage",
                description: "Zie exact wat je uitgeeft en wat het oplevert (ROI).",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Lead Tracking",
                description: "Zie precies welke advertentie de lead heeft gebracht.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Google & FB Sync",
                description: "Verbind beide platformen in één dashboard.",
                icon: <FiRefreshCw size={26} />
            },
            {
                title: "Live Inzicht",
                description: "Neem beslissingen op basis van real-time data.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Optimalisatie",
                description: "Stop met gokken, start met meten.",
                icon: <FiAward size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/ads-ai.png"
    },

    // 14. Websites & Funnels
    {
        title: "Websites & Funnels",
        tier: 'basis',
        description: "Bouw professionele websites en landingspagina's zonder code.",
        bullets: [
            {
                title: "Drag & Drop",
                description: "Eenvoudige editor: sleep elementen op hun plek.",
                icon: <FiLayout size={26} />
            },
            {
                title: "A/B Testen",
                description: "Test verschillende varianten om je conversie te verhogen.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Templates",
                description: "Start direct met bewezen, converterende layouts.",
                icon: <FiLayers size={26} />
            },
            {
                title: "Snelheid",
                description: "Bliksemsnelle laadtijden voor betere SEO.",
                icon: <FiZap size={26} />
            },
            {
                title: "Responsive",
                description: "Ziet er geweldig uit op desktop, tablet en mobiel.",
                icon: <FiSmartphone size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/websites-funnels.png"
    },

    // 15. Klantrelatiebeheer
    {
        title: "Klantrelatiebeheer",
        tier: 'basis',
        description: "Beheer al je relaties en verkoopkansen in één systeem.",
        bullets: [
            {
                title: "Smart Lists",
                description: "Filter klanten automatisch op gedrag, tags en status.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Pipelines",
                description: "Visueel overzicht van waar elke lead zich bevindt.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Actie Historie",
                description: "Zie elk mailtje, belletje en notitie in één tijdlijn.",
                icon: <FiClock size={26} />
            },
            {
                title: "Automatisering",
                description: "Start workflows direct vanuit een contactkaart.",
                icon: <FiCpu size={26} />
            },
            {
                title: "Klantinzicht",
                description: "Leer je klant kennen en verkoop meer.",
                icon: <FiTarget size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/klantebeheer.png"
    },

    // 16. AI Fotostudio
    {
        title: "AI Fotostudio",
        tier: 'basis',
        description: "Genereer hyper-realistische beelden met de allerbeste nieuwe AI modellen.",
        bullets: [
            {
                title: "Top Kwaliteit",
                description: "Gebruikt de kracht van de allerbeste nieuwe generatie beeldmodellen.",
                icon: <FiImage size={26} />
            },
            {
                title: "Fotorealisme",
                description: "Niet van echt te onderscheiden beelden.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Creatieve Vrijheid",
                description: "Van productfoto's tot artistieke concepten.",
                icon: <FiPenTool size={26} />
            },
            {
                title: "Rechtenvrij",
                description: "100% eigendom voor commercieel gebruik.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Snelheid",
                description: "Geen dure fotoshoots of wachttijden. Direct resultaat wanneer jij het nodig hebt.",
                icon: <FiZap size={26} />,
                isHighlighted: true
            }
        ],


        videoSrc: "/videos/benefits/photo-ai.mp4"
    },

    // 17. Zakelijke Videoproductie
    {
        title: "Zakelijke Videoproductie",
        tier: 'basis',
        description: "Creëer cinematische video's met de nieuwste bewegende beeld modellen.",
        bullets: [
            {
                title: "Next-Gen Video",
                description: "Aangedreven door revolutionaire nieuwe video modellen.",
                icon: <FiVideo size={26} />
            },
            {
                title: "Text-to-Video",
                description: "Typ een prompt en zie je verhaal tot leven komen.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Image-to-Video",
                description: "Laat statische afbeeldingen bewegen.",
                icon: <FiImage size={26} />
            },
            {
                title: "Sales & Info",
                description: "Focus op informatieve video's die sales genereren, niet op 'viral' entertainment.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "High Definition",
                description: "Haarscherpe kwaliteit voor professioneel gebruik.",
                icon: <FiAward size={26} />,
                isHighlighted: true
            }
        ],


        videoSrc: "/videos/benefits/video-ai.mp4"
    },

    // 18. SEO Editor (Pro)
    {
        title: "SEO Editor (Pro)",
        tier: 'pro',
        description: "Geavanceerde editor voor het optimaliseren van bestaande teksten. (Binnenkort beschikbaar).",
        bullets: [
            {
                title: "One-Click Optimalisatie",
                description: "Verbeter je volledige tekst direct met één klik voor hogere rankings.",
                icon: <FiZap size={26} />
            },
            {
                title: "Smart Interne Links",
                description: "Plaats automatisch relevante interne links naar andere artikelen.",
                icon: <FiLink size={26} />
            },
            {
                title: "SEO Score",
                description: "Real-time feedback op je content kwaliteit.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Concurrentie Analyse",
                description: "Zie wat werkt voor de top 10 resultaten.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Pro Tool",
                description: "De ultieme tool voor SEO professionals.",
                icon: <FiAward size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/seo-editor-ai.png"
    },

    // 19. Elite Managed Service
    {
        title: "Elite Managed Service",
        tier: 'elite',
        description: "Domineer jouw markt in het AI-tijdperk zonder technische zorgen. Wij automatiseren alles: van dagelijkse content tot complexe workflows.",
        buttonText: "Plan een Strategie Call",
        buttonUrl: "https://calendly.com/tim-studiolee",
        bullets: [
            {
                title: "AI Dominantie",
                description: "Wij denken proactief mee over nieuwe kansen om jouw concurrentie voor te blijven.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Dagelijkse Automatisering",
                description: "Social media, website updates en email campagnes draaien volledig automatisch.",
                icon: <FiRefreshCw size={26} />
            },
            {
                title: "Strategie & Uitvoering",
                description: "Tijdens de maandelijkse 1 uur strategie sessie bespreken we wensen; wij voeren het direct uit.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Advanced Setup",
                description: "Complexe wensen? Wij regelen het (bij veel werk geldt een eenmalige setup fee).",
                icon: <FiTool size={26} />
            },
            {
                title: "Client App",
                description: "Uw klanten kunnen zelf afspraken inplannen via een gepersonaliseerde app.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Focus op je Vak",
                description: "Stop met tijdverspilling aan bijzaken. Jij doet het echte werk, wij de rest.",
                icon: <FiCheckCircle size={26} />,
                isHighlighted: true
            }
        ],
        imageSrc: "/images/benefits/managed-service.png"
    }
]