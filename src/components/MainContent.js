import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon
} from 'native-base';

const MainContent = () => {
  return (
    <Container>
      <Header>
        <Button transparent>
          <Icon name='ios-menu' />
        </Button>

        <Title style={{
          alignSelf: 'center'
        }}>
          <Text>Header</Text>
        </Title>

        <Button transparent>
          <Icon name='ios-menu' />
        </Button>
      </Header>

      <Content style={{ backgroundColor: '#fff', flex: 1 }}>
      </Content>

      <Footer>
        <FooterTab>
          <Button transparent>
            <Icon name='ios-call' />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default MainContent;
