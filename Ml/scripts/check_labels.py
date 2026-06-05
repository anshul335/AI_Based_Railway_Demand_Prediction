import pandas as pd

df = pd.read_csv("datasets/processed/ml_dataset.csv")

print(df["Demand_Label"].value_counts())
print()
print(df["Demand_Label"].value_counts(normalize=True) * 100)