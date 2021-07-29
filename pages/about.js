import { Image, Stack, Heading, Text, Box, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Container from '../components/Container';
import { NextSeo } from 'next-seo';

const url = 'https://samuolis.com';
const title = 'About';
const description = 'About Rokas Samuolis';

export default function About() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <Stack isInline alignItems="center" pt={12}>
          <Image
            mr={6}
            borderRadius="full"
            boxSize="100px"
            objectFit="cover"
            src="me.jpeg"
            alt="Rokas Samuolis"
          />
          <Heading as="h1">Rokas Samuolis</Heading>
        </Stack>

        <Box mt={12} lineHeight="36px" fontSize="xl">
          <Text>
            Hey, my name is Rokas. I am a front-end developer located in Oslo,
            Norway.
          </Text>
          <Text mt={8}>
            When I was a young boy, I was always fascinated by computers,
            technologies, websites, graphic design, details, colours,
            interactions and so on, basically, with everything that I saw on my
            computer screen. It gave me butterflies in my belly. It still does.
          </Text>
          <Text mt={8}>
            After a few years of wandering, experimenting with graphic, web, and
            logo design, I decided to try and learn Front-end. In the beginning,
            I did not even know the differences between front-end and back-end,
            but now I can build scalable, functional and accessible websites.
          </Text>
          <Text mt={8}>
            As I am a graduate, I am open to working in a team to share my
            knowledge and learn from others.
          </Text>
          <Text mt={8}>
            You can find my recent projects at{' '}
            <Link href="https://github.com/comaliot" isExternal>
              Github <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            and some of the graphics I created at{' '}
            <Link href="https://dribbble.com/samuolis" isExternal>
              Dribbble <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>
      </Container>
    </>
  );
}
