import Container from '../components/Container';
import { Heading, Text, Button, Flex, Box } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { NextSeo } from 'next-seo';

const url = 'https://samuolis.com';
const title = 'Home';
const description = 'Rokas Samuolis home page';

export default function Home() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <Flex flexDirection="column" justifyContent="center" pt={12}>
          <Heading as="h1" size="2xl">
            Hey, I&apos;m Rokas
          </Heading>
          <Text fontSize="xl" my={6}>
            A front-end developer, lifelong learner. From time to time, I also
            do graphic design. I have experience with graphic design, front-end
            and prototyping.
          </Text>
          <Text fontSize="xl">
            Currently I&apos;m mastering my React knowledge.
          </Text>
          <Box>
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="yellow"
              size="lg"
              mt={8}
              as="a"
              href="mailto:samuolis.rokas@gmail.com"
            >
              Contact Me
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
