import { useParams } from "react-router-dom";
import { blogPosts } from "./blog";
import BlogPostLayout from "../../components/BlogPostLayout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogMetaHead from "../../components/BlogPostMetaHead";
import ContentContainer from "../../components/ContentContainer";

export default function BlogPostDynamicPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <ContentContainer>
          <div className="py-24 text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600">
              Sorry, we couldn't find that blog post.
            </p>
          </div>
        </ContentContainer>
        <Footer />
      </>
    );
  }

  // Estimate read time if rawContent is available
  let readTime = 1;
  try {
    // @ts-ignore
    const rawContent = post.component?.toString?.() || "";
    const wordCount = rawContent.split(/\s+/).length;
    readTime = Math.max(1, Math.ceil(wordCount / 200));
  } catch {}

  return (
    <>
      <BlogMetaHead post={post} />
      <Header />
      <ContentContainer>
        <BlogPostLayout
          date={post.date}
          author={{
            name: "Yuriy Plakosh",
            avatar: "/assets/yuriy.jpg",
            role: "Founder",
          }}
          image={post.image}
          imageAlt={post.imageAlt}
          readTime={readTime}
        >
          <post.component />
        </BlogPostLayout>
      </ContentContainer>
      <Footer />
    </>
  );
}
