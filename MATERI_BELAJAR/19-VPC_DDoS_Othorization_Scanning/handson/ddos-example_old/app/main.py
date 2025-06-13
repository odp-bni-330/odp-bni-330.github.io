from fastapi import FastAPI, Query, Response, status
from pydantic import BaseModel


app = FastAPI()

@app.get("/")
def home():
    return {"message": "Server is running"}

class InputModel(BaseModel):
    data: str

@app.post("/input")
def post_input(payload: InputModel):
    return {"received": payload.data}
