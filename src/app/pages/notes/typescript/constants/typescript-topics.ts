export interface QuickRefTopic {
  id: string;
  number: number;
  title: string;
}

export const TYPESCRIPT_QUICK_REF_TOPICS: ReadonlyArray<QuickRefTopic> = [
  { id: 'basics', number: 1, title: 'TypeScript Basics' },
  { id: 'types', number: 2, title: 'Basic Types' },
  { id: 'interfaces', number: 3, title: 'Interfaces' },
  { id: 'type-aliases', number: 4, title: 'Type Aliases' },
  { id: 'classes', number: 5, title: 'Classes' },
  { id: 'generics', number: 6, title: 'Generics' },
  { id: 'enums', number: 7, title: 'Enums' },
  { id: 'union-types', number: 8, title: 'Union Types' },
  { id: 'intersection-types', number: 9, title: 'Intersection Types' },
  { id: 'type-guards', number: 10, title: 'Type Guards' },
  { id: 'utility-types', number: 11, title: 'Utility Types' },
  { id: 'decorators', number: 12, title: 'Decorators' },
  { id: 'modules', number: 13, title: 'Modules' }
] as const;
