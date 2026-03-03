import React from "react";
import Container from "@/components/Container";

const TermsPage: React.FC = () => {
    return (
        <Container>
            <div className="py-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
                <div className="prose prose-lg text-foreground-accent">
                    <p className="mb-4">
                        <em>Laatst bijgewerkt: {new Date().getFullYear()}</em>
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">1. Algemeen</h2>
                    <p className="mb-4">
                        Deze algemene voorwaarden zijn van toepassing op alle diensten van TafelAI. Door gebruik te maken van onze diensten, ga je akkoord met deze voorwaarden.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">2. Identiteit van de ondernemer</h2>
                    <p className="mb-4">
                        TafelAI is een handelsnaam van <strong>DigitalStudioLee</strong> (KVK: 98933353). Wij leveren software-oplossingen (SaaS) voor restaurants, waaronder AI-telefonie, chatbots en administratie automatisering.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">3. Abonnement</h2>
                    <p className="mb-4">
                        Onze abonnementen zijn maandelijks opzegbaar. Er is geen sprake van lange contracten, tenzij expliciet anders overeengekomen. Opzegging dient schriftelijk of via het online dashboard te geschieden vóór de nieuwe factuurdatum.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">4. Beëindiging van het account</h2>
                    <p className="mb-4">
                        TafelAI behoudt zich daarnaast het recht voor om accounts te allen tijde, en om welke reden dan ook, per direct te beëindigen of op te schorten. Dit kan bijvoorbeeld gebeuren bij een vermoeden van misbruik, maar is niet beperkt tot deze reden.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">5. Betaling</h2>
                    <p className="mb-4">
                        Betaling geschied per maand vooruit. Bij niet-tijdige betaling behoudt TafelAI zich het recht voor om de dienstverlening (tijdelijk) op te schorten.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">6. Aansprakelijkheid</h2>
                    <p className="mb-4">
                        TafelAI is niet aansprakelijk voor indirecte schade, gevolgschade of winstderving. Onze maximale aansprakelijkheid is te allen tijde beperkt tot het bedrag van de, voor de desbetreffende dienst, in de maand van de gebeurtenis betaalde abonnementsgelden.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">7. Verantwoordelijkheid van de gebruiker</h2>
                    <p className="mb-4">
                        <strong>Belangrijk:</strong> Ons systeem is uitsluitend een hulpmiddel (tool). Als gebruiker blijf je te allen tijde zelf verantwoordelijk en behoud je de volledige controle over de output en acties van de AI. Omdat jij als gebruiker de functies activeert, configureert en goedkeurt, ben je volledig verantwoordelijk voor enig gebruik, incorrect gebruik of schade die voortvloeit uit de inzet van onze systemen.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">8. Uitsluitingen</h2>
                    <p className="mb-4">
                        De verzekering en aansprakelijkheid van TafelAI sluit specifieke activiteiten en situaties uit. De volgende zaken zijn expliciet <strong>uitgesloten</strong> van dekking en aansprakelijkheid:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Exploitantie van sociale media-websites (websites waar gebruikers inhoud kunnen maken en/of delen).</li>
                        <li>Exploitantie van streamingdiensten (zoals film- en muziekstreaming).</li>
                        <li>Planning, ontwerp, constructie, softwareontwikkeling, productie, levering, of toezicht op machines die het productieproces rechtstreeks regelen (zoals PLC&apos;s) en hun onderdelen.</li>
                        <li>Planning, ontwerp, constructie, softwareontwikkeling, productie, levering, of supervisie van bagageafhandelingssystemen voor luchthavens.</li>
                        <li>Planning, ontwerp, constructie, softwareontwikkeling, productie, levering, of toezicht op medische en laboratoriumtechnologie (zoals besturingssoftware van röntgenapparatuur).</li>
                        <li>Fouten die uitsluitend vallen onder de verantwoordelijkheid van een derde (zoals fabrikant of leverancier) of gebrekkige levering van internet-/telecomdiensten door derden (indien regresrecht is afgestaan).</li>
                        <li>Een inbreuk op intellectuele eigendomsrechten.</li>
                        <li>Een contractuele clausule die de aansprakelijkheid verhoogt (zoals boetes of garanties).</li>
                        <li>Veelbelovende of gegarandeerde resultaten (zoals opbrengsten of winstgevendheid).</li>
                        <li>Financiële diensten (zoals bemiddeling/verkoop van verzekerings- of beleggingsproducten).</li>
                        <li>Organisatie of hosting van prijstrekkingen, loterijen of andere kansspelen.</li>
                        <li>Voorspellingen of berekeningen m.b.t. beloofde coupons, kortingen of prijzen in advertenties.</li>
                        <li>Publicatie van anti-constitutionele (zoals racistische) inhoud.</li>
                        <li>Ongevraagde communicatie gericht aan een consument (spam) via telefoon, e-mail of andere middelen.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-3">9. Toepasselijkheid NLdigital Voorwaarden</h2>
                    <p className="mb-4">
                        Op al onze aanbiedingen en overeenkomsten zijn de <strong>NLdigital Voorwaarden 2020</strong> van toepassing, gedeponeerd bij de Rechtbank Midden-Nederland, locatie Utrecht. In geval van strijdigheid tussen deze algemene voorwaarden en de NLdigital Voorwaarden 2020, prevaleren de bepalingen uit deze algemene voorwaarden.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">10. Fair Use Policy</h2>
                    <p className="mb-4">
                        Al onze diensten en het gebruik daarvan vallen onder onze Fair Use Policy. Hoewel wij termen als &apos;onbeperkt&apos; hanteren, is dit altijd gebaseerd op normaal, redelijk zakelijk gebruik. Bij excessief gebruik of misbruik behouden wij ons het recht voor om het account direct te beëindigen.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">11. Intellectueel eigendom</h2>
                    <p className="mb-4">
                        Alle intellectuele eigendomsrechten met betrekking tot de diensten en de inhoud daarvan berusten bij TafelAI of haar licentiegevers. Het is niet toegestaan om zonder voorafgaande schriftelijke toestemming van TafelAI de diensten of de inhoud daarvan te kopiëren, te verspreiden of openbaar te maken.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">12. Privacy</h2>
                    <p className="mb-4">
                        TafelAI verwerkt persoonsgegevens in overeenstemming met de geldende privacywetgeving. Voor meer informatie verwijzen wij naar onze privacyverklaring.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">13. Wijziging van de voorwaarden</h2>
                    <p className="mb-4">
                        TafelAI heeft het recht deze voorwaarden te wijzigen. Wijzigingen worden minimaal 30 dagen van tevoren gecommuniceerd.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">14. Wijziging van prijzen en functionaliteit</h2>
                    <p className="mb-4">
                        Wij behouden ons tevens het recht voor om onze prijzen, pakketten en de kosten per credit (&ldquo;credit cost&rdquo;) te wijzigen. Daarnaast kan de werking van de AI-modellen worden aangepast of geüpdatet om de kwaliteit te waarborgen of te verbeteren. Indien er prijswijzigingen plaatsvinden, zullen wij de gebruiker hierover meerdere keren en ruim van tevoren inlichten, zodat je nooit voor verrassingen komt te staan.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">15. Fair Use Policy (Gratis Testaccount)</h2>
                    <p className="mb-4">
                        Het aanvragen van een gratis testaccount geeft geen automatisch recht op toegang. Wij hanteren een limiet op het aantal beschikbare gratis accounts dat tegelijkertijd actief kan zijn. TafelAI behoudt zich het recht voor om een aanvraag voor een testaccount te weigeren, bijvoorbeeld (maar niet uitsluitend) bij een vermoeden van misbruik, eerdere overtredingen of wanneer de limiet van het aantal testaccounts is bereikt. Er kan geen aanspraak worden gemaakt op compensatie indien een gratis account wordt geweigerd of ingetrokken.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">16. Toepasselijk recht en geschillen</h2>
                    <p className="mb-4">
                        Op deze voorwaarden en alle overeenkomsten tussen TafelAI en de gebruiker is uitsluitend Nederlands recht van toepassing. Geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar TafelAI gevestigd is.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">Contactgegevens</h2>
                    <p className="mb-4">
                        <strong>Bedrijfsnaam:</strong> DigitalStudioLee (h.o.d.n. TafelAI)<br />
                        <strong>Adres:</strong> De Donge 9, 3448CJ, Woerden<br />
                        <strong>KVK:</strong> 98933353<br />
                        <strong>BTW:</strong> NL005362803B09<br />
                        <strong>Email:</strong> tim@tafelai.nl
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default TermsPage;
