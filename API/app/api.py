from fastapi import FastAPI, UploadFile, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.authentication import auth_router, User, get_current_active_user
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
    image = Image.open(BytesIO(image_bytes))
    width, height = image.size
    return {"width": width, "height": height}