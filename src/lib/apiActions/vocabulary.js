import { grammarVocabularyMock } from '@/config/grammarVocabularyMock';

export async function getRoadmapBySlug(slug) {

  if (!process.env.NEXT_PUBLIC_API_URL) {
    console.warn("API URL not found. Loading fallback Mock Data.");
    return slug === 'grammar-vocabulary' ? grammarVocabularyMock : null;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/vocabulary/${slug}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.warn(`API responded with status: ${res.status}. Falling back to Mock Data.`);
      return slug === 'grammar-vocabulary' ? grammarVocabularyMock : null;
    }

    const data = await res.json();
    return data || (slug === 'grammar-vocabulary' ? grammarVocabularyMock : null);
  } catch (error) {
    console.error("API Fetch Error (Server/Network Offline):", error.message);
    return slug === 'grammar-vocabulary' ? grammarVocabularyMock : null;
  }
}