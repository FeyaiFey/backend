from sqlmodel import Session
from models.dbm_mo_histories import Assyhistory
from schemas.allMoList import Assyhistory

def all_assy_history(db: Session):  # UserCreate 是前端传给后端的数据

    return