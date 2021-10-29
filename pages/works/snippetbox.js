import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout>
    <Container mt={15}>
      <Title>
        SnippetBox <Badge>2021</Badge>
      </Title>
      <P>
        SnippetBox lets people paste and share snippets of text -- a bit like
        Pastebin or Github&apos;s Gists.
      </P>
      <List ml={4} mt={4} mb={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/smetanamolokovich/snippetbox">
            https://github.com/smetanamolokovich/snippetbox
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Golang, HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/snippetbox.png" alt="snippetbox" />
    </Container>
  </Layout>
)

export default Work
