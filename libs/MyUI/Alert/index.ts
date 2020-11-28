import { IAlertOptions, DEFAULT_VALUES, UI_COLOR_TYPES } from './typings'
import Template from './Template'
import $ from 'jquery'
export default class Alert extends Template {

    private _headerTitle: String
    private _alertText: String
    private _duration: Number
    private oAlert: JQuery<HTMLElement>
    private oIcon: JQuery<HTMLElement>
    private oInner: JQuery<HTMLElement>
    private _oHeaderTitle: JQuery<HTMLElement>
    private _oAlertText: JQuery<HTMLElement>

    constructor(options: IAlertOptions) {
        super()
        const _options: IAlertOptions = Alert.mergeOptions(options)
        this._headerTitle = _options.headerTitle
        this._alertText = _options.alertText
        this._duration = _options.duration
        this.render()
    }

    private render() {
        document.body.appendChild(this.alertView({
            headerTitle: this._headerTitle,
            alertText: this._alertText
        }))
        this.oAlert = $('.alert ')
        this.oIcon = $('.icon ')
        this.oInner = $('.inner ')
        this._oHeaderTitle = this.oAlert.find('.alert-header h1')
        this._oAlertText = this.oAlert.find('.alert-wrap p')
        this.bindEvent()
    }
    private bindEvent() {
        this.oIcon.on('click', this.hide.bind(this))
        this.oAlert.on('click', this.hide.bind(this))
        this.oInner.on('click', e => e.stopPropagation())
    }

    private static mergeOptions(options: IAlertOptions) {
        const _defaultOptions = {
            headerTitle: DEFAULT_VALUES.HEADER_TITLE as string,
            alertText: DEFAULT_VALUES.ALERT_TEXT as string,
            duration: DEFAULT_VALUES.DURATION as number
        }

        if (!options) {
            return _defaultOptions
        }

        return Object.assign(_defaultOptions, options)
    }

    public static create(options?: IAlertOptions) {
        return new Alert(options)
    }

    public show(type?: String, options?: IAlertOptions) {
        if (options) {
            const { headerTitle, alertText, duration } = options
            headerTitle && this._oHeaderTitle.html(headerTitle as string)
            alertText && this._oAlertText.html(alertText as string)
            this._duration = duration || this._duration
        }

        let _type: UI_COLOR_TYPES = UI_COLOR_TYPES.PRIMARY

        for (let k in UI_COLOR_TYPES) {
            if (UI_COLOR_TYPES[k] === type) {
                _type = type as UI_COLOR_TYPES
            }
        }
        this.oAlert.addClass(_type)
        this.oAlert.fadeIn(this._duration)

    }

    public hide() {
        this.oAlert.fadeOut(this._duration)
    }
}
