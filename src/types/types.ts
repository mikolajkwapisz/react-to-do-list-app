export interface TaskType {
    id: number,
    title: string,
    currentDay: string,
    category: string,
    priority: string,
    difficulty: number,
    endDay: string,
    status: boolean
}

export type SelectOption = {
    label: string
    value: any
}

export interface SelectProps {
    options: SelectOption[]
    value?: SelectOption
    onChange:  (value: SelectOption | undefined) => void
    fullWidth?: boolean | null | undefined
    hoverColor?: string | boolean | undefined
}