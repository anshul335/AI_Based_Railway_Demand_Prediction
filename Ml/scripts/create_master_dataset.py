import pandas as pd

# Load ticket dataset
tickets = pd.read_csv("datasets/raw/train_ticket_sales_india.csv")

# Convert date
tickets["Sale_Date"] = pd.to_datetime(tickets["Sale_Date"])

# Create route
tickets["Route"] = (
    tickets["Source_Station"] +
    "-" +
    tickets["Destination_Station"]
)

# Create date features
tickets["Year"] = tickets["Sale_Date"].dt.year
tickets["Month"] = tickets["Sale_Date"].dt.month
tickets["Day"] = tickets["Sale_Date"].dt.day
tickets["Weekday"] = tickets["Sale_Date"].dt.day_name()

# Weekend flag
tickets["Is_Weekend"] = (
    tickets["Sale_Date"].dt.weekday >= 5
).astype(int)

print(tickets.head())

# Save
tickets.to_csv(
    "datasets/processed/master_dataset.csv",
    index=False
)

print("\nMaster dataset created successfully!")