import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import StyledButton from './button';
import SmallStyledButton from './smallButton';
import { Slider, Typography, makeStyles } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const PDFViewAll = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(null);
    const [newValue, setValue] = useState(100);
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    //var remainingHeight = 0.695 * windowHeight + 0.04 * windowWidth;
    var remainingHeight = 0.695 * windowWidth + 0.04 * windowHeight;
    remainingHeight *= (newValue / 300);

    function DocumentLoaded({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
        console.log("loaded");

    }

    function goToPrevPage() {
        setPageNumber(currPage => currPage - 1);
    }

    function goToNextPage() {
        setPageNumber(currPage => currPage + 1);
    }

    function FileChanged(event) {
        setFile(event.target.files[0]);
        setPageNumber(1);
        let bodyObj = document.getElementsByTagName('body')[0];

        setTimeout(function () {
            bodyObj.style.backgroundColor = '#485461';
        }, 1000);
    }

    var currPageNoDisp = numPages ? pageNumber : "0";
    var totalPagesDisp = numPages ? numPages : "0";
    var prevDisabled = (currPageNoDisp <= 1);
    var nextDisabled = (currPageNoDisp === numPages || numPages === null);

    function valuetext(value) {
        return `${value}%`;
    }

    const useStyles = makeStyles({
        root: {
            width: 200,
            paddingTop: 10,
        },
    });

    const styler = useStyles();

    function sliderHasChanged(eventObj, value) {
        setValue(value);
        if(file === null) return;
        //console.log(newValue);
        var pageGrid = document.getElementsByClassName("page-grid")[0];
        remainingHeight = 0.695 * windowWidth + 0.04 * windowHeight;
        remainingHeight *= (newValue / 300);
        switch (newValue) {
            case 20:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "auto auto auto auto auto auto auto auto auto";
                break;
            case 40:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "repeat(5, minmax(400px, 19vw) [col-start])";
                break;
            case 60:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "repeat(4, minmax(400px, 24vw) [col-start])";
                break;
            case 80:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "repeat(3, minmax(400px, 32vw) [col-start])";
                break;
            case 100:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "repeat(2, minmax(400px, 45vw) [col-start])";
                break;
            case 120:
                break;
            case 140:
                break;
            case 160:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "auto";
                break;
            case 180:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "auto";
                break;
            case 200:
                console.log(newValue)
                pageGrid.style.gridTemplateColumns = "auto";
                break;
        }
    }

    const pageHolder = () => {

        var documentText = `<div>
        <Document
            file={file}
            renderMode="svg"
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={DocumentLoaded}
        >
            <div class="page-grid">`;
        var endOfDoc = `</div>
        </Document>
        </div>`;
        var eachPage = `<Page
        pageNumber={pageNumber}
        renderMode="svg"
        height={remainingHeight}
        loading=""`;
        var endOfPage = `>
        </Page>`;

        const listOfColors = [
            "",
            "protanopia",
            "protanomaly",
            "deuteranopia",
            "deuteranomaly",
            "tritanopia",
            "tritanomaly",
            "achromatopsia",
            "achromatomaly"
        ];

        listOfColors.forEach(type => {
            documentText = (documentText + eachPage + "className=" + `"` + type + `"` + endOfPage);
            //console.log(type);
        });

        documentText += endOfDoc;


        return (
            <div>
                <Document
                    file={file}
                    renderMode="svg"
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={DocumentLoaded}
                >
                    <div class="page-grid">
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className=""
                        >
                            Normal
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="protanopia"
                        >
                            Protanopia
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="protanomaly"
                        >
                            Protanomaly
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="deuteranopia"
                        >
                            Deuteranopia
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="deuteranomaly">
                            Deuteranomaly
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="tritanopia">
                            Tritanopia
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="tritanomaly"
                        >
                            Tritanomaly
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="achromatopsia"
                        >
                            Achromatopsia
                        </Page>
                        <Page
                            pageNumber={pageNumber}
                            renderMode="svg"
                            height={remainingHeight}
                            loading=""
                            className="achromatomaly">
                            Achromatomaly
                        </Page>
                    </div>
                </Document>
            </div>
        );
    };


    return (
        <div>
            <FadeIn>
                <div class="info-container">
                    <div class="load-file">
                        <div class="label-file">
                            <label><b>Load from File: </b></label>
                        </div>
                        <div class="choose-file">
                            <input
                                onChange={FileChanged}
                                type="file"
                            />
                        </div>
                    </div>

                    <div class="page-info">
                        <p><b>Page {currPageNoDisp} of {totalPagesDisp}</b></p>
                    </div>

                    <div class="navigation-buttons">
                        <SmallStyledButton onClick={goToPrevPage} className="grow" disabled={prevDisabled}>Previous Page</SmallStyledButton>
                        <SmallStyledButton onClick={goToNextPage} className="grow" disabled={nextDisabled}>Next Page</SmallStyledButton>
                    </div>

                    <div id="choose-size">
                        <div className={styler.root}>

                            <Slider
                                value={newValue}
                                color="secondary"
                                defaultValue={100}
                                valueLabelFormat={valuetext}
                                aria-labelledby="discrete-slider-small-steps"
                                step={20}
                                marks
                                min={20}
                                max={200}
                                valueLabelDisplay="auto"
                                onChange={sliderHasChanged}
                            />
                        </div>
                    </div>
                </div>
                <div class="pdfBox">{pageHolder()}</div>
                <div class="infoAll">
                    <br></br>
                    Types of Color Blindness:
                    <ul>
                        <li>Protanopia - Complete shift of L-Cone (too little red light, too much green light)</li>
                        <li>Protanomaly - Partial shift of L-Cone (too little red light, too much green light)</li>
                        <li>Deuteranopia - Complete shift of M-Cone (too much red light, too little green light)</li>
                        <li>Deuteranomaly - Parital shift of M-Cone (too much red light, too little green light)</li>
                        <li>Tritanopia - Extremely reduced sensitivity to S-Cone cells (blue-yellow colorblindness)</li>
                        <li>Tritanomaly - Partially reduced sensitivity to S-Cone cells (blue-yellow colorblindness)</li>
                        <li>Achromatopsia - Near complete lack of color in vision</li>
                        <li>Achromatomaly - Faded colors in vision</li>
                    </ul>
                    Made by <a href="https://github.com/Indian-Jones">Sarabeswaran Balamurugan</a><br></br>
                    Color Blind Filters (filters.svg) built by <a href="https://github.com/hail2u">hail2u</a> in <a href="https://github.com/hail2u/color-blindness-emulation">this repo</a>.

                </div>


            </FadeIn>
        </div>
    );
}
export default PDFViewAll;