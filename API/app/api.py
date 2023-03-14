from fastapi import FastAPI, UploadFile, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.authentication import auth_router, User, get_current_active_user
import glob
from src.predict import calories_calculator
from src.load_model import transformer_model_prediction
import pandas as pd
import re
import warnings
warnings.filterwarnings("ignore")
from PIL import Image

from io import BytesIO

app = FastAPI(title="Rate my snack API", description="API for rating food images", version="0.1.0")
app.include_router(auth_router)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
)


@app.post("/rate-image", tags=["Evaluate"])
async def rate_food_item(file: UploadFile, current_user: User = Depends(get_current_active_user)):
    image_bytes = await file.read()
    image = BytesIO(image_bytes)
    image=Image.open(image)
    food_name, prediction_prob=transformer_model_prediction(image)
    foodname = re.sub(r'[^\w\s]','',food_name) #remove everything except words and space
    foodname = re.sub(r'_','',foodname)
    calories= calories_calculator(foodname)
    return {"foodname": foodname,"calories":calories,"prediction_prob":prediction_prob}
