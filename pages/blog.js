import fs from 'fs';
import matter from 'gray-matter';
import NextLink from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../lib/mxdUtils';
import {
  Heading,
  Link,
  UnorderedList,
  ListItem,
  Box,
  Text,
} from '@chakra-ui/react';
import Container from '../components/Container';
import Emoji from '../components/Emoji';

export default function Blog({ posts }) {
  return (
    <>
      <Container>
        <Heading as="h1" mb={4} pt={12}>
          Blog posts
        </Heading>
        {/* <UnorderedList>
          <Box bg={'gray.100'} mt={4}>
            {posts.map((post) => (
              <ListItem key={post.filePath}>
                <NextLink
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/blog/[slug]`}
                >
                  <Link>
                    <Text>{post.data.title}</Text>
                    <Text>{post.data.description}</Text>
                  </Link>
                </NextLink>
              </ListItem>
            ))}
          </Box>
        </UnorderedList> */}
        <Text>
          Blog is still in progress! <Emoji symbol="👏" />
        </Text>
      </Container>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
