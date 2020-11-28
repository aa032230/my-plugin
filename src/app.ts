import { Alert } from '../libs/MyUI'

    ; ((doc) => {
        const oShowAlert: HTMLElement = doc.querySelector('#showAlert')
        // const alert = Alert.create()
        const alert = Alert.create({
            headerTitle: '这是alert第一个标题',
            alertText: '这是alert第一个内容',
            duration: 300
        })

        const init = (): void => {
            bindEvent()
        }

        function bindEvent(): void {
            oShowAlert.addEventListener('click', showAlert, false)
        }

        function showAlert(): void {
            alert.show()
            // alert.show('danger', {
            //     headerTitle: '这是alert第二个标题',
            //     alertText: '这是alert第二个内容',
            //     duration: 200
            // })
        }
        init()
    })(document)