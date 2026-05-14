# kani-lunch - Echizen Crab Lunch Map

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An interactive web map that shows restaurants in Fukui Prefecture, Japan, where you can eat Echizen crab (越前がに), a local winter delicacy.

## Demo

**Live Demo:** https://code4fukui.github.io/kani-lunch/

## Features

- **Interactive Map:** Displays restaurant locations with clickable pins.
- **Detailed Information:** View restaurant details including:
  - Name, address, and phone number
  - Business hours and closing days
  - Crab menu items and prices
  - Seating capacity and bus parking availability

## How It Works

This is a zero-backend, static web application. It uses the [`csv-map`](https://github.com/code4fukui/csv-map) web component to parse restaurant data directly from the `kani-lunch-echizen.csv` file and render it on an interactive map.

## Usage

No installation is required. Simply visit the demo page in any modern web browser.

To run locally, clone this repository and open `index.html` in your browser.

## Data Source

The restaurant data is sourced from the [Fukui Prefecture Tourism Data Analysis System "FTAS"](https://www.fuku-e.com/feature/detail_266.html).

## License

MIT License — see [LICENSE](LICENSE).