#!/bin/bash
cd /Users/yukio/Desktop/wasamata_claude
/usr/bin/ruby -rwebrick -e "WEBrick::HTTPServer.new(Port: ${PORT:-8080}, DocumentRoot: '/Users/yukio/Desktop/wasamata_claude').start"
