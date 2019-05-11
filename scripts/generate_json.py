#!/usr/bin/python3

import json
import os
import sys


if __name__ == '__main__':
    logos = [
        {'name': 'logo', 'src': src, 'link': 'http://koeb.hu'} for src in os.listdir(sys.argv[1])
    ]

    print(json.dumps(logos, indent=2))
