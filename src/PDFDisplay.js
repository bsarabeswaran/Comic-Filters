import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import SmallStyledButton from './smallButton.js'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const PDFView = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(null);
    const [filter, setFilter] = useState("protanopia");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function DocumentLoaded({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var remainingHeight = 0.695 * windowHeight;

        var pdfBox = document.getElementsByClassName("pdfBox")[0];

        pdfBox.style.height = `${remainingHeight}px`;
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

    function PageLoaded(pageObject) {
        var pageCSS = document.getElementsByClassName("react-pdf__Page__svg")[0];
        //remainingHeight = pageObject.height;
        //console.log(pageCSS);
        if (pageCSS != null) {
            //pageCSS.style.margin = "0 auto";
            pageCSS.style.position = "absolute";
            pageCSS.style.left = "0";
        }
    }
    function PageLoadedType() {
        var pageCSS = document.getElementsByClassName("react-pdf__Page__svg")[1];
        //console.log(pageCSS);
        if (pageCSS != null) {
            //pageCSS.style.margin = "0 auto";
            pageCSS.style.position = "absolute";
            pageCSS.style.right = "0";
        }
    }

    var currPageNoDisp = numPages ? pageNumber : "0";
    var totalPagesDisp = numPages ? numPages : "0";
    var prevDisabled = (currPageNoDisp <= 1);
    var nextDisabled = (currPageNoDisp === numPages || numPages === null);
    var previousStat = "";
    var nextStat = "";
    if (prevDisabled) {
        previousStat = "disabled";
    } else {
        previousStat = "";
    }

    if (nextDisabled) {
        nextStat = "disabled";
    } else {
        nextStat = "";
    }

    //Remaining height: 100vh - 2 * (13vh - 2vw) = 100vh - 26vh + 4vw = 74vh + 4vw
    //Remaining Width: 100vw (might change)
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var remainingHeight = 0.695 * windowHeight;

    //--COMPARE VIEW
    return (
        <div class="overall">
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

                    <div id="choose-Color">
                        The left side is displayed without a filter. The right side is displayed with {filter}.
                        <SmallStyledButton aria-controls="simple-menu" aria-haspopup="true" className="grow" onClick={handleClick}>
                            Color: {filter}
                        </SmallStyledButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            <MenuItem onClick={() => { setFilter("protanopia"); handleClose(); }}>Protanopia</MenuItem>
                            <MenuItem onClick={() => { setFilter("protanomaly"); handleClose(); }}>Protanomaly</MenuItem>
                            <MenuItem onClick={() => { setFilter("deuteranopia"); handleClose(); }}>Deuteranopia</MenuItem>
                            <MenuItem onClick={() => { setFilter("deuteranomaly"); handleClose(); }}>Deuteranomaly</MenuItem>
                            <MenuItem onClick={() => { setFilter("tritanopia"); handleClose(); }}>Tritanopia</MenuItem>
                            <MenuItem onClick={() => { setFilter("tritanomaly"); handleClose(); }}>Tritanomaly</MenuItem>
                            <MenuItem onClick={() => { setFilter("achromatopsia"); handleClose(); }}>Achromatopsia</MenuItem>
                            <MenuItem onClick={() => { setFilter("achromatomaly"); handleClose(); }}>Achromatomaly</MenuItem>
                        </Menu>
                    </div>
                </div>

                <div class="pdfBox">
                    <FadeIn>
                        <Document
                            file={file}
                            renderMode="svg"
                            options={{ workerSrc: "/pdf.worker.js" }}
                            onLoadSuccess={DocumentLoaded}
                        >
                            <Page
                                pageNumber={pageNumber}
                                renderMode="svg"
                                height={remainingHeight}
                                loading=""
                                onLoadSuccess={PageLoaded}
                            >
                            </Page>
                            <Page
                                pageNumber={pageNumber}
                                renderMode="svg"
                                height={remainingHeight}
                                onLoadSuccess={PageLoadedType}
                                loading=""
                                className={filter}
                            >

                            </Page>

                        </Document>
                    </FadeIn>
                </div>

            </FadeIn>
            <div class="info">
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
        </div>
    );

    //ADDING IN ABILITY TO VIEW ALL FILTERS AT ONCE
    //-Show all the filters
    //-Ability to scale the filters
}
export default PDFView;