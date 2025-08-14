/* Start a container using `testcontainers`, but only expose one of its two ports.
 * `testcontainers` fails to realise that the container is ready.
 */

import { GenericContainer } from "testcontainers";

console.log("Starting container");

const container = await new GenericContainer("richvdh/testcontainer:1.0.2")
    .withExposedPorts(8080)
//   .withExposedPorts(8081)
    .start();

console.log("Container started");

await container.stop();

console.log("Container stopped");
