import pandas as pd

# Load master dataset
df = pd.read_csv("datasets/processed/master_dataset.csv")

# Group by date and route
demand_df = (
    df.groupby(
        ["Sale_Date", "Route"]
    )
    .size()
    .reset_index(name="Tickets_Sold")
)

print(demand_df.head())

# Save
demand_df.to_csv(
    "datasets/processed/demand_dataset.csv",
    index=False
)

print("\nDemand dataset created successfully!")