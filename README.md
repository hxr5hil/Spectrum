# Spectrum • 360° AI News Monitoring & Departmental Sentiment System
### Enterprise Digital Media Intelligence & Feedback Platform

[![Python](https://img.shields.io/badge/Python-3.12-blue.svg)](https://python.org)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-black.svg)](https://nextjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC.svg)](https://tailwindcss.com)
[![Design](https://img.shields.io/badge/Design-Apple%20Design%20System-grey.svg)](https://developer.apple.com/design/)

---

## 📌 Overview

**Spectrum** is a modern 360-degree media intelligence and sentiment monitoring platform. It continuously crawls and ingests digital news and broadcast video transcripts across national and regional media, automatically classifies stories into corresponding government departments and ministries, computes sentiment polarity, and dispatches alerts whenever critical adverse coverage is flagged.

Designed with an **Apple Design System** interface featuring tonal surfaces (`#F5F5F7` Snow and `#FFFFFF` White), Charcoal text (`#1D1D1F`), Vivid Blue accents (`#0071E3`), and pill-shaped controls (`rounded-full`).

---

## 🚀 Key Features

* **Real-Time News Stream**: Pre-indexed with 3,000+ real verified news articles from India Today, Indian Express, Aaj Tak, News18, and Dainik Jagran with capitalized, readable headlines.
* **Live RSS Crawler**: One-click **"Pull Live RSS News"** button in the header fetches breaking feeds from the Press Information Bureau (PIB) and Indian Express.
* **Instant Rebuttal Generator**: Drafts official Press Information Bureau (PIB) clarification press releases responding directly to adverse coverage.
* **Escalation Hub**: Dedicated incident command center for adverse stories (`negative score >= 0.50`) with direct notification to assigned Nodal Officers.
* **Video Studio**: Transcribed video broadcast news with timestamped sentiment trajectories.
* **AI Playground**: Real-time natural language classification for any custom article headline or text.

---

## ⚡ 1-Click Launch (Google Chrome)

Double-click:
```cmd
start_all.bat
```
This automatically launches:
1. **AI Backend Server** on `http://127.0.0.1:8000`
2. **Next.js Frontend** on `http://localhost:3000`
3. Opens **Google Chrome** to `http://localhost:3000`.

---

## 🛠️ Architecture

* **Frontend**: Next.js 13.5, React 18, Tailwind CSS, Lucide Icons (Apple Design System)
* **Backend**: Python 3.12, Flask, Pandas, Scikit-Learn, Joblib
* **AI / NLP**: Multiclass TF-IDF + Logistic Classifier (`ministry_model.joblib`), Lexicon Sentiment Polarity Scorer
