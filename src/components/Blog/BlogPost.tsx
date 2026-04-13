import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import { BlogPost as BlogPostType, getBlogPosts } from '../../data/blog';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from 'lucide-react';
import { useI18n } from '../../i18n';
import { LOCALE_PATH_SEGMENT } from '../../i18n/locale';
import { ArticleStructuredData } from '../StructuredData';

interface BlogPostProps {
    post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
    const { copy, locale } = useI18n();
    const prefix = locale === 'en' ? '' : `/${LOCALE_PATH_SEGMENT[locale]}`;
    const canonicalUrl = `https://aidiofy.com${prefix}/blog/${post.slug}`;

    // Get related posts (all posts except current, max 3)
    const allPosts = getBlogPosts(locale);
    const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <article className="pt-32 pb-20 px-4 min-h-screen bg-background-dark">
            <Helmet>
                <title>{post.title} | AIdiofy Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content="https://aidiofy.com/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content="https://aidiofy.com/og-image.png" />
            </Helmet>
            <ArticleStructuredData post={post} />
            <div className="max-w-3xl mx-auto animate-fade-in-up">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8 text-body-sm text-text-tertiary">
                    <ol className="flex items-center gap-2">
                        <li><Link to="/" className="hover:text-text-main transition-colors">Home</Link></li>
                        <li>/</li>
                        <li><Link to="/blog" className="hover:text-text-main transition-colors">Blog</Link></li>
                        <li>/</li>
                        <li className="text-text-muted truncate max-w-[200px]">{post.title}</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-text-muted hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {copy.blog.backToBlog}
                    </Link>

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
                    <Link
                        to="/blog"
                        className="text-text-muted hover:text-text-main transition-colors font-medium"
                    >
                        &larr; {copy.blog.moreArticles}
                    </Link>

                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                        }}
                        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                    >
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">{copy.blog.share}</span>
                    </button>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-border-subtle">
                        <h2 className="text-heading-3 font-display font-bold text-text-main mb-8">
                            {copy.blog.moreArticles}
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/blog/${related.slug}`}
                                    className="group bg-surface border border-border-subtle rounded-2xl p-5 hover:border-primary/30 transition-all"
                                >
                                    <time className="text-caption text-text-tertiary">{related.date}</time>
                                    <h3 className="text-body-md font-semibold text-text-main mt-2 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {related.title}
                                    </h3>
                                    <p className="text-body-sm text-text-muted line-clamp-2">{related.excerpt}</p>
                                    <span className="inline-flex items-center text-primary text-body-sm font-medium mt-3 group-hover:translate-x-1 transition-transform">
                                        {copy.blog.readArticle} <ArrowRight className="w-3 h-3 ml-1" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
