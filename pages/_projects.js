import useSWR from 'swr';
import { Flex, Heading, Text, Link } from '@chakra-ui/react';
import Container from '../components/Container';

export default function Projects() {
  const { data, error } = useSWR('/api/github');
  if (error)
    return (
      <Container>
        <Text>Failed to load projects!</Text>
      </Container>
    );
  if (!data)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  return (
    <Container>
      <Heading as="h1">Projects ({data.repos.length})</Heading>
      <Flex flexDir="column">
        {data.repos.map((project) => (
          <Link href={`/project/${project.name}`} key={project.name}>
            <Flex
              flexDir="column"
              my={4}
              border="1px solid gray"
              p="5px"
              borderRadius={5}
            >
              <Text fontWeight="bold">{project.name}</Text>
              <Text>{project.description}</Text>
              <Text>{project.stars} stars</Text>
              <Text>{project.url}</Text>
              <Text>{project.language}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
