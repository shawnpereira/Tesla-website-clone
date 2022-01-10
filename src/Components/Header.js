import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Box>
      <a>
        <img src="/images/logo.svg" alt=""></img>
      </a>
      <Menu>
        
      </Menu>
    </Box>
  );
}

export default Header;
const Box = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Menu = styled.div``;
