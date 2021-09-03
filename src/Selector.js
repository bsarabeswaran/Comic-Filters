import React from 'react';
import PDFView from './PDFDisplay.js';
import PDFViewAll from './PDFAll.js';
import FadeIn from 'react-fade-in';
import StyledButton from './button.js'
import Wrapper from './PDFAllWrap.js';

export default class Selector extends React.Component {
    //Add choosing .cbz or .pdf
    constructor(props) {
        super(props);
        this.state = {
            cbzAll: false,
            cbzCompare: false,
            pdfAll: false,
            pdfCompare: false
        }
    }

    setter(whichOne) {
        var bodyObj = document.getElementsByTagName('body')[0];
        if (this.state.cbzAll === true ||
            this.state.cbzCompare === true ||
            this.state.pdfCompare === true ||
            this.state.pdfAll === true) {
            setTimeout(function () {
                bodyObj.style.backgroundColor = '#2a3e55';
                console.log(bodyObj)
                console.log(bodyObj.style.backgroundColor);
            }, 1000);
        }

        var array = {
            cbzAll: false,
            cbzCompare: false,
            pdfAll: false,
            pdfCompare: false
        };

        array[whichOne] = true;
        this.setState(array);
    }

    render() {
        console.log(this.state);
        if (this.state.pdfAll === false && this.state.cbzAll === false && this.state.pdfCompare === false && this.state.cbzCompare === false) {
            return (
                <div>
                    <div id="select">
                        <FadeIn>
                            <h1 id="title"><b>Color-Blind Comic Emulation</b></h1>
                            <div id="choose-file-type">
                                <StyledButton className="grow" variant="contained" color="primary" onClick={() => { this.setter('pdfCompare') }}>PDF Compare</StyledButton>
                                <StyledButton className="grow" variant="contained" color="primary" onClick={() => { this.setter('pdfAll') }}>PDF All</StyledButton>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            );
        }

        if (this.state.pdfCompare === true) {
            return (
                <div id="select">
                    <h1 id="title"><b>Color-Blind Comic Emulation</b></h1>
                    <FadeIn>
                        <div id="choose-file-type">
                            <StyledButton className="grow" variant="contained" color="primary" onClick={() => { this.setter('pdfCompare') }}>PDF Compare</StyledButton>
                            <StyledButton className="grow" variant="contained" color="primary" onClick={() => { this.setter('pdfAll') }}>PDF All</StyledButton>
                        </div>
                        <PDFView></PDFView>
                    </FadeIn>
                </div>
            );
        }

        if (this.state.pdfAll === true) {
            console.log("hey");
            return (
                <div id="select">
                    <h1 id="title"><b>Color-Blind Comic Emulation</b></h1>
                    <FadeIn>
                        <div id="choose-file-type">
                            <StyledButton className="grow" variant="contained" color="primary" onClick={() => { this.setter('pdfCompare') }}>PDF Compare</StyledButton>
                            <StyledButton className="grow" variant="contained" color="primary" onClick={() => { this.setter('pdfAll') }}>PDF All</StyledButton>
                        </div>
                        <PDFViewAll></PDFViewAll>
                    </FadeIn>
                </div>
            );
        }

    }
}