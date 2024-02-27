interface ForumPost {
  id: string;
  title: string;
  category: string;
  hashtags: string[];
  description: string;
}

interface User {
  id: string;
  username: string;
  password: string;
  repeatPassword: string;
}
