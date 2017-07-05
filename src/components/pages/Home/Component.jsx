import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { GreenTheme, LightTheme } from '../../themes';
import Header from '../../elements/Header';
import Container from '../../elements/Container';

/* eslint react/prefer-stateless-function: 0 */
class HomePage extends Component {

  render() {
    return (
      <div>
        <GreenTheme>
          <Header>
            <h1>
              Victor Quiroz Castro
              <br />
              <small>Javascript Fullstack Developer</small>
            </h1>
          </Header>
        </GreenTheme>
        <LightTheme>
          <Container important>
            <h1>About me</h1>
            <p>
              Studied Cybernetics Engineering (Just a fancy name for Computer Science + Electronics)
              in {'"Universidad La Salle"'} from 2006 to 2011.
            </p>
          </Container>
        </LightTheme>
      </div>
    );
  }
}

HomePage.defaultProps = {

};

HomePage.propTypes = {

};

export default HomePage;
