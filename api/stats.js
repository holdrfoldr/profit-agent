export const config = { runtime: 'edge' };

export default async function handler() {
  const stats = {
    success: true,
    agent: "MoxieVoid",
    wallet: "AcBprug92tDd5mF5Fm8EryV3fSnxPBse7C61FPxujFPe",
    inception: "2026-01-29",
    portfolio: {
      currentValue: 63.00,
      startingValue: 70.00,
      pnl: -7.00,
      pnlPercent: -10.0
    },
    performance: {
      totalTrades: 10,
      winningTrades: 6,
      losingTrades: 4,
      winRate: 60.0
    },
    transparency: {
      worstTrade: "SHARKBOY -84%",
      biggestWin: "DONALD +89%",
      failureLog: "https://profit-agent-steel.vercel.app/failures"
    },
    lastUpdated: new Date().toISOString(),
    _note: "Radical transparency: we show our losses, not just wins"
  };
  
  return new Response(JSON.stringify(stats, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
