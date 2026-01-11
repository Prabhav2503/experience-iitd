import React from "react";
import Navbar from "../components/Navbar";
import Heropage from "../Components/Heropage";
import Description from "../Components/Description";
import Buttons from "../Components/Buttons";

function Home() {
    return(
        <div>
            <Navbar />
            <Heropage />
            <Description />
            <Buttons />
        </div>
    )
}

export default Home;