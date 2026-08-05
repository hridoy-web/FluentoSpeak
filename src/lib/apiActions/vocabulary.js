import { grammarVocabularyMock } from "../../config/grammarVocabularyMock";
import { commonVerbsMock } from "../../config/commonVerbsMock";
import { situationalVocabularyMock } from "../../config/situationalVocabularyMock"; 

const MOCK_DATA_MAP = {
  "grammar-vocabulary": grammarVocabularyMock,
  "common-verbs": commonVerbsMock,
  "topic-vocabulary": situationalVocabularyMock,
};

const getFallbackData = (slug) => MOCK_DATA_MAP[slug] || null;

export async function getRoadmapBySlug(slug) {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return getFallbackData(slug);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/vocabulary/${slug}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return getFallbackData(slug);

    const data = await res.json();
    return data || getFallbackData(slug);
  } catch (error) {
    return getFallbackData(slug);
  }
}