from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
import os

app = Flask(__name__)
CORS(app)
# Load the trained model
MODEL_PATH = os.path.join('..', 'mnist_model', 'mnist_model_2.keras')
model = tf.keras.models.load_model(MODEL_PATH)

def softmax(logits):
    exp_vals = np.exp(logits - np.max(logits))  # Subtract max for numerical stability
    return exp_vals / np.sum(exp_vals, axis=1, keepdims=True)

@app.route('/predict', methods=['POST'])
def predict_digit():
    try:
        # Parse the input data
        data = request.json
        srgb_array = data.get('pixels')  # Expecting a flat sRGB array
        
        if not srgb_array or len(srgb_array) != 28 * 28 * 4:
            return jsonify({'error': 'Invalid input data'}), 400

        # Extract every 4th value (alpha channel)
        alpha_values = srgb_array[3::4]  # Start from index 3 and take every 4th value
        # Reshape and normalize the input for the model
        input_data = np.array(alpha_values).reshape(1, 784)/255
        #print(input_data)

        # Predict using the model
        predictions = softmax(model.predict(input_data, verbose=0))
        
        predicted_digit = np.argmax(predictions)
        confidence = round(float(np.max(predictions)) * 100, 2)  # Round to 2 decimal places
        
        #print(predictions)
        #print(type(predicted_digit))
        #print(confidence)
        # Return the prediction and confidence
        return jsonify({
            'digit': int(predicted_digit),
            'confidence': confidence
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
