---
name: session_startup
description: Session startup context for Kivu Raha Hotel project
type: reference
---

# Kivu Raha Hotel Project - Session Context

## Project Overview

This is the Kivu Raha Hotel website project - a hospitality website for a luxury hotel in DRC Congo (Goma, North Kivu). The project includes both the main hotel website and a comprehensive admin dashboard.

## Key Files

- **Main Website**: `/` (root directory)
- **Admin Dashboard**: `/admin/xhtml/`
- **Design System**: `design.md`
- **Changelog**: `CHANGELOG.md`
- **Memory**: `memory/session-startup.md`

## Current Work (as of 2026-05-08)

Recent updates include:
- Admin dashboard with dark/light theme toggle
- Bar & Restaurant pages
- Custom design system with gold/teal branding
- Location: Goma, DRC Congo

## Service Dashboards Created

All dashboards follow a consistent pattern with:
- Stats cards (4 columns)
- Two-column sections with room status + popular items
- Full-width sections for upcoming appointments/classes
- Staff lists + client/member history
- Two-tab system (Today/Tomorrow)
- Padding fix: `pb-3` on cards, `mb-2` on badges

| Dashboard | File | Key Features |
|-----------|------|---------------|
| Restaurant | restaurant.html | Tables, orders, popular items |
| Night Club | night-club.html | VIP booths, drinks, DJ schedule, events |
| Sauna | sauna.html | Rooms, packages, sessions, staff |
| Gym | gym.html | Equipment, memberships, classes, training |
| Spa | spa.html | Treatment rooms, appointments, therapists |
| Jacuzzi | jacuzzi.html | Coming next... |

## Brand Identity

- **Hotel Name**: Kivu Raha Hotel
- **Primary Color**: Gold (#CBA36B)
- **Secondary Color**: Deep Teal (#135846)
- **Location**: Goma, North Kivu, DRC Congo

## Admin Panel Features

- Dark/Light theme toggle (persists in localStorage)
- Guest management
- Room management
- Concierge services
- Reviews
- Restaurant & Bar pages
- Hotel management dashboard

## How to Resume Work

1. Check git status: `git status`
2. Review recent commits: `git log --oneline -10`
3. Check CHANGELOG.md for recent changes
4. Review design.md for design system details

## Padding Fix Pattern

All dashboard cards with prices/status badges use this pattern:
- Card: `class="card border p-3 text-center mb-3 pb-3"`
- Badge (last element): `class="badge bg-xxx mb-2"`

This prevents content from touching the card border.