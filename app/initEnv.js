import dotenv from "dotenv";
function gracefullyExit(signal) {
  console.log("recieved the sigterm!" + signal);
  process.exit(0);
}
process.on("SIGABRT", () => gracefullyExit("SIGABRT"));
process.on("SIGTERM", () => {
  gracefullyExit("SIGTERM");
  process.kill(process.pid);
});
process.on("SIGINT", () => gracefullyExit("SIGINT"));

process.on('beforeExit', (code) => {
  console.log(`Process is about to exit with code: ${code}`);
});

process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  // Optionally, you might want to gracefully handle the error and exit
  process.exit(1);
});


dotenv.config();
export {};
