import React from 'react';
import VocabularyHero from '@/components/vocabulary/VocabularyHero';
import PartCard from '@/components/vocabulary/PartCard';
import { partRoadmaps } from '@/config/partRoadmaps';

// SEO Meta for Google Search Engine Ranking
export const metadata = {
    title: 'Spoken English Vocabulary Roadmap | Fluency in 3 Steps',
    description: 'ইংরেজি মুখস্থ না করে ৩টি সায়েন্টিফিক ধাপে (Grammar, Verbs, Topic Vocabulary) স্পোকেন ইংলিশ শিখুন। আত্মবিশ্বাসের সাথে বাক্যাংশ ও কথোপকথন শুরু করার সেরা গাইড।',
    keywords: ['Spoken English Vocabulary', 'English Roadmap Bangla', 'Grammar Vocabulary', 'Common Verbs V1 V2 V3', 'Fluento Speak'],
    openGraph: {
        title: 'Spoken English Vocabulary Roadmap | Fluency in 3 Steps',
        description: 'শব্দ জেনেও ইংরেজিতে আটকে যান? ৩টি ধাপে সঠিক ভোকাবুলারি রোডম্যাপ অনুসরণ করুন।',
        type: 'website',
    },
};

export default function VocabularyPage() {
    return (
        <main className="min-h-screen bg-background text-brand-dark py-10 px-4 sm:px-6 lg:px-8 font-body">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Hero Component */}
                <VocabularyHero />

                {/* 3 Main Roadmap Cards Section */}
                <section aria-label="Vocabulary Roadmap Parts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {partRoadmaps.map((part) => (
                        <PartCard key={part.id} data={part} />
                    ))}
                </section>

            </div>
        </main>
    );
}