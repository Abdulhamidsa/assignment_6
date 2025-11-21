# Assignment 6 — Task 5: Show One Person with Navigation

## Group Members

- Abdulhamid Mamoun Alsaati
- Amena Akhter Chowdhury
- Nadeya Nusrat Ananna
- Rumana Afrin Rumi
- Nikuntajit Roy Chowdhury
- Ziaullah Hassan

## What does this app do?

This React app searches for people (like actors or directors) using the TMDB (The Movie Database) API. It shows one person at a time and lets you move through the results using "Previous" and "Next" buttons.

## How does it work?

- When the app loads, it searches TMDB for people matching the query "spielberg".
- It shows the first person found.
- You can click "Next" or "Previous" to see other people in the results.
- If there are no results, or if there’s an error, the app will show a message.

## Main files

- `App.jsx`: Handles searching, loading, error messages, and navigation.
- `Person.jsx`: Displays details about each person.

- `ImagesFor.jsx`: Fetches and displays images of the person from TMDB.
- `KnownFor.jsx`: Shows information about movies or shows the person is known for.

## How to run

1. Install dependencies:  
   `npm install`
2. Start the app:  
   `npm run dev`
3. Open your browser to the local address shown in the terminal.

---
