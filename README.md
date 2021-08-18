# Overview

NASA Image Gallery

Front-end focused, single page app used for interacting with the NASA Image and Video of the Day Public API.

Developed in React using 17.0 various stateful and functional components and hooks where appropriate. A simple express server hosts the page at `http://localhost:3000` once bundled and server initialized.

# Table of Contents

1. Description
2. Installation
3. Usage
4. Team Members
5. License

# 1.0 Description

NASA Image Gallery was developed to showcase React development abilities for a single page app using a public API. There is always something new to learn, especially about space and beyond, and few things capture that better than the awesomeness of NASA mission images, whether they're rock samples from Mars' Perseverence or Curiosity, polar fly-bys of Jupiter by Juno, or daring dives into the Sun's heliosphere by the Parker Solar Probe.

# 2.0 Installation

1. Run `npm install` inside the project directory to install dependencies.
2. Run `npm run build` to bundle the app using Webpack (note the bundle.js file is not tracked by git).
3. Run `npm run server` to start the simple express server which hosts the app.
4. Direct your browser to `http://localhost:3000` to view the app.

# 3.0 Usage

By default, the app will display queries from a `Jupiter` search. To perform a new search, simply enter the search text into the input and click the Search button. If there are results from the endpoint which match your query they will be displayed beneath the search bar.

There are three categories available for filtering: `NASA Center`, `Year`, and `Keyword`, each with a unique list of options specific to the search query previously performed. At present you may only search by one category.

Each entry in the `list view` shows the thumbnail of the NASA Image with a title and summary date. You may `click` on the `list view` to expand into a `detail view`, which shows the image in greater detail along with additional meta data specific to the entry, including the full date, a description, and related words, among other categories.

There is an example `server delay` toggle included on the page which allows the user to simulate a server outage or delayed response. By default the delay is toggled OFF, and the delay time (in ms) is 0. If the user wishes to simulate a particular delay time, they may change the delay time to the desired value (in ms) and toggle the delay switch to ON. A simple loading gif will indicate that the request is processing, and will disappear when the request completes.

# 4.0 Developer

* [Sean Lawlor](https://github.com/lawlorseanr)

# 5.0 License

Please cite the authors of this repo where you use it.
