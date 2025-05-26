export interface MediumPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
  category: string;
}

export async function getLatestMediumPosts(username: string, count: number = 2): Promise<MediumPost[]> {
  try {
    // Fetch RSS feed from Medium
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);
    const data = await response.json();

    if (!data.items) {
      throw new Error('No posts found');
    }

    // Transform the data into our format
    return data.items.slice(0, count).map((item: any) => ({
      id: item.guid,
      title: item.title,
      description: item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
      image: item.thumbnail || '/images/blog/default.jpg',
      date: new Date(item.pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: `${Math.ceil(item.content.split(' ').length / 200)} min read`,
      url: item.link,
      category: item.categories?.[0] || 'Technology'
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
} 