import { Pool } from "pg";

declare global {
  var wealthRisePool: Pool | undefined;
}

function getConnectionString() {
  const connectionString = process.env.DATABASE_URL?.trim();

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  try {
    const url = new URL(connectionString);

    // Silence pg's sslmode warning while preserving the same Neon connection behavior.
    if (url.searchParams.get("sslmode") === "require" && !url.searchParams.has("uselibpqcompat")) {
      url.searchParams.set("uselibpqcompat", "true");
    }

    return url.toString();
  } catch {
    return connectionString;
  }
}

export function getPool() {
  if (!globalThis.wealthRisePool) {
    globalThis.wealthRisePool = new Pool({
      connectionString: getConnectionString(),
      max: 10,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return globalThis.wealthRisePool;
}
