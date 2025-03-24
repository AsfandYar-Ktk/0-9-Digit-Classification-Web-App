# 0-9 Digit Classification Web App

This is a web application that allows users to draw a digit (0-9) on a 28x28 grid, and a machine learning model predicts the digit. The backend is built using Flask, while the frontend is developed with React.


---
## 📽️ Demo Video
A demonstration video of the project will be added here.

https://github.com/user-attachments/assets/8f697a0f-fda8-4195-90ae-ac7624f475b9

---

## Features
- 🎨 **Interactive Canvas**: Users can draw digits on a 28x28 grid.
- ⚡ **Real-time Prediction**: The drawn digit is processed and classified using a trained ML model.
- 🖥️ **Flask Backend**: Manages API requests and digit classification.
- 🌐 **React Frontend**: Provides a smooth and responsive UI.

---
## Setup Instructions

### 1. 🛠️ Clone the Repository
```bash
git clone https://github.com/AsfandYar-Ktk/0-9-Digit-Classification-Web-App.git
cd 0-9-Digit-Classification-Web-App
```

### 2. 🔧 Backend Setup (Flask)
Navigate to the `backend/Flask` directory and create a virtual environment:
```bash
cd backend/Flask
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Run the Flask server:
```bash
python app.py
```

---
### 3. 🚀 Frontend Setup (React)
Navigate to the `frontend` directory and install dependencies:
```bash
cd ../../frontend
npm install
```

Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000/`.


---
## 🔮 Future Improvements
- 📈 Enhance model accuracy with a more complex neural network.
- ✍️ Add support for additional handwriting styles.
- 🌍 Deploy the app online for public access.

---
## 🤝 Contributing
Feel free to submit issues or pull requests if you’d like to improve the project.

:)

