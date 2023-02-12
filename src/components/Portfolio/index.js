import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import '../../../src/App.scss'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    console.log(portfolioData)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    // connected to firebase
    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'react portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    // const renderPortfolio = (portfolio) => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 portfolio.map((port, idx) => {
    //                     return (
    //                         <div className="image-box" key={idx}>
    //                             <img 
    //                             src={port.image}
    //                             className="portfolio-image"
    //                             alt="portfolio" />
    //                             <div className="content">
    //                                 <p className="title">{port.name}</p>
    //                                 <h4 className="description">{port.description}</h4>
    //                                 <button
    //                                     className="btn"
    //                                     onClick={() => window.open(port.url)}
    //                                 >View</button>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     );
    // }

    // make this a new component to reference
    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.desc}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    }).reverse() // reverse order to continue adding to bottom of JSON stack
                }
            </div>
        );
    }



    return (
        // React.Fragment short syntax
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
                {/* <div>{renderPortfolio(portfolio)}</div> */}
            </div>
            <Loader type="ball-scale-multiple" />
        </>
    );
}

export default Portfolio;