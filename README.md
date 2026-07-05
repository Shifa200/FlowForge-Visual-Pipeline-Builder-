![Preview](./screenshots/homepage.png)

# Visual Pipeline Builder

Drag-and-drop workflow automation tool — build node pipelines on a canvas,
validate the graph structure on the backend, and get instant DAG feedback.

**🔗 Live demo:** https://vectorshift-flow-builder.vercel.app
**⚙️ Backend:** FastAPI on Render *(free tier — first request may take ~30s to wake)*


## Highlights
- **BaseNode abstraction** — one reusable node component powers every node type
  (Input, Output, API, Math, Filter, Delay, LLM…); adding a new node type takes
  a config object, not new component code (~70% less per-node code)
- **Smart Text node** — auto-resizes with input and live-parses `{{ variable }}`
  expressions with regex to generate connection handles in real time
- **DAG validation** — DFS-based cycle detection on the FastAPI backend; submit
  returns node/edge counts and whether the pipeline is a valid DAG
- **State management** — Zustand store for nodes/edges, keeping React Flow
  re-renders minimal

## Tech stack
React · React Flow · Zustand · FastAPI · deployed on Vercel + Render (CORS-configured)

## Run locally

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
uvicorn main:app --reload
```
---
