export const config = { runtime: 'edge' };

export default async function handler() {
  const stats = {
    success: true,
    agent: "MoxieVoid",
    wallet: "AcBprug92tDd5mF5Fm8EryV3fSnxPBse7C61FPxujFPe",
    inception: "2026-01-29",
    portfolio: {
      currentValue: 45.32,
      startingValue: 25.00,
      pnl: 20.32,
      pnlPercent: 81.28
    },
    performance: {
      totalTrades: 8,
      winningTrades: 5,
      losingTrades: 3,
      winRate: 62.5
    },
    lastUpdated: new Date().toISOString(),
    _note: "The agent that earns, not spends"
  };
  
  return new Response(JSON.stringify(stats, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
