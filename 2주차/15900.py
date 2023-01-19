import sys
from collections import deque
input = sys.stdin.readline

N = int(input())

graph = [[] for _ in range(N+1)]
for _ in range(N-1):
    a,b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

depth = [-1]*(N+1)
total = depth[1] = 0
queue = deque([1])
while queue:
    cur = queue.popleft()
    if len(graph[cur])==1 and cur!=1:
        total += depth[cur]
        continue
    for e in graph[cur]:
        if depth[e]==-1:
            depth[e] = depth[cur]+1
            queue.append(e)

print("Yes" if total%2 else "No")