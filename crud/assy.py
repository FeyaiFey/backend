from sqlmodel import Session
from models.dbm_assyhistory import Assyhistory
from schemas.assyhistory import Assyhistory

def all_assy_history(db: Session):  # UserCreate 是前端传给后端的数据

    return