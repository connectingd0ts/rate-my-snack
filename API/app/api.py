from fastapi import FastAPI, UploadFile, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.authentication import auth_router, User, get_current_active_user
import glob
from src.predict import predict_class,calories_calculator
import tensorflow as tf
import pandas as pd
import re
import warnings
warnings.filterwarnings("ignore")

import tensorflow.keras.backend as K
from tensorflow.keras.models import load_model
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

K.clear_session()
model_best = load_model(glob.glob('model/*.hdf5')[0],compile = False)
print(model_best)

@app.post("/rate-image", tags=["Evaluate"])
async def rate_food_item(file: UploadFile, current_user: User = Depends(get_current_active_user)):
    image_bytes = await file.read()
    image = BytesIO(image_bytes)
    food_name=predict_class(model_best,image, False)
    foodname = re.sub(r'[^\w\s]','',food_name) #remove everything except words and space
    foodname = re.sub(r'_','',foodname)
    calories= calories_calculator(foodname)
    return {"foodname": foodname,"calories":calories}
