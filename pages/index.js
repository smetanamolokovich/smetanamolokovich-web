import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Heading,
  Image,
  List,
  ListItem,
  Icon,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioYear, BioSection } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'
import { BsTelegram } from 'react-icons/bs'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={6}
          align="center"
        >
          Hello, I am a front-end developer based in Prague!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Aituar
            </Heading>
            <p>Dev stack: JS/TS, React, Vue, Node, MongoDB</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whieAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/cow.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dignissim arcu arcu, eu tempor urna dapibus in. Nulla arcu arcu,
            blandit et sodales et, mattis porttitor tortor. Fusce lobortis
            lacinia molestie. Integer ultrices nisl sed semper auctor. Duis
            rutrum, lectus at cursus placerat, lacus turpis ullamcorper lacus,
            at rutrum tellus odio dapibus ex{' '}
            <NextLink href="/works/pagination">
              <Link>Paginator</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" mt={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Altay, CHN.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Student in 2nd academic year, in Czech University of Life Science in
            Prague, faculty of Econimics, Informatics pragramme.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Arrived to Prague, CR
          </BioSection>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            What I like to do
          </Heading>
          <Paragraph>
            Coding, Basketball, Cooking, Learning new stuff, Reading, Backend
            development, Blockchain
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>

          <List>
            <ListItem>
              <Link href="https://github.com/smetanamolokovich" _blank="target">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @smetanamolokovich
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/smetanamolokovich" _blank="target">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={BsTelegram} />}
                >
                  @smetanamolokovich
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
