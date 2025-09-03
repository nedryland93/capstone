import { useEffect } from "react";

export default function Delivery({info}) {
    useEffect(() => {
        document.title="Little Lemon - Delivery";
    }, []);

    return (
        <div 
            className="menu" 
            style={{flex: "1"}}
        >
            <p style={{textAlign: "center"}}>
                Page under construction
            </p>
            <p style={{textAlign: "center"}}>
                Available booking time testing panel: {
                    info.map(item => {
                        return (
                            <span> {item} - </span>
                        );
                    })
                }
            </p>
        </div>
        
    );
}