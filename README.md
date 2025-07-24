# AnimalAid Inventory

A simple, interactive React application for a local animal shelter to manage their donation inventory. It's a user-friendly tool to accurately record and track the inflow of donations.

## Table of Contents

- [App Functionality](#app-functionality)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Navigate to the Project Directory](#2-navigate-to-the-project-directory)
  - [3. Install Dependencies](#3-install-dependencies)
  - [4. Run the Application](#4-run-the-application)
- [License](#license)
- [Contact](#contact)

---

## App Functionality

The app allows shelter staff to:

- **Add new donations:** Record donor information, donation type (Money, Food, Clothing, Other), amounts/quantities, and dates.
- **View donation history:** See a comprehensive table of all donations with filtering by donation type.
- **Edit donations:** Modify existing donation records through an intuitive form interface.
- **Delete donations:** Remove donation entries as needed.
- **Track statistics:** View total donations, monetary amounts, and item quantities across different categories.
- **Filter and search:** Filter donations by type (Money, Food, Clothing, Other) for better organization.

All data is managed locally in the browser for simplicity and privacy.

---

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Create React App:** Tool for setting up React projects.

---

## Project Structure

```
animal-aid-inventory-react-app/
├── public/
│   └── index.html        # Main HTML file
├── src/
│   ├── App.js            # Main React component
│   ├── Donation.js       # Main donation management component
│   ├── DonationForm.js   # Form for adding/editing donations
│   ├── DonationList.js   # Table view of donations with filtering
│   ├── DonationStats.js  # Statistics and analytics component
│   └── index.js          # Entry point
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata & dependencies
├── package-lock.json     # Dependency versions
└── README.md             # Project documentation
```

---

## Prerequisites

- **Node.js** (LTS recommended): [Download](https://nodejs.org/)
- **Git:** [Download](https://git-scm.com/downloads)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/patelkvraj/animal-aid-inventory-react-app.git
```

### 2. Navigate to the Project Directory

```bash
cd animal-aid-inventory-react-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm start
```

- Starts the development server.
- Opens [http://localhost:3000](http://localhost:3000) in your browser.

---

## License

Licensed under the MIT License.

---

## Contact

Questions or feedback? Reach out on GitHub: [@patelkvraj](https://github.com/patelkvraj)
