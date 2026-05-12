from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


class Pipeline(BaseModel):
    nodes: list
    edges: list


def is_dag(nodes, edges):
    graph = {}

    # Step 1: create empty list for every node
    for node in nodes:
        graph[node["id"]] = []

    # Step 2: add connections
    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)

    visited = set()
    path = set()

    def has_cycle(node):
        if node in path:
            return True

        if node in visited:
            return False

        visited.add(node)
        path.add(node)

        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True

        path.remove(node)
        return False

    for node_id in graph:
        if has_cycle(node_id):
            return False

    return True


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(pipeline.nodes, pipeline.edges),
    }