


export async function GET() {
    return new Response(
      JSON.stringify({
        rooms: {
          room1: { temperature: 22, humidity: 45 },
          room2: { temperature: 24, humidity: 50 },
          room3: { temperature: 21, humidity: 40 },
        },
        water: { temperature: 18, ph: 7.2 },
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  }