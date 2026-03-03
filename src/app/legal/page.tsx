import React from "react";
import Container from "@/components/Container";
import { footerDetails } from "@/data/footer";

const LegalPage: React.FC = () => {
    return (
        <Container>
            <div className="py-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Bedrijfsgegevens (Legal)</h1>
                <div className="prose prose-lg text-foreground-accent">
                    <p className="mb-4">
                        Hieronder vind je de officiële bedrijfsgegevens van TafelAI.
                    </p>

                    <div className="bg-hero-background p-6 rounded-lg border border-border">
                        Hieronder vind je de officiële bedrijfsgegevens van TafelAI.
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li><strong>Bedrijfsnaam:</strong> {footerDetails.legalName} (h.o.d.n. TafelAI)</li>
                            <li><strong>Adres:</strong> {footerDetails.address}</li>
                            <li><strong>KVK (KvK):</strong> {footerDetails.kvk}</li>
                            <li><strong>BTW (VAT):</strong> {footerDetails.btw}</li>
                            <li><strong>Email:</strong> <a href={`mailto:${footerDetails.email}`} className="text-primary hover:underline">{footerDetails.email}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LegalPage;
