---
name: file_editing_methods
description: Methods for editing existing HTML files in this project
type: reference
---

# File Editing Methods - Kivu Raha Hotel Project

## The WORKING Method for Template Files

When editing existing dashboard HTML files (like jacuzzi.html, event-hall.html, conference-room.html), use this 8-step approach:

### Steps to Update an Existing Dashboard:

1. **Read the file first** - Must read before editing (required by Edit tool)
2. **Update metadata** - Edit meta description, og:title, og:description
3. **Update page title** - Edit `<title>...</title>`
4. **Update header** - Edit `dashboard_bar` div content
5. **Update copyright** - Edit sidebar copyright text
6. **Find the container-fluid section** - Use Grep to find: `<div class="container-fluid">`
7. **Replace dashboard content** - Replace empty container section with new dashboard HTML
8. **Fix sidebar link** - Update index.html to point to correct file

### Code Example - Steps 2-5 (Metadata & Title):

```javascript
// Step 2: Update meta tags
Edit({
  file_path: "admin/xhtml/FILE.html",
  old_string: '<meta name="description" content="Kivu Raha Hotel - Night Club Dashboard..." />',
  new_string: '<meta name="description" content="Kivu Raha Hotel - NEW Dashboard. Manage..." />'
})

// Step 3: Update title
Edit({
  file_path: "admin/xhtml/FILE.html",
  old_string: "<title>Kivu Raha Hotel - Night Club Dashboard</title>",
  new_string: "<title>Kivu Raha Hotel - NEW Dashboard</title>"
})

// Step 4: Update header
Edit({
  file_path: "admin/xhtml/FILE.html",
  old_string: '<div class="dashboard_bar">Restaurant Dashboard</div>',
  new_string: '<div class="dashboard_bar">NEW Dashboard</div>'
})

// Step 5: Update copyright
Edit({
  file_path: "admin/xhtml/FILE.html",
  old_string: '<p class="text-center"><strong>Kivu Raha Hotel - Restaurant Dashboard</strong> ...</p>',
  new_string: '<p class="text-center"><strong>Kivu Raha Hotel - NEW Dashboard</strong> ...</p>'
})
```

### Code Example - Step 7 (Dashboard Content):

```javascript
// Find the container-fluid section first using Grep
// Then replace the empty section:
Edit({
  file_path: "admin/xhtml/FILE.html",
  old_string: '<div class="container-fluid">\n\n\t\t\t<!-- END DASHBOARD -->\n\t\t</div>',
  new_string: '<div class="container-fluid">\n\t\t[NEW DASHBOARD HTML CONTENT]\n\t\t</div>'
})
```

### Code Example - Step 8 (Sidebar Link):

```javascript
Edit({
  file_path: "admin/xhtml/index.html",
  old_string: "<li><a href=\"concierge-list.html\">Page Name</a></li>",
  new_string: "<li><a href=\"FILE.html\">Page Name</a></li>"
})
```

---

## Key Patterns Used:

### Stats Cards (4 columns):
```html
<div class="row">
  <div class="col-xl-3 col-sm-6">
    <div class="card booking">
      <div class="card-body">
        <div class="booking-status d-flex align-items-center">
          <span>[SVG ICON]</span>
          <div class="ms-4">
            <h2 class="mb-0 font-w600">VALUE</h2>
            <p class="mb-0 text-nowrap">LABEL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Two-Column Section:
```html
<div class="row mt-4">
  <div class="col-xl-6 col-lg-12">
    <!-- LEFT: Status/Rooms Card -->
  </div>
  <div class="col-xl-6 col-lg-12">
    <!-- RIGHT: Packages/Items Card -->
  </div>
</div>
```

### Full-Width Section with Tabs:
```html
<div class="row mt-4">
  <div class="col-xl-12">
    <div class="card">
      <div class="card-header border-0 flex-wrap">
        <h4 class="fs-20">Section Title</h4>
        <div class="card-action">
          <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#tabToday">Today</a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tabTomorrow">Tomorrow</a></li>
          </ul>
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="tabToday" role="tabpanel">
            <!-- Content for Today -->
          </div>
          <div class="tab-pane fade" id="tabTomorrow" role="tabpanel">
            <!-- Content for Tomorrow -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Staff/Guest List Item:
```html
<div class="d-flex align-items-center p-3 border-bottom">
  <div class="img_cont">
    <img src="images/avatar/1.jpg" class="rounded-circle user_img" alt="" style="width:45px; height:45px;">
    <span class="online_icon"></span>
  </div>
  <div class="user_info ms-3">
    <h6 class="mb-0">Name</h6>
    <p class="mb-0 fs-12 text-muted">Role/Description</p>
  </div>
  <span class="badge bg-success ms-auto">Status</span>
</div>
```

### Card with Badge (for session/event cards):
```html
<div class="card border p-3 text-center mb-3 pb-3">
  <h6 class="mb-1">Title</h6>
  <span class="fs-14 font-w600 text-color">Subtitle</span>
  <span class="fs-12 text-muted mb-2 d-block">Time</span>
  <span class="badge bg-color mb-2">Status</span>
</div>
```

---

## Files Created/Updated in 2026-05-08 Session:

| Dashboard | File | Status |
|-----------|------|--------|
| Jacuzzi | jacuzzi.html | ✅ Complete |
| Salle de Fête (Event Hall) | event-hall.html | ✅ Complete |
| Salle de Conférence (Conference Room) | conference-room.html | ✅ Complete |

### Sidebar Links Fixed:
- jacuzzi.html ← jacuzzi.html
- Salle de fête ← event-hall.html
- Salle de conférence ← conference-room.html