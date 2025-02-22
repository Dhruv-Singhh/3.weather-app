import Dashboard from "./../Dashboard"
import { fireEvent, getByPlaceholderText, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { weatherAPIResponse } from "../__mocks__/Dashboard";

global.fetch = jest.fn();

describe("Testing the mock service calls", () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test("Test to check the weather API", async () => {
        
        // Mock IP API
        fetch.mockResolvedValueOnce({
            json: async () => ({ ip: "123.456.789.000" }),
        });

        // Mock City API
        fetch.mockResolvedValueOnce({
            json: async () => ({ city: "Bengaluru" }),
        });

        // Mock Weather API
        fetch.mockResolvedValueOnce({
            // json: async () => ({
            //     location: { name: "New York" },
            //     current: { temp_c: 25, condition: { text: "Sunny" },
            //     },
            // }),
            json: async () => (weatherAPIResponse),
        });

        render(<Dashboard />);
        
        // Wait for the API call to complete and check if fetch was called
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(3); // Ensures all APIs were called
        });

        // Check if the weather details are displayed
        // Wait for the actual DOM update
        // await waitFor(() => {
            
        // });

        // Check if the weather details are displayed
        // await waitFor(() => {
            expect(screen.getByText(/Bengaluru/i)).toBeInTheDocument();
            expect(screen.getByText(/32.2/i)).toBeInTheDocument();
            expect(screen.getByText(/Partly Cloudy/i)).toBeInTheDocument();
        // });
        screen.debug(); // Print the entire document body
    })
})