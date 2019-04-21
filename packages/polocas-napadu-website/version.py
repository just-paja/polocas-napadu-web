import json

with open('package.json') as json_file:
    PACKAGE = json.load(json_file)

PACKAGE_VERSION = PACKAGE['version']
