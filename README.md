1st UPDATE PRIORITIES
- form: replace submit button text with "Start 14-day free trial"
- form: find suitable regex for email validation & test it
- form: add visual feedback if required fields are empty
- form: change comment to optional, not required

AFTERWARDS: 
- Industry routes/pages localizations

GLOBAL QUALITY OF LIFE IMPROVEMENTS: 
- Nginx + Certbot: make separate docker-compose with its own .env variables
- Other composes: remove nginx and certbot services 
- Docker/Server: all volumes need to be in fixed spot which won't be changed