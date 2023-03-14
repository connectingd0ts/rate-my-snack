from transformers import AutoModelForImageClassification, AutoFeatureExtractor
import torch


repo_name = "my_model"

feature_extractor = AutoFeatureExtractor.from_pretrained(repo_name)
model = AutoModelForImageClassification.from_pretrained(repo_name)

def transformer_model_prediction(image):
    # prepare image for the model
    encoding = feature_extractor(image.convert("RGB"), return_tensors="pt")
    print(encoding.pixel_values.shape)
    with torch.no_grad():
        logits =model(**encoding).logits

    probs = logits.softmax(dim=-1).detach().cpu().flatten().numpy().tolist()
    prediction_prob=max(probs)

    predicted_label = logits.argmax(-1).item()
    return model.config.id2label[predicted_label],prediction_prob