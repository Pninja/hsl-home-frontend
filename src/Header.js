import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h1' icon textAlign='center'>
      <Icon name='wifi' circular />
      <Header.Content>HSL Home</Header.Content>
    </Header>
  </div>
)

export default HeaderExampleUsersIcon