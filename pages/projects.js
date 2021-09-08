import { Box, Heading, Text, Badge, Link } from '@chakra-ui/react';
import Container from '../components/Container';
import { NextSeo } from 'next-seo';

const url = 'https://samuolis.com';
const title = 'Projects';
const description = 'Rokas Samuolis Projects';

export default function Projects() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        <Box maxW="xxl" w="100%" p={4} boxShadow="base" rounded="md" mb={8}>
          <Box>
            <Heading fontSize="md" mb={2}>
              Villavicencio Design
            </Heading>
            <Box mb={2}>
              <Badge colorScheme="green">E-commerce</Badge>
              <Badge colorScheme="yellow" ml={2}>
                WordPress
              </Badge>
              <Badge colorScheme="purple" ml={2}>
                WooCommerce
              </Badge>
            </Box>
            <Box>
              <Text>
                Live preview:{' '}
                <Link
                  color="yellow.500"
                  href="https://villavicenciodesign.com/"
                >
                  Villavicencio Design
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>

        <Box maxW="xxl" w="100%" p={4} boxShadow="base" rounded="md" mb={8}>
          <Box>
            <Heading fontSize="md" mb={2}>
              wavestudio
            </Heading>
            <Box mb={2}>
              <Badge colorScheme="teal">HTML</Badge>
              <Badge colorScheme="red" ml={2}>
                CSS
              </Badge>
            </Box>
            <Box>
              <Text>
                Live preview:{' '}
                <Link
                  color="yellow.500"
                  href="https://comaliot.github.io/wavestudio-design/"
                >
                  wavestudio
                </Link>
              </Text>
              <Text>
                Code:{' '}
                <Link
                  color="yellow.500"
                  href="https://github.com/comaliot/wavestudio-design"
                >
                  Github
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>

        <Box maxW="xxl" w="100%" p={4} boxShadow="base" rounded="md">
          <Box>
            <Heading fontSize="md" mb={2}>
              Holidaze
            </Heading>
            <Box mb={2}>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="red" ml={2}>
                TailwindCSS
              </Badge>
              <Badge colorScheme="pink" ml={2}>
                API
              </Badge>
              <Badge colorScheme="pink" ml={2}>
                Heroku
              </Badge>
            </Box>
            <Box>
              <Text>
                Live preview:{' '}
                <Link
                  color="yellow.500"
                  href="https://holidaze-pe2.netlify.app/"
                >
                  Holidaze
                </Link>
              </Text>
              <Text>
                Code:{' '}
                <Link
                  color="yellow.500"
                  href="https://github.com/comaliot/project-exam-2"
                >
                  Github
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
