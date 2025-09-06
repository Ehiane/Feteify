// Event type definition
type Event = {
  id: string;
  title: string;
  description: string|null;
  date: string;
};

// fetches data from the backend API
async function getEvents () : Promise<Event[]> {
  const res = await fetch('http://localhost:3000/events', {cache: 'no-store'});

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  return res.json();
}


export default async function HomePage() {

  const events = await getEvents();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Feteify Events</h1>
      <div>
        {events.map((event) => (
          <div key={event.id} className="p-4 mb-2 border rounded-md">
            <h2 className="font-semibold">{event.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
