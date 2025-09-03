import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import RoutingPage from "./components/RoutingPage";
import * as api from "./components/api";

test("Render the Booking Form Heading", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = "2025-09-03";

    render(
        <MemoryRouter>
            <BookingPage 
                availableTimes={availableTimes} 
                updateTimes={updateTimes}
                updateDate={updateDate}
                submitForm={submitForm}
                confirmData={updateConfirmData}
                todayDate={todayDate}
            />
        </MemoryRouter>
    );

    const headingElement = screen.getByText(/Reserve a table/i);
    expect(headingElement).toBeInTheDocument();
});

test("Testing initializeTimes function", () => {
    const mockTimes = ["17:00", "18:00"];
    jest.spyOn(api, "fetchAPI").mockReturnValue(mockTimes);

    render (
        <MemoryRouter>
            <RoutingPage/>
        </MemoryRouter>
    );

    expect(api.fetchAPI).toHaveBeenCalledTimes(1); 
})

test("Testing function updateTimes", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = "2025-09-03";

    render(
        <MemoryRouter>
            <BookingPage 
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                todayDate={todayDate}
                updateDate={updateDate}
                submitForm={submitForm}
                confirmData={updateConfirmData}
            />
        </MemoryRouter>
    );

    const select = screen.getByLabelText(/Choose time/i);
    fireEvent.change(select, {target: {value: "18:00"}});

    const submitButton = screen.getByRole("button", {name: /Make Your reservation/i});
    fireEvent.click(submitButton);

    expect(updateTimes).toHaveBeenCalledTimes(1);
    expect(updateTimes).toHaveBeenCalledWith("18:00");
});

test("Testing form functionality", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = "2025-09-03";

    render(
        <MemoryRouter>
            <BookingPage 
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                todayDate={todayDate}
                updateDate={updateDate}
                submitForm={submitForm}
                confirmData={updateConfirmData}
            />
        </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Make Your reservation/i }));
    expect(submitForm).toHaveBeenCalled();
});