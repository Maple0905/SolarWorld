import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import RecentArticle from '@/components/Home/RecentArticles';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <RecentArticle></RecentArticle>
    </Layout>
  )
}

export default Home;
