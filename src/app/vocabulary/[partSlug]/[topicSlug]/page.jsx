import { grammarVocabularyMock } from "@/config/grammarVocabularyMock";
import { notFound } from "next/navigation";
import TopicHeader from "@/components/vocabulary/details/TopicHeader";
import VocabularyTable from "@/components/vocabulary/details/VocabularyTable";
import QuizSection from "@/components/vocabulary/details/QuizSection";

// Dynamic Metadata for Google Search Engine Ranking
export async function generateMetadata({ params }) {
  const { topicSlug } = await params;
  const topicData = grammarVocabularyMock.topics.find((item) => item.slug === topicSlug);

  if (!topicData) return { title: "Topic Not Found - FluentoSpeak" };

  return {
    title: `${topicData.details.headline} | FluentoSpeak`,
    description: topicData.details.learningGuide.slice(0, 160),
    openGraph: {
      title: topicData.details.headline,
      description: topicData.details.learningGuide,
      type: "article",
    },
  };
}

export default async function TopicDetailsPage({ params }) {
  const { partSlug, topicSlug } = await params;

  const topicData = grammarVocabularyMock.topics.find((item) => item.slug === topicSlug);

  if (!topicData || !topicData.details) {
    notFound();
  }

  const { details } = topicData;

  // Google Search Engine Structured Data 
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": details.headline,
    "description": details.learningGuide,
    "educationalLevel": "Beginner to Intermediate",
    "provider": {
      "@type": "Organization",
      "name": "FluentoSpeak"
    }
  };

  return (
    <>
      {/* Schema Injection for Rank Improvement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        {/* Width */}
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          
          {/* Header & Overview */}
          <TopicHeader 
            partSlug={partSlug} 
            topicTitle={topicData.title}
            headline={details.headline} 
            learningGuide={details.learningGuide} 
          />

          {/* Vocabulary List */}
          <VocabularyTable vocabularies={details.vocabularies || []} />

          {/* Interactive Quiz Component */}
          <QuizSection quizData={details.quiz || []} />

        </div>
      </main>
    </>
  );
}