import Brand from "./Brand";
import NavBar from "../NavBars/NavBar";
import "./BrandHeader.css";

function BrandHeader(){
    return(
        <header>
            <Brand title="Login"></Brand>
            <NavBar></NavBar>
        </header>
    );
}

export default BrandHeader;