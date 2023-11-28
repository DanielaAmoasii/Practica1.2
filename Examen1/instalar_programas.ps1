Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

scoop bucket add extras
scoop install vscode
scoop install git
scoop install nodejs