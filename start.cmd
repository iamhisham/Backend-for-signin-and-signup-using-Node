set IS_LOCAL_DEVELOPMENT=true

set SERVER_PORT=8000
set DATABASE_PORT=3306
set DATABASE_USERNAME=root
set DATABASE_PASSWORD=root
set DATABASE_SCHEMA=registration
set DATABASE_HOST=localhost

REM Possible values are CREATE/UPDATE/OFF
set DATABASE_DDL_GENERATE=UPDATE

set ALLOW_ORIGIN=*

node --inspect index.js
