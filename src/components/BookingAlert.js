export default function BookingAlert({ children, status }) {
    return (
        <div 
            className="overlay"
            style={
                status?
                {display: "flex"}:
                {display: "none"}
            }
        >
            <div className="dialog">
                {children}
            </div>
        </div>
    )
}