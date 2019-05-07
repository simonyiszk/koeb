import json
import os
import sys


if __name__ == '__main__':
    logos = [
        {'name': 'logo', 'src': src} for src in os.listdir(sys.argv[1])
        if os.path.isfile(src) and src.endswith(('.png', '.PNG', '.jpg', '.JPG'))
    ]

    print(json.dumps(logos, indent=2))
