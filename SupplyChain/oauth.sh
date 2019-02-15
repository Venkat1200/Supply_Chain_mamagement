export COMPOSER_CARD=admin@supply-chain-management

export COMPOSER_NAMESPACES=never

export COMPOSER_AUTHENTICATION=true

export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "clientID": "62e2d76d299dddaa5d5f",
    "clientSecret": "25e22d6bd52f02df63bdf71d2947e0291cf3c276",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "/",
    "failureRedirect": "/"
  }
}'

composer-rest-server