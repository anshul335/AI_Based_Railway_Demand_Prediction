import pandas as pd

route_stats = pd.read_csv("datasets/processed/route_stats.csv")

# Top 30% routes -> High
# Middle 40% -> Medium
# Bottom 30% -> Low

high_cutoff = route_stats["Total_Bookings"].quantile(0.70)
low_cutoff = route_stats["Total_Bookings"].quantile(0.30)

def label_route(bookings):
    if bookings >= high_cutoff:
        return "High"
    elif bookings <= low_cutoff:
        return "Low"
    else:
        return "Medium"

route_stats["Demand_Label"] = route_stats["Total_Bookings"].apply(label_route)

print(route_stats.head())

route_stats.to_csv(
    "datasets/processed/route_labels.csv",
    index=False
)

print("Route labels created!")