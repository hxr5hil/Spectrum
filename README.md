# Spectrum: 360° Media Intelligence & Sentiment Oversight Engine

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black.svg?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.2-blue.svg?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB.svg?style=flat-square&logo=python)](https://python.org)
[![Scikit--Learn](https://img.shields.io/badge/Scikit--Learn-1.3-F7931E.svg?style=flat-square&logo=scikit-learn)](https://scikit-learn.org)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-black.svg?style=flat-square&logo=vercel)](https://vercel.com)

**Spectrum** is an autonomous, enterprise-grade media intelligence and natural language sentiment monitoring platform. It continuously crawls, indexes, and analyzes cross-platform news stories, wire feeds, and video broadcast transcripts in real time. 

Built with a high-contrast minimalist interface, an offline-first **scikit-learn NLP pipeline**, and **serverless Next.js API routes**, Spectrum automatically maps articles to sector taxonomies, quantifies sentiment polarity, and escalates critical coverage to assigned sector liaisons.

---

## 📑 Table of Contents
- [System Architecture](#-system-architecture)
- [Key Features](#-key-features)
- [Machine Learning & NLP Pipeline](#-machine-learning--nlp-pipeline)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1-Click Quick Launch](#1-click-quick-launch-windows)
  - [Manual Developer Setup](#manual-developer-setup)
- [Cloud Deployment (Vercel)](#-cloud-deployment-vercel)
- [API Reference](#-api-reference)
- [Design Specifications](#-design-specifications)

---

## 🏛️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│               Data Ingestion Pipeline                  │
│   (RSS Feeds, Digital Newspapers, Broadcast Media)     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│            Natural Language Processing Engine          │
│  ├─ TF-IDF Vectorizer (10,000 n-gram features)         │
│  ├─ Multinomial Logistic Classifier (11,583 articles)  │
│  ├─ Lexicon Sentiment Scoring (Pos / Neu / Neg)        │
│  └─ Nodal Liaison Resolution & Sector Routing          │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                 Spectrum UI & Client                   │
│  ├─ Live News Feed & Multi-facet Filter                │
│  ├─ Sector Exposure Matrix & Macro Analytics           │
│  ├─ Incident Escalation Hub (Negative Score >= 0.50)   │
│  ├─ AI Media Clarification Drafter                     │
│  ├─ Broadcast Video Studio (Whisper Transcription)     │
│  └─ Real-Time AI Inference Playground                  │
└────────────────────────────────────────────────────────┘
```

Spectrum supports two operational modes:
1. **Hybrid Mode**: A Python Flask backend running scikit-learn models on port 8000 alongside a Next.js client on port 3000.
2. **Standalone Serverless Mode**: The Next.js client uses embedded serverless routes in `src/pages/api/*` paired with a pre-indexed corpus (`articles.json`), requiring zero external runtime dependencies for instant 100% Vercel deployment.

---

## 🚀 Key Features

### 1. Live News Feed & Real-Time Discovery
* **Pre-Indexed Corpus**: Pre-loaded with 3,000+ categorized articles spanning major digital publishers.
* **Instant Keyword Search**: Zero-latency search across titles, excerpts, sector domains, and keywords.
* **Domain Taxonomies**: Instant filtering across 10 monitored sectors: *Technology, Business, Politics, Judiciary, Science, Sports, Entertainment, International, Culture, and Crime*.
* **Polarity Filtering**: One-click toggling between *All, Positive, Neutral, and Adverse* stories.
* **Live RSS Ingestion**: Dedicated *"Pull Live RSS News"* button to ingest live feeds on demand.
* **Brief Export**: Download a timestamped summary report for morning briefings.

### 2. Sector Exposure & Vulnerability Matrix
* **Aggregate Sentiment Bar**: High-contrast, multi-segment progress bar displaying global polarity ratios.
* **Risk-Ranked Exposure**: Dynamically ranks domains by their adverse-to-favorable ratio, highlighting vulnerable sectors.
* **Volume Metrics**: Real-time story counts and sentiment percentages per domain.

### 3. Incident Escalation Hub
* **Adversity Thresholds**: Automatically captures stories with an adverse sentiment score $\ge 0.50$.
* **Sector Liaison Routing**: Automatically pairs each flagged issue with its assigned lead (e.g. `tech.monitoring@spectrum.ai`, `legal.oversight@spectrum.ai`).
* **1-Click Dispatch**: Dispatches formal media alert notifications with real-time status updates.
* **Batch Escalation**: *"Dispatch All Pending"* action queues and resolves all open incidents.

### 4. AI Media Clarification Drafter (Rebuttal Studio)
* **Automated Clarifications**: Generates polite, structured, and factual clarification press statements addressing adverse or inaccurate reporting.
* **One-Click Export**: Copy directly to clipboard or dispatch to the responsible communications liaison.

### 5. Video Broadcast Studio
* **Digital Video Ingestion**: Paste any broadcast link (YouTube or MP4) for sentiment analysis.
* **Whisper AI Speech-to-Text**: Converts spoken broadcast audio into timestamped transcripts.
* **Moment-by-Moment Sentiment**: Tracks tonal shifts across specific broadcast timestamps (e.g., `00:30`, `02:45`, `05:10`).

### 6. Real-Time AI Inference Playground
* **Live Input Testing**: Test custom headlines and body copy before publication.
* **Multi-Output Assessment**: Predicts sector taxonomy, sentiment polarity, incident urgency (*Normal vs Critical*), and suggested strategic mitigation steps.
* **Pre-loaded Benchmarks**: Includes quick-load sample articles for instant evaluation.

---

## 🧠 Machine Learning & NLP Pipeline

* **Dataset**: Trained on an annotated corpus of **11,583 articles** across primary industry sectors (`models/Datasets/labelled.csv`).
* **Feature Extraction**: Sub-linear term frequency-inverse document frequency (`TfidfVectorizer`) analyzing unigrams and bigrams up to 10,000 features with English stop-word filtering.
* **Classifier**: Multinomial Logistic Regression (`C=1.0`, `solver='lbfgs'`, `max_iter=1000`) compiled into a production binary (`ministry_model.joblib`).
* **Inference Speed**: Executes inference in $<10\text{ ms}$ on standard CPUs with zero GPU dependencies.
* **Sentiment Scoring**: Lexicon-based polarity analyzer producing normalized confidence scores:
  $$\text{Score} = (\text{Positive}, \text{Negative}, \text{Neutral}), \quad \sum = 1.0$$

---

## 📂 Repository Structure

```
Spectrum/
├── backend/
│   ├── server.py                 # Flask REST API server (port 8000)
│   ├── train_classifier.py       # Scikit-learn model training script
│   ├── ministry_model.joblib     # Serialized TF-IDF + Logistic model
│   └── requirements.txt          # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Top navigation with live sync countdown
│   │   │   ├── KPICards.tsx      # Macro metric overview cards
│   │   │   ├── ArticleCard.tsx   # News card with dispatch & rebuttal triggers
│   │   │   ├── AnalyticsCharts.tsx # Macro sentiment bar & exposure matrix
│   │   │   ├── AlertsCenter.tsx  # Incident escalation command center
│   │   │   ├── VideoStudio.tsx   # Broadcast transcription player
│   │   │   ├── AITester.tsx      # Real-time AI playground
│   │   │   ├── RebuttalModal.tsx # Clarification statement drafter
│   │   │   └── SpectrumLogo.tsx  # Harmonic prism geometric vector logo
│   │   ├── data/
│   │   │   └── articles.json     # Pre-indexed standalone news database
│   │   ├── pages/
│   │   │   ├── index.tsx         # Main responsive dashboard
│   │   │   └── api/              # Serverless Next.js API endpoints
│   │   │       ├── news.ts
│   │   │       ├── metrics.ts
│   │   │       ├── alerts.ts
│   │   │       ├── analyze.ts
│   │   │       ├── rebuttal.ts
│   │   │       └── video-news.ts
│   │   └── styles/
│   │       └── globals.css       # High-contrast typography & theme tokens
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
├── models/Datasets/              # Raw training corpus (11,583 records)
├── start_all.bat                 # 1-click Windows launcher (starts both services + Chrome)
├── run_backend.bat               # Python server launcher
├── run_frontend.bat              # Next.js dev server launcher
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **Python**: `3.10` to `3.12`
* **Git** installed on your system

---

### 1-Click Quick Launch (Windows)

Simply double-click:
```cmd
start_all.bat
```
This script will:
1. Initialize the Python Flask ML backend on `http://127.0.0.1:8000`.
2. Launch the Next.js development server on `http://localhost:3000`.
3. Open your default web browser directly to the Spectrum dashboard.

---

### Manual Developer Setup

#### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
pip install flask flask-cors scikit-learn nltk pandas joblib openpyxl

# Start the Flask API server
python server.py
```
*Backend will be running at `http://127.0.0.1:8000`.*

#### 2. Frontend Setup
```bash
# In a new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start Next.js development server
npm run dev
```
*Frontend will be running at `http://localhost:3000`.*

---

## ☁️ Cloud Deployment (Vercel)

Spectrum is architected to deploy to **Vercel** with zero backend configuration needed.

### Step 1: Push Repository to GitHub
```bash
git add .
git commit -m "Update Spectrum documentation and architecture"
git push -u origin main
```

### Step 2: Import into Vercel
1. Log into [vercel.com](https://vercel.com) and click **"Add New..."** $\rightarrow$ **"Project"**.
2. Select your repository (`Spectrum`).
3. Under **Configure Project**:
   * **Framework Preset**: `Next.js`
   * **Root Directory**: Click *Edit* and select **`frontend`** *(Required)*
4. Click **Deploy**.

Within 60 seconds, your site will be live on a production `.vercel.app` domain with full serverless functionality!

---

## 📡 API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/news` | `GET` | Returns paginated news stories with filters: `category`, `sentiment`, `search`, `page`, `limit`. |
| `/api/metrics` | `GET` | Returns aggregate counts, sentiment distribution ratios, and sector exposure breakdown. |
| `/api/alerts` | `GET` | Returns active adverse incidents (`negative_score >= 0.50`). |
| `/api/alerts/dispatch` | `POST` | Dispatches incident notification to the sector's assigned nodal officer. |
| `/api/analyze` | `POST` | Accepts `{ "title": "...", "body": "..." }` and returns predicted domain, sentiment, and severity. |
| `/api/rebuttal` | `POST` | Generates a factual clarification statement responding to an adverse story. |
| `/api/video-news` | `GET` | Returns ingested broadcast video transcripts and timestamp sentiment milestones. |
| `/api/news/fetch-live` | `POST` | Queries external RSS news wires and appends fresh live stories to the feed. |

---

## 🎨 Design Specifications

* **Design Aesthetic**: Minimalist, high-contrast, content-first layout with hairline borders and rounded-full pill buttons.
* **Color Palette**:
  * Surface Background: `#F5F3F1`
  * Card Surface: `#FFFFFF`
  * Primary Text: `#000000` (Headings) / `#111111` (Body)
  * Secondary Text: `#333333`
  * Adverse / Critical: `#D91022`
  * Favorable / Positive: `#008030`
* **Typography**: Clean `Inter` font stack, scaled for readability from across the room on high-resolution widescreen monitors.

---

## 📄 License
MIT License. Open for educational, journalistic, and enterprise research purposes.
