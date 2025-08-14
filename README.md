This repository contains a demonstration of https://github.com/testcontainers/testcontainers-node/issues/1108.

To reproduce the bug, [configure testcontainers to use Podman](https://podman-desktop.io/tutorial/testcontainers-with-podman), then:

1. Clone this repo
2. `npm install`
3. `npm run start`

The *expected* output is:

```
Starting container
Container started
Container stopped
```

However, due to https://github.com/testcontainers/testcontainers-node/issues/1108, the command hangs and eventually times out while starting the container.
