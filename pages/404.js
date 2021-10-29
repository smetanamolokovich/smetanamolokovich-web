import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container display="flex" centerContent={true} mt="15%">
      <Image src="/images/404.png" width="65%" alt="Not Found" />

      <Heading as="h1" align="center">
        Don&apos;t Cry Over Spilled Page
      </Heading>
      <Text align="center">
        The page you&apos;re looking for was not found.
      </Text>
    </Container>
  )
}

export default NotFound
