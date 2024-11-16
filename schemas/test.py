from pydantic import BaseModel
from typing import Optional,List

class Test(BaseModel):
    item_name:str
    item_class:Optional[str] = None
    main_chip:Optional[str] = None
    deputy_chip:Optional[str] = None

class TestResponse(BaseModel):
    code:int
    data: List[Test]
    total: int

    # @validator('ORDER_DATE', pre=True, always=True)
    # def set_create_now(cls, v):
    #     return v or datetime.now()
    #
    # @validator('INCOMING_DATE', pre=True, always=True)
    # def set_create_now(cls, v):
    #     return v or datetime.now()