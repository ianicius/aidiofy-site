import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import { BlogPost as BlogPostType } from '../../data/blog';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { useEffect } from 'react';
import { useI18n } from '../../i18n';

interface BlogPostProps {
    post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
    const { copy } = useI18n();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post.id]);

    return (
        <article className="pt-32 pb-20 px-4 min-h-screen bg-background-dark">
            <Helmet>
                <title>{post.title} | AIdiofy Blog</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
            </Helmet>
            <div className="max-w-3xl mx-auto animate-fade-in-up">
                {/* Header */}
                <header className="mb-12 text-center">
                    <a
                        href="#/blog"
                        className="inline-flex items-center text-text-muted hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {copy.blog.backToBlog}
                    </a>

                    <h1 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-text-muted">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none 
          prose-headings:font-display prose-headings:font-bold prose-headings:text-text-main
          prose-p:text-text-muted prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover
          prose-strong:text-text-main
          prose-blockquote:border-l-primary prose-blockquote:bg-surface prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-code:text-secondary prose-code:bg-surface-elevated prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-hr:border-border-subtle
          prose-li:text-text-muted
          marker:text-primary">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>

                {/* Footer / CTA */}
                <div className="mt-16 pt-8 border-t border-border-subtle flex justify-between items-center">
                    <a
                        href="#/blog"
                        className="text-text-muted hover:text-text-main transition-colors font-medium"
                    >
                        ← {copy.blog.moreArticles}
                    </a>

                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            // Ideally show a toast here, but for now simple copy
                        }}
                        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                    >
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">{copy.blog.share}</span>
                    </button>
                </div>
            </div>
        </article>
    );
}
