import React from "react";
// import Navbar from "../components/Navbar";
import Heropage from "../Components/Heropage";
import Ask from "../Components/Ask";
import Description from "../Components/Description";
import Buttons from "../Components/Buttons";
import Voices from "../Components/Voices";

function Home() {
    return(
        <div>
            {/* <Navbar /> */}
            <Heropage />
            <Voices />
            <Buttons />
            <Ask />
            {/* <Description /> */}
        </div>
    )
}

export default Home;