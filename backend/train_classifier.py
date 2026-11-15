"""
Train high-precision, lightning-fast Ministry and Category Classifier
Trained on 11,583 verified articles from models/Datasets/labelled.csv
"""
import os
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import joblib

DATASET_PATH = os.path.join(os.path.dirname(__file__), "..", "models", "Datasets", "labelled.csv")
MODEL_OUT_PATH = os.path.join(os.path.dirname(__file__), "ministry_model.joblib")

def main():
    print(f"Loading dataset from: {DATASET_PATH}")
    df = pd.read_csv(DATASET_PATH)
    
    # Clean nulls
    df = df.dropna(subset=['Heading', 'Category'])
    df['text'] = df['Heading'].astype(str) + " " + df['Body'].fillna("").astype(str).str.slice(0, 1000)
    
    X = df['text']
    y = df['Category']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.15, random_state=42, stratify=y)
    
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(max_features=15000, stop_words='english', ngram_range=(1, 2))),
        ('clf', LogisticRegression(max_iter=1000, C=2.0))
    ])
    
    print("Training model...")
    pipeline.fit(X_train, y_train)
    
    acc = pipeline.score(X_test, y_test)
    print(f"Model test accuracy: {acc:.4f}")
    
    joblib.dump(pipeline, MODEL_OUT_PATH)
    print(f"Saved optimized classifier to: {MODEL_OUT_PATH}")

if __name__ == "__main__":
    main()
