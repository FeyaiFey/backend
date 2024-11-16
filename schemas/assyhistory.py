from datetime import date
from pydantic import BaseModel
from typing import Optional
from typing import List

class Assyhistory(BaseModel):
    ID:int
    ORDER_ID:Optional[str] = None
    WAFER_NAME:Optional[str] = None
    ITEM_NAME:Optional[str] = None
    BOUNDING:Optional[str] = None
    WAFER_LOT:Optional[str] = None
    PRINT_LOT:Optional[str] = None
    PACKAGE:Optional[str] = None
    PROCESSING:Optional[str] = None
    TEST_PROGRAM:Optional[str] = None
    WIRE:Optional[str] = None
    WAFER_QTY:Optional[str] = None
    REMARK:Optional[str] = None
    SUPPLY:Optional[str] = None
    BUSINESS_QTY:Optional[int] = None
    INCOMING_QTY:Optional[int] = None
    ORDER_DATE:Optional[date] = None
    INCOMING_DATE:Optional[date] = None

class AssyhistoryResponse(BaseModel):
    code:int
    data: List[Assyhistory]
    total:int

    # @validator('ORDER_DATE', pre=True, always=True)
    # def set_create_now(cls, v):
    #     return v or datetime.now()
    #
    # @validator('INCOMING_DATE', pre=True, always=True)
    # def set_create_now(cls, v):
    #     return v or datetime.now()