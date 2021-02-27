import React from 'react';
import { graphql, Link } from 'gatsby';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import Layout from '../components/Layout';

const Post = ({ data }) => {
  const blogPost = data.markdownRemark;

  return (
    <Layout>
      <div className="mb-8 flex justify-between items-center">
        <Link to="/" className="font-medium text-blue-800 dark:text-blue-500 text-xl">
          Home
        </Link>
        <a
          href="mailto:svakhilvarma@gmail.com"
          className="inline-block font-medium bg-blue-800 dark:bg-blue-600 rounded-lg text-white px-4 py-2 text-base shadow lg:text-lg"
        >
          Contact
        </a>
      </div>
      <h1 className="text-3xl font-bold dark:text-gray-100 my-4 lg:text-4xl">
        {blogPost.frontmatter.title}
      </h1>
      <div className="flex justify-between items-center mt-2 lg:justify-start">
        <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:mr-20 lg:text-base">
          {' '}
          <AiOutlineCalendar style={{ marginRight: 4 }} /> {blogPost.frontmatter.date}
        </p>
        <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 lg:text-base">
          <AiOutlineClockCircle style={{ marginRight: 4 }} />
          {blogPost.timeToRead} min read
        </p>
      </div>
      <div className="my-8" dangerouslySetInnerHTML={{ __html: blogPost.html }}></div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      timeToRead
    }
  }
`;
