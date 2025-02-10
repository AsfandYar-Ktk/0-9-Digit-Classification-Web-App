import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";
import "./CanvasModule.css";

function CanvasModule({ onPrediction }) {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // Initialization when the component
    // mounts for the first time
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctxRef.current = ctx;
    }, []);

    // Function for starting the drawing
    const startDrawing = (e) => {
        const scaleFactor = canvasRef.current.offsetWidth / canvasRef.current.width;
        const x = e.nativeEvent.offsetX / scaleFactor;
        const y = e.nativeEvent.offsetY / scaleFactor;

        ctxRef.current.beginPath();
        ctxRef.current.moveTo(x, y);
        setIsDrawing(true);
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        const scaleFactor = canvasRef.current.offsetWidth / canvasRef.current.width;
        const x = e.nativeEvent.offsetX / scaleFactor;
        const y = e.nativeEvent.offsetY / scaleFactor;

        ctxRef.current.lineTo(x, y);
        ctxRef.current.stroke();
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('Clear')
    };

    
    const predict = () => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
    
        // Get the image data
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
        // Convert to flat array
        const srgbArray = Array.from(imgData.data);
    
        // Send the data to the backend
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pixels: srgbArray }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error('Error:', data.error);
                } else {
                    console.log('Predicted digit:', data.digit);
                    console.log('Confidence:', data.confidence);
                    onPrediction({
                        digit: data.digit,
                        confidence: data.confidence,
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    

    return <div className="draw-area">
        <canvas
            width={'28px'}
            height={'28px'}
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            onMouseOut={endDrawing}
            ref={canvasRef}
            style={{
                width: "320px",
                height: "320px",
                border: "1px solid grey",
                imageRendering: "pixelated"
            }}>
        </canvas>
        <Menu
            clearCanvas = {clearCanvas}
            predict = {predict}
        />

    </div>;
}

export default CanvasModule;