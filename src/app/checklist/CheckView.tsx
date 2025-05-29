import styles from './checklist.module.css'
import {ChecklistItem} from "@/app/checklist/checklist-support";
import {Typography} from "@mui/material";

export interface CheckProps {
    check: ChecklistItem
}

export const CheckView = ({check}: CheckProps) => {
    return <Typography color={check.critical ? 'error' : ''} component={'div'}>
        <div className={styles.check}>
            <div>{check.item}</div>
            <div className={styles.confirm}>
                {check.confirmations.map((confirmation, index) =>
                    <div key={index} className={styles.confirmation}>
                        {confirmation}
                    </div>
                )}
            </div>
        </div>
    </Typography>
}