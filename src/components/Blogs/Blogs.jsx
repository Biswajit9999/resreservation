import BlogCard from "../BlogCard/BlogCard";
import blogImg from "../../assests/dining-blog.jpg";
import chefAvatar from "../../assests/chef-avatar.png";
import styles from "./Blogs.module.css";

const posts = [
  {
    id: 1,
    category: "Dining",
    date: "March 31, 2022",
    title: "Top 5 Fine Dining Experiences You Must Try",
    author: "Chef John",
  },
  {
    id: 2,
    category: "Dining",
    date: "March 31, 2022",
    title: "Top 5 Fine Dining Experiences You Must Try",
    author: "Chef John",
  },
  {
    id: 3,
    category: "Dining",
    date: "March 31, 2022",
    title: "Top 5 Fine Dining Experiences You Must Try",
    author: "Chef John",
  },
];

export default function Blogs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Blog &amp; News</p>
        <h2 className={styles.title}>Read Our Latest News</h2>

        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              image={blogImg}
              avatar={chefAvatar}
              category={post.category}
              date={post.date}
              title={post.title}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}