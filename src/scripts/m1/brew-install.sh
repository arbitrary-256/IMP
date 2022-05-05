#!/bin/bash
#arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'installed Homebrew'
arch -x86_64 brew install -s -d -v gcc
arch -x86_64 brew install -s -d -v pkg-config
arch -x86_64 brew install -s -d -v node
arch -x86_64 brew install -s -d -v yarn
arch -x86_64 brew install -s -d -v rustup-init
echo 'compiled toolchain'
arch -x86_64 brew install -s -d -v libpng
arch -x86_64 brew install -s -d -v jpeg
arch -x86_64 brew install -s -d -v giflib
arch -x86_64 brew install -s -d -v cairo
arch -x86_64 brew install -s -d -v pango
arch -x86_64 brew install -s -d -v librsvg
arch -x86_64 brew install -s -d -v vips
echo 'compiled libraries'
arch -x86_64 npm i -g redrun rimraf typescript
yarn

