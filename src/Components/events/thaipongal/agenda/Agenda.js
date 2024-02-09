import React from "react";
import { Grid, Container } from "@mui/material";
import "./agenda.css";
import Heading from "../../../../shared/Heading";

function Agenda() {
    const events = [
        "பொங்கல் பூஜை",
        "தமிழ்த்தாய் வாழ்த்து",
        "வரவேற்புரை",
        "நடனம்",
        "வாய்ப்பாட்டு",
        "பிரதம விருந்தினர் உரை",
        "வில்லுப்பாட்டு",
        "வாய்ப்பாட்டு",
        "சிறப்பு விருந்தினர் உரை",
        "பட்டிமன்றம்",
        "நடனம்",
        "நன்றி உரை",
        "பாரம்பரிய விளையாட்டு",
    ];

    return (
        <div className="agenda-container-div">
            <Container
                maxWidth="lg"
                className="agenda-container"
                sx={{ pb: 4 }}
            >
                <Heading>நிகழ்ச்சி நிரல்</Heading>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.001}
                    cols={2}
                >
                    <div className="event-container-1">
                        <p className="para1">
                            மொறட்டுவை பல்கலைக்கழக தமிழ் இலக்கிய மன்றம்
                            பெருமையுடன் வழங்கும்
                        </p>
                        <h1>பொங்கல் விழா 2023</h1>
                        <p className="para2">
                            திகதி - 08.01.2023
                            <br />
                            நேரம் - காலை 07:30
                            <br />
                            இடம் - பல்கலைக்கழக வளாகம்
                        </p>
                    </div>
                    <div className="event-container-2">
                        <h1>பொங்கல் விழா 2023</h1>
                        <div className="events">
                            <h2>நிகழ்ச்சி நிரல்</h2>
                            <ul>
                                {events.map((event, index) => (
                                    <li key={index}>{event}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197344750@N07/52611130808/in/dateposted-public/">
                        <img src="https://live.staticflickr.com/65535/52611130808_25e5808b4c_c.jpg" width="470" height="795" alt="Screenshot (635) - Copy" ></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197344750@N07/52611130403/in/dateposted-public/">
                        <img src="https://live.staticflickr.com/65535/52611130403_0972d04503_c.jpg" width="463" height="799" alt="agenda"></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */}
                </Grid>
            </Container>
        </div>
    );
}

export default Agenda;
