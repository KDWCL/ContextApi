import React from 'react';
import Header from 'Components/Header';
import Flex from 'styled-flex-component';
import Notification from 'Components/Notification';
import GlobalStyles from 'Components/GlobalStyles';

const AppPresenter = ({ message }) => (
  <>
    <GlobalStyles />
    <Header />
    <Flex alignCenter full column>
      <Notification />
    </Flex>
  </>
);

export default AppPresenter;
