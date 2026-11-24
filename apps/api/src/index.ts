import { app } from './app.js';

const PORT = parseInt(process.env.PORT || '4000', 10);

const server = app.listen(PORT, () => {
  console.log(`[API] Server initialized and listening on http://localhost:${PORT}`);
  console.log(`[API] Health check available at http://localhost:${PORT}/api/v1/health`);
});

// Graceful termination handling
const handleShutdown = (signal: string) => {
  console.log(`[API] Received ${signal}. Closing HTTP server...`);
  server.close(() => {
    console.log('[API] HTTP server closed gracefully.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
