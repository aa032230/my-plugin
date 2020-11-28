export interface IAlertOptions {
    duration?: Number,
    headerTitle?: String,
    alertText?: String

}

export enum DEFAULT_VALUES {
    DURATION = 300,
    HEADER_TITLE = 'this is my alert title',
    ALERT_TEXT = 'this is my alert content'
}

export enum UI_COLOR_TYPES{
    SUCCESS = 'success',
    PRIMARY = 'primary',
    WARNING = 'warning',
    DANGER = 'danger'
}