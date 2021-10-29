import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbnailPaginator from '../public/images/thumbnail.png'
import thumbnailSnippetBox from '../public/images/snippetbox.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="paginator"
              title="Paginator"
              thumbnail={thumbnailPaginator}
            >
              Telebot library extention. Telebot is Telegram bot library build
              in Golang.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="snippetbox"
              title="SnippetBox"
              thumbnail={thumbnailSnippetBox}
            >
              SnippetBox lets people paste and share snippets of text.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
