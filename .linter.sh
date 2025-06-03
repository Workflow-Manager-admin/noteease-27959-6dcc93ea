#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-27959-6dcc93ea/noteapp
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

