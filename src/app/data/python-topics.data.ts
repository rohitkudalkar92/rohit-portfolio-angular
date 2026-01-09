export interface PythonTopic {
  id: string;
  title: string;
  description: string;
  order: number;
  content?: string; // For future detailed content
}

export const PYTHON_TOPICS: PythonTopic[] = [
  {
    id: 'variables-data-types',
    title: 'Variables and Data Types',
    description: 'Learn about Python variables, strings, numbers, booleans, and basic data types.',
    order: 1
  },
  {
    id: 'operators',
    title: 'Python Operators',
    description: 'Learn about arithmetic, comparison, logical, and other operators in Python.',
    order: 2
  }
];

export function getPythonTopicById(id: string): PythonTopic | undefined {
  return PYTHON_TOPICS.find(topic => topic.id === id);
}