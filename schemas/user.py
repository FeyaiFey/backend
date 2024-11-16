import uuid
from pydantic import BaseModel, EmailStr
from typing import Optional,List


class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    code:Optional[int] = None

class UserLogin(BaseModel):
    email: str
    password: str


class UserRead(BaseModel):
    id: uuid.UUID
    username: str
    email: EmailStr
    role_id:int


class Token(BaseModel):
    access_token: str
    token_type: str

class LoginResponse(BaseModel):
    code:int
    data:UserRead
    tokeninfo:Token


class TokenData(BaseModel):
    username: Optional[str] = None
