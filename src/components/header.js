import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderTitle>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderTitle>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
