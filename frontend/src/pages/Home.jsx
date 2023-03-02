import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Slide from "../components/Slide";
import CatCard from "../components/CatCard";
import ProjectCard from "../components/ProjectCard";
import { cards, projects } from "../data";
import Marketing1 from "../components/Marketing1";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="verticalSpacer"></div>
      <Slide sliderTitle="Popular professional services" backColor="backColor">
        {cards.map((card) => {
          return <CatCard key={card.id} card={card} />;
        })}
      </Slide>
      <Marketing1 />
      <Slide
        sliderTitle="Get inspired with projects made by our freelancers"
        backColor="backColor"
      >
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Slide>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Home;
