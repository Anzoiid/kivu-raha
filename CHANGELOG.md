# Changelog - Kivu Raha Hotel Website

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Admin Dashboard** (`admin/xhtml/index.html`): Complete admin panel with dark/light mode toggle
- **Design System** (`design.md`): Comprehensive design system document with color palette, typography, spacing, and component guidelines
- **Bar & Restaurant Page** (`admin/xhtml/bar-restaurant.html`): New page for bar and restaurant services
- **Restaurant Page** (`admin/xhtml/restaurant.html`): Dedicated restaurant page
- **Drinks Gallery** (`admin/xhtml/images/drinks/`): Image gallery for drinks/beverages
- **Hotel Management Pages**: Guest list, room list, concierge, reviews, and other hotel management pages
- **Dark/Light Theme Toggle**: Fully implemented theme switching with localStorage persistence
- **Night Club Dashboard** (`admin/xhtml/night-club.html`): VIP guests, booths, drinks, DJ schedule, events, security
- **Sauna Dashboard** (`admin/xhtml/sauna.html`): Sessions, rooms, packages, staff, guest history
- **Gym Dashboard** (`admin/xhtml/gym.html`): Equipment status, memberships, classes, personal training, check-ins
- **Spa Dashboard** (`admin/xhtml/spa.html`): Treatment rooms, popular treatments, appointments, therapists
- **Jacuzzi Dashboard** (`admin/xhtml/jacuzzi.html`): Sessions, tubs status, packages, staff, guest history
- **Salle de Fête (Event Hall) Dashboard** (`admin/xhtml/event-hall.html`): Events, hall status, packages, coordinators, bookings
- **Salle de Conférence (Conference Room) Dashboard** (`admin/xhtml/conference-room.html`): Meetings, room status, packages, AV staff, bookings
- **Sidebar Links Updated**: All new dashboard pages linked from admin index

### Changed
- **Branding**: Replaced all "Travl" references with "Kivu Raha" across admin HTML files
- **Location**: Updated to DRC Congo (previously generic location)
- **Meta Descriptions**: Updated to realistic hotel content for SEO
- **Theme Colors**: Implemented custom gold accent (`#CBA36B`) against deep teal/navy backgrounds
- **Dark Mode**: Fixed background color switching issues, proper contrast maintained

### Fixed
- Dark mode background color switching issue
- Theme persistence via localStorage

---

## [1.0.0] - 2026-05-02

### Added
- Initial release as Kivu Raha Hotel (rebranded from Solinom template)
- Admin panel with hospitality-specific features
- .nojekyll for GitHub Pages compatibility
- Removed "Template" from page titles

### Changed
- Hotel name: Solinom → Kivu Raha Hotel
- Meta descriptions updated for Kivu Raha brand
- Location set to DRC Congo

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2026-05-02 | Initial release, rebranded from Solinom |
| 1.1.0 | 2026-05-08 | Admin dashboard, dark/light mode, new pages |
| 1.2.0 | 2026-05-08 | Jacuzzi, Event Hall, Conference Room dashboards |

---

## Notes

- Project uses Roboto, Poppins, Nunito, and Cairo fonts from Google Fonts
- Primary brand color: Gold (#CBA36B)
- Secondary color: Deep Teal (#135846)
- Admin panel located at: `/admin/xhtml/`
- Design system documented in `design.md`