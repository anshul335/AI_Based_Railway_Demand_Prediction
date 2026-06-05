import pandas as pd

df = pd.read_csv("datasets/processed/master_dataset.csv")

route_stats = (
    df.groupby("Route")
      .agg(
          Total_Bookings=("Route", "count"),
          Avg_Ticket_Price=("Ticket_Price", "mean"),
          Avg_Age=("Passenger_Age", "mean")
      )
      .reset_index()
)

route_stats = route_stats.sort_values(
    by="Total_Bookings",
    ascending=False
)

print(route_stats.head())

route_stats.to_csv(
    "datasets/processed/route_stats.csv",
    index=False
)