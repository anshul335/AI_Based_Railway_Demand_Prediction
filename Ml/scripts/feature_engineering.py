import pandas as pd

# Load master dataset
df = pd.read_csv("datasets/processed/master_dataset.csv")

# Date conversion
df["Sale_Date"] = pd.to_datetime(df["Sale_Date"])

# Month
df["Month"] = df["Sale_Date"].dt.month

# Day of week
df["DayOfWeek"] = df["Sale_Date"].dt.dayofweek

# Weekend
df["IsWeekend"] = (df["DayOfWeek"] >= 5).astype(int)

# Age groups
df["AgeGroup"] = pd.cut(
    df["Passenger_Age"],
    bins=[0,18,35,50,100],
    labels=["Child","Young","Adult","Senior"]
)

# Load route labels
route_labels = pd.read_csv(
    "datasets/processed/route_labels.csv"
)

# Merge
df = df.merge(
    route_labels[["Route","Demand_Label"]],
    on="Route",
    how="left"
)

print(df.head())

df.to_csv(
    "datasets/processed/ml_dataset.csv",
    index=False
)

print("ML dataset created!")