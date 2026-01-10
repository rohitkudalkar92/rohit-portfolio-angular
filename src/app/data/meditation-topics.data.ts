export interface MeditationTopic {
  id: string;
  title: string;
  description: string;
  content?: string;
}

export const MEDITATION_TOPICS: MeditationTopic[] = [
  {
    id: 'breathing-techniques',
    title: 'Breathing Techniques',
    description: 'Learn fundamental breathing exercises for relaxation and mindfulness practice.'
  },
  {
    id: 'mindfulness-basics',
    title: 'Mindfulness Basics',
    description: 'Introduction to mindfulness meditation and present moment awareness.'
  },
  {
    id: 'body-scan',
    title: 'Body Scan Meditation',
    description: 'Progressive relaxation technique focusing on different parts of the body.'
  },
  {
    id: 'walking-meditation',
    title: 'Walking Meditation',
    description: 'Mindful walking practice for active meditation and movement awareness.'
  },
  {
    id: 'stress-relief',
    title: 'Stress Relief Techniques',
    description: 'Meditation practices specifically designed to reduce stress and anxiety.'
  }
];

export function getMeditationTopicById(id: string): MeditationTopic | undefined {
  return MEDITATION_TOPICS.find(topic => topic.id === id);
}