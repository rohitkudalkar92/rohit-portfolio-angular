export interface QuickRefTopic {
  id: string;
  number: number;
  title: string;
}

export const ROUTING_QUICK_REF_TOPICS: ReadonlyArray<QuickRefTopic> = [
  { id: 'basic-routing', number: 1, title: 'Basic Routing' },
  { id: 'route-parameters', number: 2, title: 'Route Parameters' },
  { id: 'query-params', number: 3, title: 'Query Parameters' },
  { id: 'child-routes', number: 4, title: 'Child Routes' },
  { id: 'lazy-loading', number: 5, title: 'Lazy Loading' },
  { id: 'route-guards', number: 6, title: 'Route Guards' },
  { id: 'programmatic-nav', number: 7, title: 'Programmatic Navigation' },
  { id: 'router-link-active', number: 8, title: 'RouterLinkActive' }
] as const;
