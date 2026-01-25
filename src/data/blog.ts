import { Locale } from '../i18n/locale';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    readTime: string;
}

const POST_METADATA: Record<string, { slug: string; date: string; readTime: string; filename: string }> = {
    '1': {
        slug: 'why-your-tabletop-rpg-session-sounds-like-a-spreadsheet',
        date: 'January 15, 2026',
        readTime: '4 min read',
        filename: 'blog_post_1.md'
    },
    '2': {
        slug: 'stop-listening-to-page-numbers',
        date: 'January 10, 2026',
        readTime: '3 min read',
        filename: 'blog_post_2.md'
    },
    '3': {
        slug: 'meaning-what-you-say-direct-ai-voices',
        date: 'January 05, 2026',
        readTime: '5 min read',
        filename: 'blog_post_3.md'
    },
    '4': {
        slug: 'audio-and-tts-tools-comparison',
        date: 'January 18, 2026',
        readTime: '6 min read',
        filename: 'blog_post_4.md'
    },
    '5': {
        slug: 'how-board-gamers-deal-with-language-barriers',
        date: 'January 20, 2026',
        readTime: '5 min read',
        filename: 'blog_post_5.md'
    },
    '6': {
        slug: 'what-reddit-taught-us-about-gaming-language-barriers',
        date: 'January 25, 2026',
        readTime: '7 min read',
        filename: 'blog_post_6.md'
    }
};

// Import all markdown files as raw strings
const modules = import.meta.glob('../blog/**/*.md', { as: 'raw', eager: true });

const getPostContent = (filename: string, locale: Locale): string | null => {
    // Construct path keys based on locale
    // EN: ../blog/filename
    // Others: ../blog/locale/filename

    let key = '';
    if (locale === 'en') {
        key = `../blog/${filename}`;
    } else {
        key = `../blog/${locale}/${filename}`;
    }

    // Try to find the module
    if (key in modules) {
        return modules[key] as string;
    }

    // Fallback to English if not found (or return null)
    const enKey = `../blog/${filename}`;
    if (enKey in modules) {
        return modules[enKey] as string;
    }

    return null;
};

const parseMarkdown = (raw: string) => {
    const lines = raw.split('\n');
    let title = 'Untitled';
    let excerpt = '';

    // Simple parsing
    // Title is usually the first line with #
    const titleLine = lines.find(l => l.startsWith('# '));
    if (titleLine) {
        title = titleLine.replace('# ', '').trim();
    }

    // Excerpt: Try to find "Meta Description"
    const metaLine = lines.find(l => l.includes('Meta Description:') || l.includes('**Meta Description:**'));
    if (metaLine) {
        excerpt = metaLine.replace(/\*\*Meta Description:\*\*/g, '')
            .replace(/Meta Description:/g, '')
            .trim();
    } else {
        // Fallback excerpt: first paragraph that is not a title or empty
        const firstPara = lines.find(l => l.trim().length > 0 && !l.startsWith('#') && !l.startsWith('---'));
        if (firstPara) {
            excerpt = firstPara.substring(0, 150) + '...';
        }
    }

    // Remove title line and meta description from content for display if needed? 
    // The BlogPost component renders the whole markdown. 
    // Usually titles are rendered separately in the hero section, so ideally we remove the # Title from content.
    // But let's verify BlogPost.tsx behavior. The current BlogPost rendering renders meta title in H1, and then markdown content. 
    // If markdown content HAS # Title, it will show double title. 
    // The previous english content in blog.ts DID NOT have # Title. 
    // So I should strip the title from the content.

    const content = raw
        .replace(titleLine || '', '')
        .replace(metaLine || '', '')
        .trim();

    return { title, excerpt, content };
};

export const getBlogPosts = (locale: Locale = 'en'): BlogPost[] => {
    const posts: BlogPost[] = [];

    Object.entries(POST_METADATA).forEach(([id, meta]) => {
        const raw = getPostContent(meta.filename, locale);
        if (raw) {
            const { title, excerpt, content } = parseMarkdown(raw);
            posts.push({
                id,
                slug: meta.slug,
                date: meta.date,
                readTime: meta.readTime,
                title,
                excerpt,
                content
            });
        }
    });

    // Sort by date equivalent? Or just reverse ID (assuming new IDs are newer).
    // The metadata provided has dates. 
    // 4 (Jan 18) > 1 (Jan 15) > 2 (Jan 10) > 3 (Jan 05).
    // Let's sort manually or rely on keys. 
    // Using array push order follows keys '1','2','3','4'. 
    // I should sort by Date descending.

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Legacy export compatibility if needed (defaults to EN)
export const BLOG_POSTS = getBlogPosts('en');
