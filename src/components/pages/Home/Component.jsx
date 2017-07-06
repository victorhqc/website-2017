import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import distanceInWords from 'date-fns/distance_in_words';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

import { GreenTheme } from '../../themes';

import Row from '../../elements/Row';
import Column from '../../elements/Column';

import Header from '../../elements/Header';
import Container from '../../elements/Container';

const today = new Date();

const yearsOfExperience = distanceInWordsStrict(
  new Date('2010-06-30'),
  today,
);

const yearsOfReact = distanceInWords(
  new Date('2015-11-10'),
  today,
);

/* <p>
  Studied Cybernetics Engineering (Just a fancy name for Computer Science + Electronics)
  in {'"Universidad La Salle"'} from 2006 to 2011.
</p> */

/* eslint react/prefer-stateless-function: 0 */
class HomePage extends Component {

  render() {
    return (
      <GreenTheme>
        <Header>
          <Row>
            <Column grow={2} basis="100%">
              <h1>
                Victor Quiroz Castro
                <br />
                <small>Javascript Fullstack Developer</small>
                <br />
                <small>@victorhqc</small>
              </h1>
            </Column>
            <Column grow={1}>
              <Container important textAlign="left" noPadding>
                <h1>About me</h1>
                <p>
                  {`
                    I'm a Web Developer with ${yearsOfExperience} of experience with JavaScript
                    and Web Technologies.
                  `}
                </p>
                <p>
                  {`
                    I've been using React.js and Redux (${yearsOfReact} now)
                    with Functional Oriented Programming.
                  `}
                </p>
              </Container>
            </Column>
          </Row>
        </Header>
      </GreenTheme>
    );
  }
}

HomePage.defaultProps = {

};

HomePage.propTypes = {

};

export default HomePage;
