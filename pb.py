import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': ['A0', 'A1', 'A2', 'A3'],
    'B': ['B0', 'B1', 'B2', 'B3'],
    'C': ['C0', 'C1', 'C2', 'C3'],
    'D': ['D0', 'D1', 'D2', 'D3']
}, index=[0,1,2,3])

import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': ['A0', 'A1', 'A2', 'A3'],
    'B': ['B0', 'B1', 'B2', 'B3'],
    'C': ['C0', 'C1', 'C2', 'C3'],
    'D': ['D0', 'D1', 'D2', 'D3']
}, index=[0,1,2,3])

df2 = pd.DataFrame({
    'A': ['A4', 'A5', 'A6', 'A7'],
    'B': ['B4', 'B5', 'B6', 'B7'],
    'C': ['C4', 'C5', 'C6', 'C7'],
    'D': ['D4', 'D5', 'D6', 'D7']
}, index=[4,5,6,7])

concatfil = pd.concat([df, df2], ignore_index=True)
print(concatfil)

concatcol = pd.concat([df, df2], axis=1)
print(concatcol)

IZQ = pd.DataFrame({
    'A': ['A0', 'A1', 'A2'],
    'B': ['B0', 'B1', 'B2']
}, index=['K0','K1','K2'])

DER = pd.DataFrame({
    'C': ['C0', 'C1', 'C2'],
    'D': ['D0', 'D1', 'D2']
}, index=['K0','K2','K3'])

print(IZQ.join(DER))
print(IZQ.join(DER, how='inner'))
print(IZQ.join(DER, how='left'))
print(IZQ.join(DER, how='right'))
print(IZQ.join(DER, how='outer'))