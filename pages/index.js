import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Ivan. I am a student at University of the Assumption. I love playing games, watching movies and series, and cleaning. You can contact me at Facebook.</p>

        <h2>My Expectations in this Subjects are:</h2>
        <ul>
          <li>I expect to widen my knowledge about the topics being taught about this subject.</li>
          <li>I expect this subject to make us well-equipped not only for examinations, but also for the real world.</li>
          <li>I expect a lot of activities.</li> 
        </ul>

        <h2>10 things that requires 0 talent:</h2>
        <ol>
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Being High Energy</li>
          <li>Having A Positive Attitude</li>
          <li>Being Passionate</li>
          <li>Using Good Body Language</li>
          <li>Being Coachable</li>
          <li>Doing A Little Extra</li>
          <li>Being Prepared</li>
          <li>Having A Strong Work Ethic</li>
        </ol>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}