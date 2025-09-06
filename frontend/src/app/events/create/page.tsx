import { CreateEventForm } from './CreateEventForm';

export default function CreateEventPage() {
    return (
        <main className='flex justify-center items-center min-h-screen'>
            <div className='w-full max-w-lg p-8 space-y-6 bg-gray-900 rounded-xl'>
                <h1 className="text-2xl font-bold text-center text-white">
                    Create a New Event
                </h1>
                <CreateEventForm />
            </div>
        </main>
    );
}