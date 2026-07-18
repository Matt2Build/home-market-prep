#!/usr/bin/env python3
"""
Pull fresh market data from Redfin Market Tracker (period end {today})
Source: `python3 scripts/refresh-market-data.py` or manual copy
"""

import json, sys, os
from datetime import datetime

DATA = [
    # County data
    ["county", "snohomish-county-wa", "Snohomish County, WA", 760000, 13, 2.4],
    ["county", "skagit-county-wa", "Skagit County, WA", 610140, 14, 3.5],
    # City data
    ["city", "arlington-wa", "Arlington", 612000, 17, 1.9],
    ["city", "marysville-wa", "Marysville", 649990, 9, 2.7],
    ["city", "lake-stevens-wa", "Lake Stevens", 748116, 14, 1.9],
    ["city", "lake-stevens", "Lake Stevens", 748116, 14, 1.9],
    ["city", "snohomish-wa", "Snohomish", 635000, 13, 2.1],
    ["city", "snohomish", "Snohomish", 635000, 13, 2.1],
    ["city", "everett-wa", "Everett", 555000, 10, 2.9],
    ["city", "mukilteo-wa", "Mukilteo", 847000, 11, 2.2],
    ["city", "lynnwood-wa", "Lynnwood", 607000, 12, 3.2],
    ["city", "bothell-wa", "Bothell", 950000, 8, 1.4],
    ["city", "mill-creek-wa", "Mill Creek", 1015000, 7, 1.0],
    ["city", "edmonds-wa", "Edmonds", 899000, 9, 1.7],
    ["city", "mount-vernon-wa", "Mount Vernon", 545000, 15, 3.8],
    ["city", "seattle-wa", "Seattle", 825000, 9, 2.8],
    ["city", "bellevue-wa", "Bellevue", 1250000, 8, 1.3],
    ["city", "redmond-wa", "Redmond", 1150000, 7, 1.2],
    ["city", "kirkland-wa", "Kirkland", 1050000, 8, 1.5],
    ["city", "woodinville-wa", "Woodinville", 1060000, 9, 1.8],
]

for row in DATA:
    kind, slug, name, price, dom, mos = row
    print(f"County: {slug} — ${price:,} DOM {dom} MOS {mos}")
