import frida
import sys


def on_message(message, data):
    if message['type'] == 'send':
        print(message['payload'])
    else:
        print(message)


jscode = """
setImmediate(function() {
    Java.perform(function() {
        var Activity = Java.use("android.app.Activity");
        Activity.onResume.implementation = function() {
            send("[*] onResume got called!");
            this.onResume();
        }
    })
})
"""

process = frida.get_usb_device(timeout=10).attach(6343)
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
sys.stdin.read()
