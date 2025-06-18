# MellC UI React Native

A collection of reusable React Native components and theme tokens.

## Development

Use `npm link` to link this package locally while developing across multiple projects:

```bash
# In the library directory
npm run build
npm link

# In your consuming project
npm link mellc-ui-rn
```

Whenever you make changes to this library, run `npm run build` again so that the compiled files in `dist/` are updated.

## Production

When referencing this library from other projects in production, install directly from the GitHub repository:

```bash
npm install git+https://github.com/mellverse/mellc-ui-rn.git
```

## Building

The project uses TypeScript. Run the build command to generate JavaScript and type declarations into the `dist/` folder:

```bash
npm run build
```

