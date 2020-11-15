import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const PageHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Recent Posts</Header.Content>
    </Header>
    {/* <Image
      centered
      size='large'
      src='/images/wireframe/centered-paragraph.png'
    /> */}
  </div>
)

export default PageHeader;