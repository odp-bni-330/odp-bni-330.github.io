import fastapi as f, time as t, sqlite3 as s, os as o, typing as y
from starlette.requests import Request as R
from fastapi.middleware.wsgi import WSGIMiddleware as W
from pydantic import BaseModel as B
from starlette.applications import Starlette as S
from starlette.routing import Mount as M
from wsgiref.simple_server import make_server as m

z = f.FastAPI()
app = z
_q = "bad.db"

if not o.path.exists(_q):
    c = s.connect(_q)
    c.execute("CREATE TABLE inputs (id INTEGER PRIMARY KEY, data TEXT)")
    c.commit()
    c.close()

class _A(B): d: str

def _B(v=10_000_000):
    a=0
    for i in range(v):
        a+=((i%13)*(i%17)^((i%5)*(i%7)))//(i%3+1)
        for j in range(3):
            a^=(a<<j)%(i+1)
    return a

@z.post("/input")
def _C(p:_A): 
    _=min(len(p.d)*.0001,2)
    t.sleep(_)
    _B()
    with s.connect(_q) as x: x.execute("INSERT INTO inputs (data) VALUES (?)",(p.d,));x.commit()
    return {"status":"ok"}

@z.get("/")
def _D(): return {"msg": "👁️"}

if __name__=="__main__":
    n=S(routes=[M("/",z)])
    w=W(n)
    srv=m("0.0.0.0",8000,w)
    print("Serving on http://0.0.0.0:8000 (WSGI, single-threaded)")
    srv.serve_forever()
