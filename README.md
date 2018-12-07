# @chrisrzhou/ui

Simple progressive design system and documentation for personal projects.

## Philosophy

- **✌️ Simple**: Less is better. Simple to maintain, compose and evolve.
- **👍 Intuitive**: UI and animations should provide intuitive feedback to users.
- **👉 Progressive**: Favor rapid progressive development over features.

## Design System

- Colors
- Typography
- Iconography
- Animations
- React components

## Main Dependencies

- `octicons`
- `react`
- `react-spring`
- `rebass`
- `styled-components`
- `typography`

## Development

Components are progressively documented in markdown (`mdx`) format using `docz`.

To run the documented examples:

```bash
yarn add @chrisrzhou/ui
cd ui
yarn
yarn dev
```

## TODO

- `Popover` (tooltip with any content)
- `Progress` (line/donut with color)
- `Modal`
- `Drawer` (like modal)
- `Notification`
- `Collapse`
- `Badge`
- `Hug`
- `Anchor`
- `Provider`
- `Banner`
- `Timeline`
- `Carousel`
- `Breadcrumb`
- `Checkbox`
- `FormField` (uses `Input`, `Label`, similar to `FormRow`)
- `Form` (uses `FormField`)
- `Input` (number, string, email, password, textarea, validation)
- `Label`
- `Rate`
- `Radio`
- `Select`
- `Slider`
- `TabSet`
- `Toggle`
- `ButtonSet`
- `DatePicker`
- `ColorPicker`
- Add documentation for `css.js`.
- Group components (data, input, display, navigation etc)
- Pass all rebass props down (other props)
