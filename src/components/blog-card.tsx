import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/types';
import { getBlogPost } from '@/lib/blog-data-enhanced';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const enhancedPost = getBlogPost(post.slug);
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={post.featuredImage}
          alt={`${post.title} - Featured image for blog post about ${post.excerpt.substring(0, 100)}`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </time>
          </div>
          {enhancedPost && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{enhancedPost.readingTime} min read</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl hover:text-primary transition-colors">
          <Link href={`/blogs/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 line-clamp-3">
          {post.excerpt}
        </CardDescription>
        <Button variant="ghost" asChild className="group">
          <Link href={`/blogs/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
