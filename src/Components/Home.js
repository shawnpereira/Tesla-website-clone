import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touch-less Delivery"
        backgroundImg="model-s.jpg"
        rightBtnText="Existing Inventory"
        leftBtn="Custom Order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touch-less Delivery"
        backgroundImg="model-y.jpg"
        rightBtnText="Existing Inventory"
        leftBtn="Custom Order"
      />
      <Section
        title="Model 3"
        description="Order Online for Touch-less Delivery"
        backgroundImg="model-3.jpg"
        rightBtnText="Existing Inventory"
        leftBtn="Custom Order"
      />
      <Section
        title="Model X"
        description="Order Online for Touch-less Delivery"
        backgroundImg="model-x.jpg"
        rightBtnText="Existing Inventory"
        leftBtn="Custom Order"
      />
      <Section
        title="Lowest Cost Solar Panels XD"
        description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        rightBtnText="Order now"
        leftBtn="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Le bhai achha hai XD"
        backgroundImg="solar-roof.jpg"
        rightBtnText="Order now"
        leftBtn="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        rightBtnText="Order now"
        leftBtn="Learn More"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
