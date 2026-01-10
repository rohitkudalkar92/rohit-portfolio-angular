export interface GitTopic {
  id: string;
  title: string;
  description: string;
  content?: string;
}

export const GIT_TOPICS: GitTopic[] = [
  {
    id: 'git-basics',
    title: 'Git Basics',
    description: 'Learn fundamental Git commands, repository initialization, and basic version control concepts.'
  },
  {
    id: 'branching-merging',
    title: 'Branching and Merging',
    description: 'Master Git branches, merging strategies, and resolving conflicts in collaborative development.'
  },
  {
    id: 'remote-repositories',
    title: 'Remote Repositories',
    description: 'Work with remote repositories, push/pull operations, and collaborate with GitHub/GitLab.'
  },
  {
    id: 'git-workflow',
    title: 'Git Workflow',
    description: 'Learn popular Git workflows like GitFlow, GitHub Flow, and best practices for team collaboration.'
  },
  {
    id: 'advanced-git',
    title: 'Advanced Git',
    description: 'Advanced Git features like rebasing, cherry-picking, stashing, and repository maintenance.'
  }
];

export function getGitTopicById(id: string): GitTopic | undefined {
  return GIT_TOPICS.find(topic => topic.id === id);
}