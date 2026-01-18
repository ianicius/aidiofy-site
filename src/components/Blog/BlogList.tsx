import { getBlogPosts } from '../../data/blog';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useI18n } from '../../i18n';
import { useEffect } from 'react';

export function BlogList() {
    const { locale } = useI18n();
    const posts = getBlogPosts(locale);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 px-4 min-h-screen bg-background-dark">
            <Helmet>
                <title>Blog | AIdiofy - AI Voice Technology for RPGs</title>
                <meta name="description" content="Insights on RPG audio, GM tips, and product updates from the AIdiofy team." />
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-6">
                        Latest from <span className="text-primary">AIdiofy</span>
                    </h1>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
                        Insights on RPG audio, GM tips, and product updates.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={post.id}
                            className="group relative bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-primary/30 rounded-3xl p-8 transition-all duration-300 hover:shadow-glow-accent animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <time>{post.date}</time>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <h2 className="text-heading-3 text-text-main mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                <a href={`#/blog/${post.slug}`} className="before:absolute before:inset-0">
                                    {post.title}
                                </a>
                            </h2>

                            <p className="text-body-md text-text-muted mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                                Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
