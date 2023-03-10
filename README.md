## How to build and run API

### Pre-requisites:
Make sure you have python installed.\
If not, install the latest version from https://www.python.org/downloads/

### Steps:
Run the following commands in command prompt:

```sh
cd API
python -m venv env
# on linux, execute `source env/bin/activate` instead of the below command
# on windows, run `env\Scripts\activate.ps1` if using powershell
env\Scripts\activate.bat
(env) pip install -r requirements.txt
(env) python main.py
```
```sh
## create conda environment
conda create --name mlenv python==3.9
```

Navigate to http://localhost:8080/docs

## How to build and run the web app

### Pre-requisites:
Make sure you have Node.js installed.\
If not, you can download and install the latest LTS version from https://nodejs.org/en/

### Steps:
Install yarn using `npm -g install yarn`
Run the following commands in command prompt:

```sh
cd WebApp
yarn install
yarn start
```

Navigate to http://localhost:3000