'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {pegChecklist} from "@/app/checklist/pegChecklist";
import {CssBaseline} from "@mui/material";
import {ColorModeProvider} from "@/app/ColorModeProvider";
import {warChecklist} from "@/app/checklist/warChecklist";
import {useState} from "react";

const checklists = [warChecklist]

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
