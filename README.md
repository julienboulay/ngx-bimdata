# NgxBimdata

## Install

Run `npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Known issues

- TypeDefinition : @bimdata/viewer needs the following config in tsconfig.app.json to compile

```json
"include": [
  "src/**/*.d.ts",
  "node_modules/@bimdata/viewer/**/*.d.ts"
]
```

- `$viewer: BDV.$Viewer` will not compile in VSCode, but compile with `ng serve`

- context menu in the viewer is not working