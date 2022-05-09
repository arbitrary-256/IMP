#!/bin/bash
 echo
 echo 'Cross-compiling tools to allow IMP to be compiled on'
 echo 'macOS/darwin Apple Silicon-based machines through'
 echo 'some clever Rosetta shell trickery.'
 echo
 echo 'It will rebuild gcc, node, yarn, and several dependencies'
 echo 'of the sharp npm package needed to display images '
 echo ''
 echo
 echo 'This process will take more than an hour on a regular M1'
 echo 'such as the M1 Mac mini, M1 MacBook Air, M1 MacPro 13,'
 echo 'or M1 iMac.'
 echo
 read -p "Are you sure you want to proceed? This operation cannot be aborted. (y/n?)" -n 1 -r
 echo
  if [[ $REPLY =~ ^[Yy]$ ]] then
  arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
  echo 'uninstalled Homebrew'
  arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  echo 'installed Homebrew'
  arch -x86_64 brew install -s -d -v gcc
  arch -x86_64 brew install -s -d -v pkg-config
  arch -x86_64 brew install -s -d -v node
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
  echo '(👺) built M1 toolchain successfully'
  echo 'You can now run the following command to build IMP:'
  echo ''
fi
