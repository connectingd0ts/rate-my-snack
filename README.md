## How to build and run API

### Pre-requisites:
Make sure you have python installed.\
If not, install the latest version from https://www.python.org/downloads/

The prediction model could not be uploaded to Github due to its size.\
Download the model from https://drive.google.com/drive/folders/1gIjfZoeA7cMriz2v_L2HCbqoAS5utsnN \
Create a folder named `model` inside `API` and paste it there.

<b>Note:</b> You will need admin rights to install python and tensorflow on your machine.

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

In case you get an error while installing tensorflow, try the following:\
Install conda from https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html
```sh
## create conda environment
conda create --name mlenv python==3.9
conda activate mlenv
pip install -r requirements.txt
python main.py
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

Navigate to http://localhost:3000 \
Use the username `johndoe` and password `123` to login.