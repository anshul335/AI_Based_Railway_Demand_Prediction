import pandas as pd

# Load dataset
df = pd.read_csv("datasets/combined/final_Combined.csv")

print("Original Shape:", df.shape)

# =========================
# 1. Remove duplicate rows
# =========================
duplicates = df.duplicated().sum()
print("Duplicates Found:", duplicates)

df = df.drop_duplicates()

# =========================
# 2. Handle Missing Values
# =========================
print("\nMissing Values:")
print(df.isnull().sum())

# Drop rows where target is missing
df = df.dropna(subset=["Demand_Label"])

# Fill missing numerical columns
numerical_cols = [
    "Passenger_Age",
    "Ticket_Price"
]

for col in numerical_cols:
    if col in df.columns:
        df[col] = df[col].fillna(df[col].median())

# Fill missing categorical columns
categorical_cols = [
    "Coach_Type",
    "Route",
    "AgeGroup"
]

for col in categorical_cols:
    if col in df.columns:
        df[col] = df[col].fillna(df[col].mode()[0])

# =========================
# 3. Remove Invalid Ages
# =========================
if "Passenger_Age" in df.columns:
    df = df[
        (df["Passenger_Age"] >= 0) &
        (df["Passenger_Age"] <= 100)
    ]

# =========================
# 4. Remove Invalid Prices
# =========================
if "Ticket_Price" in df.columns:
    df = df[df["Ticket_Price"] > 0]

# =========================
# 5. Standardize Text Columns
# =========================
text_cols = [
    "Coach_Type",
    "Route",
    "Demand_Label",
    "AgeGroup"
]

for col in text_cols:
    if col in df.columns:
        df[col] = (
            df[col]
            .astype(str)
            .str.strip()
        )

# =========================
# 6. Reset Index
# =========================
df = df.reset_index(drop=True)

print("\nCleaned Shape:", df.shape)

# =========================
# Save Cleaned Dataset
# =========================
df.to_csv(
    "datasets/cleaned/cleaned_final_Combined.csv",
    index=False
)

print("\nDataset cleaned successfully!")