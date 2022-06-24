# node typescript notebook quickstart

Add to init file: 

```zsh
tsnb () {
	git clone git@github.com:An-GG/tsnb-template.git $1
	if [[ -n "$1" ]]
	then
		cd $1
	else
		cd tsnb-template
	fi
	git remote rm origin
	npm i
	cd src
	vim index.ts
}
```
