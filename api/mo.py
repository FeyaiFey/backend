from fastapi import APIRouter, Depends, Query, HTTPException
from schemas.allMoList import Allpackagelistsresponse,Allbomresponse
from sqlmodel import Session, select
from database.base import get_session
from models.dbm_user import User
from models.dbm_mo_histories import AllPackageLists,AllBomLists
from api.users import get_current_user
from typing import Optional
from datetime import datetime

router = APIRouter()


@router.get("/package",response_model=Allpackagelistsresponse)
def read_package_list(item_name: Optional[str] = Query(None),
                     package: Optional[str] = Query(None),
                     bonding: Optional[str] = Query(None),
                     lot_code: Optional[str] = Query(None),
                     supply: Optional[str] = Query(None),
                     order_date_start: Optional[datetime] = Query(None),
                     order_date_end: Optional[datetime] = Query(None),
                     page: int = Query(1, ge=1),
                     page_size: int = Query(15, ge=1),
                     session: Session = Depends(get_session),
                     current_user:User = Depends(get_current_user)):
    query = select(AllPackageLists)
    if item_name:
        query = query.where(AllPackageLists.item_name.contains(item_name.upper()))  # 模糊匹配用户名
    if package:
        query = query.where(AllPackageLists.package.contains(package.upper()))
    if bonding:
        query = query.where(AllPackageLists.bonding.contains(bonding.upper()))
    if lot_code:
        query = query.where(AllPackageLists.lot_code.contains(lot_code.upper()))
    if supply:
        query = query.where(AllPackageLists.supply.contains(supply))
    if order_date_start:
        query = query.where(AllPackageLists.order_date >= order_date_start)
    if order_date_end:
        query = query.where(AllPackageLists.order_date <= order_date_end)

    query = query.order_by(AllPackageLists.order_date)

    total = len(session.exec(query).all())

    # 分页
    query = query.offset(page_size * (page - 1)).limit(page_size)

    results = session.exec(query).all()

    return {"code":0,"data":results,"total":total}

@router.get("/package/bom",response_model=Allbomresponse)
def read_package_bom(order_id: Optional[str] = Query(None),
                     session: Session = Depends(get_session),
                     current_user:User = Depends(get_current_user)):
    try:
        query = select(AllBomLists)
        if order_id:
            query = query.where(AllBomLists.order_id == order_id).order_by(AllBomLists.main_chip)
        results = session.exec(query).all()
        return {"code":0,"data":results}
    except Exception as e:
        raise HTTPException(status_code=404,detail=str(e))