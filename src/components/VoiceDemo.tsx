"use client";
import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';

const vapi = new Vapi("5cf7462d-30fe-4d70-9ea1-89ce0bd65ec5"); // Master Account Public Key

const assistantId = "62379e9a-4f1b-4a20-820d-1f8c894132bd"; // Assistant ID for TafelAI

const VoiceDemo: React.FC = () => {
    const [isCalling, setIsCalling] = useState(false);
    const [status, setStatus] = useState("Status: Stand-by");
    const [isSDKReady, setIsSDKReady] = useState(false);

    useEffect(() => {
        setIsSDKReady(true);

        const onCallStart = () => {
            console.log('Call started');
            setStatus("Status: Verbonden (Spreek nu)");
            setIsCalling(true);
        };

        const onCallEnd = () => {
            console.log('Call ended');
            setStatus("Status: Gesprek beëindigd");
            setIsCalling(false);
        };

        const onError = (e: unknown) => {
            console.error('Vapi Error:', e);
            setStatus("Status: Fout opgetreden");
            setIsCalling(false);
        };

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('error', onError);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('error', onError);
        };
    }, []);

    const handleClick = () => {
        if (isCalling) {
            vapi.stop();
        } else {
            setStatus("Status: Verbinden...");
            try {
                vapi.start(assistantId);
            } catch (err) {
                console.error("Vapi Start Error:", err);
                setStatus("Status: Start mislukt");
                setIsCalling(false);
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">

            <button
                onClick={handleClick}
                className={`
                    btn-shine flex items-center justify-center px-8 h-14 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                    ${isCalling ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-[#007bff] hover:bg-blue-600 text-white'}
                `}
                style={{ minWidth: '205px' }}
            >
                {isCalling ? "Ophangen" : "Test Live Demo"}
            </button>
            <p className="text-sm text-foreground/60 font-medium">
                {status}
            </p>
        </div>
    );
};

export default VoiceDemo;
