import React, { Fragment } from 'react';
import Header from 'Components/Header';
import Flex from 'styled-flex-component';
import Notification from 'Components/Notification';
import GlobalStyles from 'Components/GlobalStyles';

const AppPresenter = () => (
  <>
    <GlobalStyles />
    <Header />
    <Flex alignCenter full column>
      <Notification />
    </Flex>
  </>
);

export default AppPresenter;
