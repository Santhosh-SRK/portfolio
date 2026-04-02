# Santhosh Portfolio

Frontend portfolio built with React, TypeScript, MUI, Framer Motion, and Storybook.

## Live Site

`https://santhosh-srk.github.io/portfolio/`

## What This Repo Shows

- Responsive portfolio UI
- Clean React + TypeScript structure
- Recruiter-friendly project showcase
- GitHub Pages deployment
- One Storybook example for component documentation

## Architecture

The app is intentionally simple:

- `src/content`
  Holds profile, project, and experience data in one place.
- `src/components`
  Reusable UI pieces and page sections.
- `src/views`
  Composes the full portfolio page.
- `src/styles`
  Centralized theme setup.

This keeps the project easy to maintain without unnecessary abstraction.

## Why Zustand In My Project Examples

Some showcased projects mention Zustand because I have used it in real dashboard-style work.

Why it fits:

- lightweight state management
- less boilerplate than Redux for local product state
- easy to scale from simple state to modular dashboard slices
- good for real-time UI like filters, widgets, and chart controls

In short: Zustand helps keep state predictable without making the codebase heavy.

## Finance Dashboard Concept

One featured project is a personal finance dashboard idea designed with:

- salary vs savings planning
- yearly savings goal tracking
- Recharts-based analytics
- responsive card and chart layout
- Zustand-ready state flow for scalability

The goal is to show product thinking, dashboard architecture, and reusable frontend patterns.

## Run Locally

```bash
npm install
npm run dev
npm run build
npm run storybook
```

## Deployment

GitHub Actions builds the app and deploys it to GitHub Pages on every push to `main`.
