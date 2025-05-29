export const allFlightConditions = ['day', 'night'] as const
export type FlightCondition = (typeof allFlightConditions)[number]

export class ChecklistItem {
    item: string
    confirmations: string[]
    conditions: FlightCondition[]
    critical = false
    children: ChecklistItem[] = []

    constructor(item: string, confirmations: string[], conditions: FlightCondition[] = ['day', 'night']) {
        this.item = item
        this.confirmations = confirmations
        this.conditions = conditions
    }

    // Helper methods to configure fields

    confirm(...confirm: string[]): ChecklistItem {
        this.confirmations.push(...confirm)
        return this
    }

    // Add day condition only
    dayOnly(): ChecklistItem {
        this.conditions = ['day']
        return this
    }

    // Add night condition only
    nightOnly(): ChecklistItem {
        this.conditions = ['night']
        return this
    }

    markCritical(): ChecklistItem {
        this.critical = true
        return this
    }

    asSection(...items: ChecklistItem[]): ChecklistItem {
        this.children.push(...items)
        return this
    }
}

export interface Phase {
    name: string
    alternate?: string
    checks: ChecklistItem[]
}

export interface Checklist {
    name: string
    phases: Phase[]
}


export const item = (item: string) : ChecklistItem => new ChecklistItem(item, [])

// Keep the original function for backward compatibility
export const check = (checkedItem: string, confirm: string, conditions: FlightCondition[] = ['day', 'night']): ChecklistItem => {
    const checklistItem = item(checkedItem).confirm(confirm);
    checklistItem.conditions = conditions;
    return checklistItem;
}
