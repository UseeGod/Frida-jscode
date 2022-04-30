import frida
import sys


def on_message(message, data):
    print(message)


# Hooking 할 어플리케이션의 package명
PACKAGE_NAME = "합성검 던지기"

jscode = """
console.log("[+] Start Script");

"""

process = frida.get_usb_device(timeout=10).attach(PACKAGE_NAME)
script = process.create_script(jscode)
script.on('message', on_message)
print('[+] Running Hook attach')
script.load()
sys.stdin.read()
