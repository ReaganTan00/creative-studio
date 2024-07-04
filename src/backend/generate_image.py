import json
import requests
from PIL import Image
import io
import re
from time import time

API_TOKEN = "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"  # token in case you want to use a private API
headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "X-Wait-For-Model": "true",
    "X-Use-Cache": "false"
}
API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"


def query(payload):
    data = json.dumps(payload)
    response = requests.request("POST", API_URL, headers=headers, data=data)
    
    if response.status_code != 200:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None
    
    try:
        return Image.open(io.BytesIO(response.content))
    except Image.UnidentifiedImageError:
        print("Received content is not an image")
        print(response.content)
        return None


def slugify(text):
    # Remove non-word characters and foreign characters
    text = re.sub(r"[^\w\s]", "", text)
    text = re.sub(r"\s+", "-", text)
    return text


prompt = "A photo of a flying cat"
image = query({"inputs": prompt})

if image:
    image.save(f"{slugify(prompt)}-{time():.0f}.png")
else:
    print("Failed to generate image")
