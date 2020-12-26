import React from 'react';
import ChewieDark from './assets/Chewie_Bad_Choice.jpg';
import ChewieLight from './assets/Chewie_Good_Choice.jpg';
import { LIGHT_CHOICE, DARK_CHOICE } from './util';

interface ILandingChoiceProps {
    setSide: React.Dispatch<React.SetStateAction<string>>;
}

const LandingChoice: React.FunctionComponent<ILandingChoiceProps> = ({ setSide }) => {

    return (
        <>
        <div className="row justify-content-center">
            <h1 className="display-4 text-center choice-title">Chewie has many sides...</h1>
            <h1 className="display-4 text-center choice-title">Choose one to see</h1>
        </div>
            <div className="row justify-content-center">
                <div className="col col-auto align-self-center btn-dark-side text-center">
                    <button className="btn btn-large" onClick={(e) => {setSide(DARK_CHOICE)}} ><img alt="Chewie doing naughty things" className="choice-btn-img dark-hover" src={ChewieDark}></img></button>
                    <p className="lead text-center choice-text">Dark Side</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-auto align-self-center btn-light-side text-center">
                    <button className="btn btn-large" onClick={(e) => {setSide(LIGHT_CHOICE)}}><img alt="Chewie all innocent" className="choice-btn-img light-hover" src={ChewieLight}></img></button>
                    <p className="lead text-center choice-text">Light Side</p>
                </div>
            </div>
        </>
    )
};

export default LandingChoice;
