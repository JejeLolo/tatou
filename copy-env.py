import os
import shutil

ENVDIR=os.path.join('.', 'env')

LIST = ['frontend', 'backend']

for app in LIST:
    shutil.copyfile(os.path.join(ENVDIR, f'{app}.env.example'), os.path.join(ENVDIR, f'{app}.env'))