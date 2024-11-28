from sqlmodel import Session, text
from fastapi import Depends
from database.base import get_session


def get_panel_data(session: Session = Depends(get_session)):
    sql = text("""
        WITH MonthlyData AS (
        SELECT *,(price * business_qty) AS amount,
        CASE
          WHEN (order_date >= DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0) AND order_date < DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0)) THEN 'LastMonth'
          WHEN (order_date >= DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) AND order_date < DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)) THEN 'ThisMonth'
          ELSE 'Other'
        END AS 'MONTH'
        FROM XXF_VIEW_PO_ALL
        WHERE (order_date >= DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0) AND order_date < DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)) AND (item_code LIKE N'CL-%-WF'))
        SELECT [MONTH], SUM(business_qty) AS qty,CAST(SUM(amount) AS NUMERIC(10, 2) ) AS amount,CAST(SUM(amount) /SUM(business_qty) AS NUMERIC(10, 2)) AS price
        FROM MonthlyData
        GROUP BY [MONTH]
    """)
    try:
        result = session.exec(sql).all()
        return result
    except:
        return None

def get_echarts_data(session: Session = Depends(get_session)):
    sql = text("""
    
    """)