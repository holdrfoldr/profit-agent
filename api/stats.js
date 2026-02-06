export const config = { runtime: 'edge' };

export default async function handler() {
  const stats = {
    success: true,
    agent: "MoxieVoid",
    wallet: "AcBprug92tDd5mF5Fm8EryV3fSnxPBse7C61FPxujFPe",
    inception: "2026-01-29",
    portfolio: {
      currentValue: 63.02,
      startingValue: 25.00,
      pnl: 38.02,
      pnlPercent: 152.08
    },
    performance: {
      totalTrades: 10,
      winningTrades: 6,
      losingTrades: 4,
      winRate: 60.0
    },
    lastUpdated: new Date().toISOString(),
    _note: "The agent that earns, not spends"
  };
  
  return new Response(JSON.stringify(stats, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
