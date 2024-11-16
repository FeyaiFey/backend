"""
配置文件
"""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    ENV: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    DATABASE_URL: str

    class Config:
        env_file = ".env"

settings = Settings()
