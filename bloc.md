# What is bloc

block is a state management library that helps to manage state globally in flutter app.

## Cubit

`Cubit` is a class that extends `BlocBase` and can be extended to manage any type of state.

```
    UI <-------> Cubit <-------> Data
```

`cubic` can expose functions which can be invoked to trigger `state` changes.
