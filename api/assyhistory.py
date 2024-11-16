from fastapi import APIRouter, Depends,Query
from schemas.assyhistory import AssyhistoryResponse
from sqlmodel import Session, select
from database.base import get_session
from models.dbm_user import User
from models.dbm_assyhistory import Assyhistory
from api.users import get_current_user
from typing import Optional
from datetime import datetime

router = APIRouter()


@router.get("/",response_model=AssyhistoryResponse)
def read_assyhistory(wafer_name: Optional[str] = Query(None),
                     item_name: Optional[str] = Query(None),
                     wafer_lot: Optional[str] = Query(None),
                     print_lot: Optional[str] = Query(None),
                     package: Optional[str] = Query(None),
                     supply: Optional[str] = Query(None),
                     order_date_start: Optional[datetime] = Query(None),
                     order_date_end: Optional[datetime] = Query(None),
                     page: int = Query(1, ge=1),
                     page_size: int = Query(15, ge=1),
                     session: Session = Depends(get_session),
                     current_user:User = Depends(get_current_user)):
    query = select(Assyhistory)
    if wafer_name:
        query = query.where(Assyhistory.WAFER_NAME.contains(wafer_name.upper()))  # 模糊匹配用户名
    if item_name:
        query = query.where(Assyhistory.ITEM_NAME.contains(item_name.upper()))
    if wafer_lot:
        query = query.where(Assyhistory.WAFER_LOT.contains(wafer_lot.upper()))
    if print_lot:
        query = query.where(Assyhistory.PRINT_LOT.contains(print_lot.upper()))
    if package:
        query = query.where(Assyhistory.PACKAGE.contains(package.upper()))
    if supply:
        query = query.where(Assyhistory.SUPPLY.contains(supply))
    if order_date_start:
        query = query.where(Assyhistory.ORDER_DATE >= order_date_start)
    if order_date_end:
        query = query.where(Assyhistory.ORDER_DATE <= order_date_end)

    query = query.order_by(Assyhistory.ID)

    total = len(session.exec(query).all())

    # 分页
    query = query.offset(page_size * (page - 1)).limit(page_size)

    results = session.exec(query).all()

    return {"code":0,"data":results,"total":total}
