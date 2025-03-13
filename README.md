Module Federaion:
Multiple separate builds should form a single application. These separate builds act like containers and can expose and consume code among themselves, creating a single, unified application.

Local modules are regular modules that are part of the current build. Remote modules are modules that are not part of the current build but are loaded at runtime from a remote container.

This is Local Module, runs in port 8080
npm i and npm run start to checkout out how module federation helps in sharing module across applications

Run the remote module before you run this
