'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {CssBaseline} from "@mui/material";
import {ColorModeProvider} from "@/app/ColorModeProvider";
import {useState} from "react";
import {vpeChecklist_RAAC} from "@/app/checklist/vpeChecklist_RAAC";
import {vpeChecklist_Piet} from "@/app/checklist/vpeChecklist_Piet";

const checklists = [vpeChecklist_Piet, vpeChecklist_RAAC]

export default function Home() {
    const [checklistIndex, setChecklistIndex] = useState(0);
    const activeChecklist = checklists[checklistIndex];

    const toggleChecklist = () => {
        setChecklistIndex((checklistIndex + 1) % checklists.length)
    }

    return <>
        <ColorModeProvider>
            <CssBaseline enableColorScheme={true}/>
            <ChecklistViewer checklist={activeChecklist} toggleChecklist={toggleChecklist}/>
        </ColorModeProvider>
    </>
}
