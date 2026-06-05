import pandas as pd
import os

print("=" * 50)
print("TICKET DATASET")
print("=" * 50)

tickets = pd.read_csv("datasets/raw/train_ticket_sales_india.csv")

print("Shape:", tickets.shape)
print("Columns:")
print(tickets.columns.tolist())

print("\nFirst 5 rows:")
print(tickets.head())

print("\n")

print("=" * 50)
print("FESTIVAL DATASET")
print("=" * 50)

festivals = pd.read_csv("datasets/raw/festivals_kaggle.csv")

print("Shape:", festivals.shape)
print("Columns:")
print(festivals.columns.tolist())

print("\nFirst 5 rows:")
print(festivals.head())

print("\n")

print("=" * 50)
print("WEATHER DATASETS")
print("=" * 50)

weather_folder = "datasets/raw/weather"

for file in os.listdir(weather_folder):
    if file.endswith(".csv"):
        path = os.path.join(weather_folder, file)

        df = pd.read_csv(path)

        print(f"\nFILE: {file}")
        print("Shape:", df.shape)
        print("Columns:")
        print(df.columns.tolist())
        print("-" * 30)