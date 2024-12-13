# Drop - Menu

## Next.js 15 (based on React.js 18) 
### Tailwind CSS + dnd-kit + React Hook Form + Zod

- Project prepared as part of [droplo.com](https://droplo.com/) recruitment process.
- Design based on the received [mockup](https://www.figma.com/design/iop6JTlGuNSwGtHtkyXF9x/Zadanie-rekrutacyjne?node-id=0-1&node-type=canvas&t=KROIpbpbyuRXZaEY-0) in Figma.

### Component Functionality:

- **`page.jsx`**
  > Manages the page state, handles data loading, and updates items.

- **`MenuEmpty.jsx`**
  > Displays a message when the menu is empty and provides an option to add the first item.

- **`MenuForm.jsx`**
  > A form for adding/editing menu items with validation.

- **`MenuItem.jsx`**
  > Displays a menu item with options to remove, edit, or add nested items.

- **`MenuItems.jsx`**
  > Displays a list of menu items and allows adding new ones.
  >
  > Adding new menu items is hidden on nested lists via `globals.css`.

- **`MenuWrapper.jsx`**
  > Wraps the menu list and provides drag-and-drop functionality.

- **`NestedWrapper.jsx`**
  > Displays nested menu items with indentation.
