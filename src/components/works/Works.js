/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import Medical from '../../assets/recentprojects/medical.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Electric Vehicles',
      description: `Market analysis on electric vehicles (EVs) - USA using the dataset, stakeholders are likely to have a range of questions spanning market trends, performance metrics, geographic distribution, and customer demographics. `,
      alter: 'Electric Vehicles',
      image: `${Portfolio}`,
      projectLink:'https://github.com/Niveta12/Market-Size-Analysis---Electric-Vehicles-in-the-USA-',
    },
    {
      id: 2,
      title: 'Healthcare-Data-Analysis',
      description: `Analyzed the prevalence of various diseases and their distribution across different demographic groups (age, gender, location). Investigate how different demographic groups utilize healthcare services under the NTR Vaidya Seva scheme.`,
      alter: 'Healthcare-Data-Analysis',
      image: `${Medical}`,
      projectLink:'https://github.com/Niveta12/Disease-Prevalence-and-Demographics---Healthcare-Data-Analysis',
    },
    {
      id: 3,
      title: 'Corporation Product Sales',
      description: `I’ve recently developed a data dashboard using SN Corporation’s dataset, providing deep insights into various facets of the business. From tracking customer acquisition and sales performance to analyzing customer demographics and operational efficiency, this dashboard highlights key trends and opportunities.`,
      alter: 'Corporation Product Sales',
      image: `${Veritru}`,
      projectLink:'https://github.com/Niveta12/SN-Corporation-Product-Sales-Strategy-Analysis-using-PowerBI',
    },
    {
      id: 4,
      title: 'Alzheimer’s Disease',
      description: `Developing an Integrated Framework for Comprehensive Alzheimer's Disease Analysis. Alzheimer's disease (AD) is still a major public health concern, and understanding its course and facilitating early identification require sophisticated approaches.`,
      alter: 'Alzheimer’s Disease',
      image: `${Lofo}`,
      projectLink:'https://github.com/Niveta12/Alzheimer-s-Disease-using-Machine-Learning',
    },
    {
      id: 5,
      title: 'Corporate Stability Through AI',
      description: `In the thriving landscape of the American Stock Market, this investigation leverages the comprehensive US Company Bankruptcy Prediction Dataset, spanning the years 1999 to 2018, featuring critical financial variables. Moreover, this research reveals the unerring prediction of corporate bankruptcy is a paramount factor among investors, stakeholders, and corporate stability.`,
      alter: 'Corporate Stability Through AI',
      image: `${Startup}`,
      projectLink:'https://github.com/Niveta12/-Financial-Sentinel-Beyond-Prediction-',
    },
    {
      id: 6,
      title: 'Machine Learning and Deep Learning',
      description: `This project aims to explore, implement, and compare various machine learning models on a
classification dataset. This project will help you to understand the nuances of different
algorithms and their performance metrics.
This project consists of three different parts and these will be in the order in the codes with
the explanation.`,
      alter: 'Machine Learning and Deep Learning',
      image: `${Lacalle}`,
      projectLink:'https://github.com/Niveta12/Gesture-Phase-segmentation-using-Machine-Learning-and-Deep-Learning-models',
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
              <h3><a  href={project.projectLink} target="_blank" rel="noopener noreferrer" >Project Link</a></h3>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
