## How to build and run API

Run the following commands in a terminal window:

```sh
cd API
python3.9 -m venv env
# on linux, execute `source env/bin/activate` instead of the below command
# on windows, run `env\Scripts\activate.ps1` if using powershell
env\Scripts\activate.bat
(env) pip install -r requirements.txt
(env) python main.py
```

Navigate to [http://localhost:8080/docs](http://localhost:8080/docs)

## How to build and run the web app

1. Install yarn using `npm -g install yarn`
1. Run the following commands in a terminal window:

    ```sh
    cd WebApp
    yarn install
    yarn start
    ```

Navigate to [http://localhost:3000](http://localhost:3000)