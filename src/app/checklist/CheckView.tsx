import styles from './checklist.module.css'
import {ChecklistItem} from "@/app/checklist/checklist-support";

export interface CheckProps {
    check: ChecklistItem
}

export const CheckView = ({check} : CheckProps) => {
    return <div className={styles.check}>
        <div>{check.item}</div>
        <div className={styles.confirm}>{check.confirmations.join(', ')}</div>
    </div>
}