import {React} from "react";
import AddNewProject from "./AddNewProject";
import RenameProject from "./RenameProject";
import Project from "./Project";

function Projects(){
    return (
        <div className="Projects">
            <AddNewProject/>
            <RenameProject/>
        </div>
    )
}

export default Projects;