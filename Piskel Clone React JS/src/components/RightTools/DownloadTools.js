import React, { Component } from 'react';
import GIF from 'gif.js/dist/gif';

const automaticallyDownloadFile = (link, extension = 'png') => {
    const element = document.createElement('a');

    element.setAttribute('href', link);
    element.setAttribute('download', `image.${extension}`);
    document.body.appendChild(element);
    element.click();

    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
};

export default class DownloadTools extends Component {
    downloadPng () {
        try {
            const canvas = document.getElementById('main-canvas');
            const link = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            automaticallyDownloadFile(link);
        } catch (e) {
            console.warn(e);
        }
    }

    downloadAnimatedPng () {
        const canvasSize = 128;
        const canvasToGeneratePNG = document.createElement("canvas");
        const context = canvasToGeneratePNG.getContext("2d");
        canvasToGeneratePNG.width = canvasSize;
        canvasToGeneratePNG.height = canvasSize;

        const encoder = new APNGencoder(canvasToGeneratePNG);

        const canvases = [...document.getElementsByClassName('frames-bar__frame-preview-canvas')];

        encoder.setDelay(100);
        encoder.start();

        canvases.forEach((canvas) => {
            context.drawImage(canvas, 0, 0);
            encoder.addFrame();
            context.clearRect(0, 0, canvasSize, canvasSize);
        });

        encoder.finish();

        const base64Out = bytesToBase64(encoder.stream().bin);

        automaticallyDownloadFile("data:image/png;base64," + base64Out);
    }

    downloadGif () {
        const gif = new GIF({
            workers: 2,
            quality: 10
        });

        const canvases = [...document.getElementsByClassName('frames-bar__frame-preview-canvas')];
        canvases.forEach((canvas) => {
            gif.addFrame(canvas, { delay: 100 });
        });
        gif.on('finished', (blob) => {
            automaticallyDownloadFile(URL.createObjectURL(blob), 'gif');
        });
        gif.render();
    }

    render () {
        return (
            <div className="download-tool">
                <button
                    className="action-btn download-image-btn"
                    onClick={() => this.downloadPng()}
                >
                    Download png
                </button>
                <button
                    className="action-btn download-image-btn"
                    onClick={() => this.downloadAnimatedPng()}
                >
                    Download animated png
                </button>
                <button
                    className="action-btn download-image-btn"
                    onClick={() => this.downloadGif()}
                >
                    Download gif
                </button>
            </div>
        );
    }
}
