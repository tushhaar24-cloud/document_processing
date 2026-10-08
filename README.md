# Document Q&A (RAG)

Ask questions about your own documents and get answers with page-level citations.

- `backend/`  – FastAPI: ingestion, retrieval, answer generation (`/api/...`)
- `frontend/` – React + TypeScript (Vite): upload, chat, citation viewer

## Backend
```
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env      # then set ANTHROPIC_API_KEY
uvicorn app.main:app --reload --port 8050
```

## Frontend
```
cd frontend
npm install
npm run dev                 # http://localhost:5173, proxies /api to :8050
```
