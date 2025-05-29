import styles from './checklist.module.css'
import {ChecklistItem} from "@/app/checklist/checklist-support";
import {Typography} from "@mui/material";

export interface CheckProps {
    check: ChecklistItem
}

export const CheckView = ({check}: CheckProps) => {
    const section = check.children.length > 0
    return <Typography color={check.critical ? 'error' : ''} component={'div'} className={section ? styles.section : ''}>
        <div className={styles.check}>
            <div className={section ? styles.heading : ''}>{check.item}</div>
            <div className={styles.confirm}>
                {check.confirmations.map((confirmation, index) =>
                    <div key={index} className={styles.confirmation}>
                        {confirmation}
                    </div>
                )}
            </div>
        </div>
        {check.children.map(subCheck => <CheckView key={subCheck.item} check={subCheck}/>)}
    </Typography>
}