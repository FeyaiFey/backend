from sqlmodel import SQLModel, Field
from datetime import date

class Assyhistory(SQLModel, table=True):
    __tablename__ = 'HSUN_XXF_ASSY_HISTORY_BEFORE2024'
    ID:int = Field(default=None, primary_key=True)
    ORDER_ID:str
    WAFER_NAME:str
    ITEM_NAME:str
    BOUNDING:str
    WAFER_LOT:str
    PRINT_LOT:str
    PACKAGE:str
    PROCESSING:str
    TEST_PROGRAM:str
    WIRE:str
    WAFER_QTY:str
    REMARK:str
    SUPPLY:str
    BUSINESS_QTY:int
    INCOMING_QTY:int
    ORDER_DATE:date
    INCOMING_DATE:date