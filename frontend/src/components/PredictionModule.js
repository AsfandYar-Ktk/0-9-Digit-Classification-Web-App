function PredictionModule({ digit, confidence }) {
    return (
        <div className="prediction-area" style={{ marginBottom: "5%" }}>
            <h3 style={{ margin: 0 }}>Prediction Result</h3>
            <h1 style={{ fontSize: "100px", margin: 0 }}>
                {digit !== null ? digit : "-"}
            </h1>
            <p style={{ margin: 0 }}>
                Confidence: {confidence !== null ? `${confidence.toFixed(2)}%` : "N/A"}
            </p>
        </div>
    );
}

export default PredictionModule;
