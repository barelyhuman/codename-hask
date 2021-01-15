# rnboiler-monorepo
The following is a template repo that use yarn workspaces to handle react native in a monorepo

## Motivation 
The simplest setup I could get working to have a UI-Components and Libs packages handled with multiple react native apps in the same repo.

## Warning 
If you are using gitlab or github for multiple react-native apps make sure you monitor the overall size of the repo without the gitignored files to see
if you are in the 2GB limit that both providers have. 

If all of this is on a self hosted git server, I'd still advice you use domain based monorepo's instead of dumping everything in one repo.

## Usage
- Clone 
- Yarn install 
- Add scripts in the root package.json to handle workspace level executions

```sh
git clone https://github.com/barelyhuman/rnboiler-monorepo
rm -rf .git 
git init 
yarn install 

# Current Scripts
yarn appone:start # start the metro server
yarn appone:ios # start the ios version 
yarn appone:android # start the android version 
```
