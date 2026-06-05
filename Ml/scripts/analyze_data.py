import pandas as pd

df = pd.read_csv("datasets/processed/master_dataset.csv")

print("Total Rows:", len(df))
print("Unique Dates:", df["Sale_Date"].nunique())
print("Unique Routes:", df["Route"].nunique())

print("\nTop 10 Routes:")
print(df["Route"].value_counts().head(10))

print("\nBookings per Date:")
print(df["Sale_Date"].value_counts().head(10))