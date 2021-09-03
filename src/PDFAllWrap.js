import React from "react";
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import FadeIn from 'react-fade-in';
import SmallStyledButton from './smallButton';
import { Slider, Typography, makeStyles } from '@material-ui/core';
import { Component } from "react";
import PDFViewAll from "./PDFAll";


class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { div_width: null };
    }

    componentDidMount() {
        this.setDivSize();
    }

    setDivSize = () => {
        this.setState({ width: this.pdfObj.getBoundingClientRect().width })
    }

    render() {
        return (
            <div id="row" style={{ height: "100vh", width: "100vw", display: "flex" }}>
                <div id="placeholderWrapper" style={{ width: "10vw", height: "100vh" }} />
                <div id="pdfObj" style={{ width: "90vw" }} ref={(ref) => this.pdfObj = ref}>
                    <PDFViewAll wrapperDivSize={this.state.width} pageNo={1}/>
                </div>
            </div>
        )
    }

}

class PdfComponent extends Component {
    render() {
        return (
            <div>
                <Document
                    file={"Bone-1-4142.pdf"}
                >
                    <Page pageIndex={1} width={this.props.wrapperDivSize} />
                </Document>
            </div>
        )
    }
}
export default Wrapper;