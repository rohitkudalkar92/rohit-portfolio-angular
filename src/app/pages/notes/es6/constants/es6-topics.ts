export interface QuickRefTopic {
  id: string;
  number: number;
  title: string;
}

export const ES6_QUICK_REF_TOPICS: ReadonlyArray<QuickRefTopic> = [
  { id: 'let-const', number: 1, title: 'let & const' },
  { id: 'arrow-functions', number: 2, title: 'Arrow Functions' },
  { id: 'template-literals', number: 3, title: 'Template Literals' },
  { id: 'destructuring', number: 4, title: 'Destructuring' },
  { id: 'spread-rest', number: 5, title: 'Spread & Rest' },
  { id: 'default-params', number: 6, title: 'Default Parameters' },
  { id: 'classes', number: 7, title: 'Classes' },
  { id: 'modules', number: 8, title: 'Modules' },
  { id: 'promises', number: 9, title: 'Promises & Async/Await' },
  { id: 'for-of', number: 10, title: 'for...of Loops' },
  { id: 'map-set', number: 11, title: 'Map & Set' },
  { id: 'string-array', number: 12, title: 'String & Array Methods' },
  { id: 'object-enhancements', number: 13, title: 'Object Enhancements' },
  { id: 'optional-chaining', number: 14, title: 'Optional Chaining (ES2020)' },
  { id: 'private-fields', number: 15, title: 'Private Fields (ES2022)' },
  { id: 'array-es2023', number: 16, title: 'Array Methods (ES2023)' },
  { id: 'es2024', number: 17, title: 'ES2024 Features' }
] as const;
