# Mock eCommerce Platform

This mock eCommerce platform utilizes the {INSERT FINAL PRODUCT NAME} API to calculate shipping, and, if local delivery is viable, creates job offers to delivery drivers.

## Development

To install dependencies, run
`npm i`

To run the app [locally](http://localhost:3000/), run
`npm run dev`

To build the environment, run
`npm run build`

## App Structure

This app follows atomic design principles, with file separation as follows:

- `/src/api` - all API calls
- `/src/components` - all page components
  - `src/components/forms` - all form content and submission logic, recommended integration with [react-hook-form](https://www.react-hook-form.com/)
  - `src/components/templates` - reusable templates for pages
- `/src/constants` - global constants, including types
- `/src/context` - global states
- `/src/hooks` - all custom hooks
- `/src/pages` - all unique pages
- `/src/styles` - global CSS and UI library theming
