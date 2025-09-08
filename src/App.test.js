import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import RoutingPage from "./components/RoutingPage";
import * as api from "./components/api";

function getTodayISO() {
  return new Date().toISOString().split("T")[0];
}

test("Testing the 'Heading' element is rendered correctly", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = getTodayISO();

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

test("Testing initializeTimes function work properly", () => {
    const mockTimes = ["17:00", "18:00"];
    jest.spyOn(api, "fetchAPI").mockReturnValue(mockTimes);

    render (
        <MemoryRouter>
            <RoutingPage/>
        </MemoryRouter>
    );

    expect(api.fetchAPI).toHaveBeenCalledTimes(1); 
})

test("Testing function updateTimes work properly", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = getTodayISO();

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

test("Testing form submit function work properly", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = getTodayISO();

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

test("Testing form have correct HTML5 validation attributes", () => {
    const availableTimes = ["17:00", "18:00"];
    const updateTimes = jest.fn();
    const updateDate = jest.fn();
    const submitForm = jest.fn();
    const updateConfirmData = jest.fn();
    const todayDate = getTodayISO();

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

    const dateInput = screen.getByLabelText(/date/i);
    const guestInput = screen.getByLabelText(/guests/i);

    expect(dateInput).toHaveAttribute("min", todayDate);
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");
})

describe("BookingPage date input validation", () => {
    const mockUpdateDate = jest.fn();
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("shows error if date field is empty", async () => {
        // Initialize the field empty to test the error
        render(
            <MemoryRouter>
                <BookingPage
                    availableTimes={[]}
                    updateTimes={mockUpdateTimes}
                    todayDate=""  // field initially empty
                    updateDate={mockUpdateDate}
                    submitForm={mockSubmitForm}
                    confirmData={null}
                />
            </MemoryRouter>
        );

        const dateInput = screen.getByLabelText(/choose date/i);

        fireEvent.change(dateInput, { target: { value: "" } });

        await waitFor(() => {
            expect(screen.getByTestId("date-error")).toBeInTheDocument();
        });
    });

    test("does not show error if valid date is selected (>= today)", async () => {
        const today = getTodayISO();

        render(
            <MemoryRouter>
                <BookingPage
                    availableTimes={[]}
                    updateTimes={mockUpdateTimes}
                    todayDate={today}
                    updateDate={mockUpdateDate}
                    submitForm={mockSubmitForm}
                    confirmData={null}
                />
            </MemoryRouter>
        );

        const dateInput = screen.getByLabelText(/choose date/i);

        fireEvent.change(dateInput, { target: { value: today } });

        await waitFor(() => {
            expect(screen.queryByTestId("date-error")).not.toBeInTheDocument();
        });
    });

    test("calls updateDate with a correct Date object when a valid date is selected", async () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayISO = yesterday.toISOString().split("T")[0];

        const today = getTodayISO();

        // initialize with yesterday, so changing to today actually changes the value
        render(
            <MemoryRouter>
                <BookingPage
                    availableTimes={[]}
                    updateTimes={mockUpdateTimes}
                    todayDate={yesterdayISO}
                    updateDate={mockUpdateDate}
                    submitForm={mockSubmitForm}
                    confirmData={null}
                />
            </MemoryRouter>
        );

        const dateInput = screen.getByLabelText(/choose date/i);

        fireEvent.change(dateInput, { target: { value: today } });

        await waitFor(() => {
            expect(mockUpdateDate).toHaveBeenCalledWith(new Date(today));
        });
    });
});