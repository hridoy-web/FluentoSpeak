
import { notFound } from "next/navigation";
import TopicHeader from "@/components/vocabulary/details/TopicHeader";
import VocabularyTable from "@/components/vocabulary/details/VocabularyTable";
import QuizSection from "@/components/vocabulary/details/QuizSection";

export async function generateMetadata({ params }) {
  const { partSlug, topicSlug } = await params;
  const roadmapData = await getRoadmapDataBySlug(partSlug);
  const topicData = roadmapData?.topics.find((item) => item.slug === topicSlug);

  if (!topicData) return { title: "Topic Not Found - FluentoSpeak" };

  return {
    title: `${topicData.details?.headline || topicData.title} | FluentoSpeak`,
    description: topicData.details?.learningGuide?.slice(0, 160) || topicData.description,
  };
}

export default async function TopicDetailsPage({ params }) {
  const { partSlug, topicSlug } = await params;
  const roadmapData = await getRoadmapDataBySlug(partSlug);

  const topicData = roadmapData?.topics.find((item) => item.slug === topicSlug);

  if (!topicData || !topicData.details) {
    notFound();
  }

  const { details } = topicData;

  return (
    <main className="min-h-screen bg-background py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
        <TopicHeader 
          partSlug={partSlug} 
          topicTitle={topicData.title}
          headline={details.headline} 
          learningGuide={details.learningGuide} 
        />
        <VocabularyTable vocabularies={details.vocabularies || []} />
        <QuizSection quizData={details.quiz || []} />
      </div>
    </main>
  );
}