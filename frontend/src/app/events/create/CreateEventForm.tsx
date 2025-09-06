'use client'; // This directive marks it as a client component

import { useState } from "react";
import { Input } from "./Input";
import { useRouter } from 'next/navigation'; // Import the router

export function CreateEventForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // Initialize the router


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)

        // api call logic here!
        try {
            const response = await fetch('http://localhost:3000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({
                    title, 
                    description, 
                    date: new Date(date).toISOString(), // our api needs valid ISO 8601 format
                }),
            });

            if (!response.ok) {
                // if the server responds with an error, we'll throw an error
                throw new Error('Failed to create event');
            }


            const newEvent = await response.json();
            console.log('Event created successfully:', newEvent);

            // on success redirect to the homepage
            router.push('/')
            router.refresh();

        } catch (error) {
            console.error(error);
            alert('An error occured. Please try again.')
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                id="title"
                label="Event Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Input
                id="description"
                label="Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Input
                id="date"
                label="Date"
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <button
                type="submit"
                disabled={isLoading} // Disable button when loading
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
            {isLoading ? 'Creating...' : 'Create Event'}
        </button>
    </form>
    );
}